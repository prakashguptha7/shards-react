import React from "react";
import {
    Container,
    Row,
    Col,
     Button,
    Card,
    CardBody,
  } from "shards-react";
import {appConfig} from '../utils'
import Select from 'react-select';
import {UserDisplay} from '../components/users/UsersDisplay';
const { useEffect, useState } = React;

export const Posts = (props) => {
  const [usertype, setUserType] = useState([]);
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState({ value: null, label: null });
  useEffect(() => {
    const getuserRoles=appConfig.webApi+"users/GetUserRole";
    fetch(getuserRoles, {
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
    const options =[];
    responseData.ObjUserRole.forEach(element => {
        options.push( { value: element.role, label: element.role })
    });
    setUserType(options);
});
  }, []);
const setUserTypeChange =() =>{
  handleSubmit();
}
  const handleChange = selectedOption => {
   setSelected(selectedOption);
  };
  const handleSubmit = () =>{
   if(!selected.value){
       alert("Select User Type");
   }else{
      // Get users based on selected user type
      const postUrl=appConfig.webApi+"users/GetUsers?usertype="+selected.value;
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
    setUsers(responseData);
  });
   }
  }
  return (
    <>
  <Container fluid className="main-content-container px-4">
    <Row>
      <Col>
        <Card small className="mb-4" style={{marginTop:"1%"}}>
          <CardBody className="p-0 pb-3" >
          <Row  style={{marginTop:"1%", marginLeft:"0.5%"}}>
              <Col md="3" className="form-group">
              <Select
              placeholder ={"Select User Type"}
             value={selected}
            onChange={handleChange}
            options={usertype}
             />
              </Col>
              <Col md="2">
              <Button type="submit" onClick={handleSubmit}>Get Users</Button>
              </Col>
            </Row>
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                  Name
                  </th>
                  <th scope="col" className="border-0">
                  Email
                  </th>
                  <th scope="col" className="border-0">
                  Phone Number
                  </th>
                  <th scope="col" className="border-0">
                    Change Role
                  </th>
                  <th scope="col" className="border-0">
                   Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, index) => (
                  <UserDisplay 
                  user ={u}
                  key={index}
                  setUserTypeChange = {setUserTypeChange}
                  />
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