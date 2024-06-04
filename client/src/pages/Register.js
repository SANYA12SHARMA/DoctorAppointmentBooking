import React from 'react'
import { Button, Form, Input } from "antd";

const Register = () => {
  const onFinishHandler = (values) => {
    console.log(values);
  }
  return (
    <>
      <div className='form-container'>
      <h1>Register form</h1>
      <Form layout="vertical" onFinish={onFinishHandler}>
      <Form.Item label="Name" name="name">
      <Input type="text" required/>
      </Form.Item>
      <Form.Item label="Email" name="email">
      <Input type="email" required/>
      </Form.Item>
      <Form.Item label="Password" name="password">
      <Input type="password" required/>
      </Form.Item>
      <Button className='btn btn-primary' type='submit'>
        Register
      </Button>
      </Form>
      </div>
    </>
  )
}

export default Register
