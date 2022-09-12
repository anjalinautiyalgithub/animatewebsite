import React from 'react';
import { Form,Button } from 'react-bootstrap';
import { useState } from 'react';
 
const Contact=()=>{
  const [user, setuser] = useState({
    fname:"",
    address:"",
    email:"",
    password:"",

  });
 
  const inputfield=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
        setuser({...user,[name]:value});
          
  }

  const Submit=(e)=>{
    e.preventDefault();
    alert('form submit');
    setuser({
      fname:"",
      address:"",
      email:"",
      password:"",
    })
  }
  
    return(
      <>
  <h1 className='text-center mt-3'>Contact Us</h1>
 <div className='Form_container'>
  <Form className='form_control' onSubmit={Submit}>
  
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Enter Your Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Name" className='inputs'  value={user.fname} name='fname'  onChange={inputfield}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Label>Enter Your Address</Form.Label>
    <Form.Control type="text" placeholder="Enter Address" className='inputs' value={user.address} name='address' onChange={inputfield}/>
  </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicEmail"> 
    <Form.Label >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" className='inputs' value={user.email} name='email' onChange={inputfield}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" className='inputs' value={user.password} name='password' onChange={inputfield}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" className='inputs'/>
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
       
       </>


    )
}

export default Contact;