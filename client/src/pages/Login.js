import React from 'react'
import { Form, Input,message } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/RegisterStyles.css";
import axios from "axios";
const Login = () => {
  const onFinishHandler = async (values) => {
    try{
      const res = await axios.post('/api/v1/user/login',values);
      if(res.data.success){
        message.success('User logged in Successfully');
      }else{
        message.error(res.data.message);
      }
    }catch(error){
      console.log(error);
      message.error("Something went wrong");
    }
  }
  return (
    <>
    <div className='form-container'>
      <Form layout="vertical" onFinish={onFinishHandler} className='register-form'>
        <h3 className='text-center'>Login form</h3>
        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <Link to="/register" className='m-2'>Not a user Register here.</Link>
        <button className='btn btn-primary' type='submit'>
          Login
        </button>
      </Form>
    </div>
  </>
  )
}

export default Login
