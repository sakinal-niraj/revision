import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleSignInButton from '../../components/GoogleSigInButton';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className='form-container'>
            <Form className='signup-form' >
                <h1>Sign In </h1>
                {/* Email id */}
                <Form.Group className='signup-form-input-container' controlId="formBasicEmail">
                    <Form.Label>Email-Id</Form.Label>
                    <Form.Control className='signup-form-input' type="email" placeholder="john@gmail.com" />
                </Form.Group>

                {/* Password */}
                <Form.Group className='signup-form-input-container' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='signup-form-input' type='password' placeholder='John@123' />
                </Form.Group>

                {/* Button */}
                <Form.Group className='signup-form-button-container'>
                    <Button variant="primary" type="submit" className='signup-button'>
                        Signin
                    </Button>
                    <Form.Text>Already have an account?
                        <Link to={'/signup'}>Signup</Link>
                    </Form.Text>
                </Form.Group>

                <div className='signup-divider'>
                    or
                </div>

                <Form.Group className='signup-form-btn'>
                    <GoogleSignInButton />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Login;