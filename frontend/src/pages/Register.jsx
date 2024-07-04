import React, { useState } from 'react'
import FormContainer from '../components/FormContainer'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPasssword, setConfirmPassword] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (password !== confirmPasssword) {
            return alert("Passwords do not match")
        }
        
    }

  return (
    <FormContainer>
        <h1 className='text-center mb-5'>
            Account <span className="text-primary">Register</span>
        </h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='name'>
                <Form.Label className='mb-3'>
                    Name
                </Form.Label>
                <Form.Control type='text' placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='email'>
                <Form.Label className='mb-3'>
                    Email
                </Form.Label>
                <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}>
                    
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='password'>
                <Form.Label className='mb-3'>
                    Password
                </Form.Label>
                <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}>
                    
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='ConfirmPassword'>
                <Form.Label className='mb-3'>
                    Confirm Password
                </Form.Label>
                <Form.Control type='password' placeholder='Confirm password' value={confirmPasssword} onChange={(e)=>setConfirmPassword(e.target.value)}>
                    
                </Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary' className='mt-3'>Sign up</Button>
            <Row className="py-3">
                <Col>
                    Already have an account? <Link to="/login">Login</Link>
                </Col>
            </Row>

        </Form>
    </FormContainer>
  )
}

export default Register