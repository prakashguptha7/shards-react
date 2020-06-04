import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput, Button } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
class Editor extends React.Component {
    constructor (props) {
      super(props)
      this.state = { message: 'Hello' }
      this.handleChange = this.handleChange.bind(this)
    }
  
  

  handleChange (html) {
    
  	this.setState({ message: html });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const form = {
      message: this.state.message
    }
   
  
    console.log(form);
 }
  
  render () {
    return (
      <div>
         <Card small className="mb-3"> 
         <CardBody>
         <Form className="add-new-post" >
        <ReactQuill 
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.message}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={'.app'}
          placeholder={this.props.placeholder}
          className="add-new-post__editor mb-1"
         />
          <Button theme="success" onClick={(e) => this.onSubmit(e)}>Send</Button>
          </Form>
          </CardBody>
         </Card>
       </div>
     )
  }
}

export default Editor;
