import React from "react";
import { Container, Row, Col } from "shards-react";
import {appConfig} from '../utils';
import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
const { useEffect, useState } = React;

export const About = () => {
  const [about, setAbout] = useState();
  useEffect(() => {
    const getabout=appConfig.webApi+"Users/GetAbout?doctype=About";
    fetch(getabout, {
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
   console.log(responseData)
    });
  }, []);
 
   return (
    <Container fluid className="main-content-container px-4 pb-4">
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    <Row>
      <Col lg="12" md="12">
        <Editor 
        setAbout = {about}
        />
      </Col>
    </Row>
  </Container>
  )
};

export default About;
