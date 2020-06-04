import React from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";
import {appConfig} from '../utils'

import {PostDisplay} from '../components/posts/PostDisplay';
const { useEffect, useState } = React;

export const Posts = (props) => {
  let userType ="Star";
  const {path} = props.match;
  // if(path === "/star-posts"){
  //   userType ="Star";
  // } else if(path === "/ngo-posts") {
  //   userType ="NGO's";
  // } else if(path === "/law-posts"){
  //   userType ="Judiciaries";
  // } else if(path === "/student-posts"){
  //   userType ="Legislators";
  // }
   userType = path === "/star-posts" ? "Star" : (path === "/ngo-posts" ? "NGO's" : (path === "/law-posts" ? "Judiciaries" :  "Legislators") );

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postUrl=appConfig.webApi+"Post/GetPost?usertype="+userType;
    fetch(postUrl, {
    method: 'post',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*'
  },
  body: JSON.stringify(null)
}).then(function (response) {
  return response.json();
}).then(function (responseData) {
setPosts(responseData);
});
  }, [])
  return (
    <>
  <Container fluid className="main-content-container px-4">
    <Row>
      <Col>
        <Card small className="mb-4" style={{marginTop:"1%"}}>
         {/*  <CardHeader className="border-bottom">
            <h6 className="m-0">Active Users</h6>
          </CardHeader> */}
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                  Title
                  </th>
                  <th scope="col" className="border-0">
                  Description
                  </th>
                  <th scope="col" className="border-0">
                  Created By
                  </th>
                  <th scope="col" className="border-0">
                    Created Date
                  </th>
                  <th scope="col" className="border-0">
                   Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((p, index) => (
                  <PostDisplay post ={p} key={index}/>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
</Container>
</>
);
};

export default Posts;