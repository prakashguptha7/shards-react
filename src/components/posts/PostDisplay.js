import React from "react";
import * as moment from "moment";
import Switch from "react-switch";
import {appConfig} from '../../utils';
export const PostDisplay = ({ post }) => {
  const [postStatus, setPostStatus] = React.useState(post.status);
  const handleChange = () =>{
    const postUrl=appConfig.webApi+"Post/UpdateStatus?datattype=Post&id="+post.id+"&status="+!post.status;
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
  if(responseData.Message === "Successfull"){
    setPostStatus(!post.status);
  }
  });
    
  }
   return (
    <tr key ={post}>
                  <td>{post.title}</td>
                  <td>{post.description}</td>
                  <td>{post.createdbyname}</td>
                  <td>{moment(post.createddate).format('ll')}</td>
                  <td> <Switch onChange={handleChange} checked={postStatus} /></td>
                </tr>
  )
};

export default PostDisplay;
