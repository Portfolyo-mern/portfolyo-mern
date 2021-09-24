import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';

import axios from "axios";

import {Baseurl} from "../../App";

import LinearProgress from '@material-ui/core/LinearProgress';

const { TextArea } = Input;

function AppContact() {
  const [load,setload] = React.useState(false);
  const submit = async () => {
    try{

      setload(true);
      const fullName = document.querySelector("#fullName").value;
      const emailAddress = document.querySelector("#emailAddress").value;
      const phone = document.querySelector("#phone").value;
      const subject = document.querySelector("#subject").value||"";
      const message = document.querySelector("#message").value;
      const data = {
        fullName,
        emailAddress,
        phone,
        subject,
        message,
      }
      if(fullName===null||emailAddress===null||phone===null||message===null){
        setload(false);
      } else{
        const result = await axios({
          method:"post",
          url:`${Baseurl}/submitQuestion`,
          data
        });
        alert(result.data);
        setload(false);
      }
    }catch(err){
      setload(false);
    }
  }
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>Feel free to get in touch open 24x7</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
        <LinearProgress style={{marginBottom:"2rem",display:(load)?"inherit":"none"}}/>
          <Form.Item
            name="fullName"
            rules={[
              { 
                required: true,
                message: 'Please enter your full name!' 
              }]
            }
          >
            <Input placeholder="Full Name" 
              id="fullName"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Email Address"
              id="emailAddress"
            />
          </Form.Item>
          <Form.Item
            name="telephone"
            rules={[
              { 
                required: true,
                message: 'Please enter your telephone number!' 
              }]}
          >
            <Input placeholder="Telephone" 
              id="phone"
            />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Subject" 
              id="subject"
            />
          </Form.Item>
          <Form.Item
             rules={[
              { 
                required: true,
                message: 'Please enter any message!' 
              }]}
            name="message"
          >
            <TextArea placeholder="Message"
             id="message"
            />
          </Form.Item>
          {/* <Form.Item>
            <Form.Item 
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item> */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={submit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>  
  );
}

export default AppContact;