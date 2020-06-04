import React from "react";
import Switch from "react-switch";
import {appConfig} from '../../utils';
import Select from 'react-select';
import {
  Container,
  Row,
  Col,
   Button,
  Card,
  CardBody,
} from "shards-react";
const { useEffect, useState } = React;

export const UserDisplay = ({ user,setUserTypeChange }) => {
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
  const handleChange = selectedOption => {
    setSelected(selectedOption);
   };
   const handleSubmit = () =>{
    if(!selected.value){
        alert("Select User Type");
    }else{
      // console.log("ChangeUsersType?userid="+user.id+"&usertype="+ selected.value);
       // Get users based on selected user type
      //  ChangeUsersType?userid={userid}&usertype={usertype}
      
       const postUrl=appConfig.webApi+"users/ChangeUsersType?userid="+user.id+"&usertype="+ selected.value;
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
    //  setUsers(responseData);
    setUserTypeChange(true);
    
   });
    }
    }
   return (
    <tr key ={user}>
                  <td>{user.firstname} {user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
    <td>
          <Row  style={{marginTop:"1%"}}>
              <Col md="6" className="form-group">
              <Select
              value={selected}
             onChange={handleChange}
             options={usertype}
            
             />
              </Col>
              <Col md="1">
              <Button size="sm" onClick={handleSubmit} type="submit">&#x2714;change</Button>
              </Col>
            </Row>
        </td>
                  <td> {user.status}</td>
                </tr>
  )
};

export default UserDisplay;
