import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleSignUpButton from '../../components/GoogleSignupButton';

function Signup() {
    return (
        <div className='form-container'>
            <Form className='signup-form' >
                <h1>Signup </h1>
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
                        Signup
                    </Button>
                </Form.Group>

                <Form.Group className='signup-form-btn'>
                    <GoogleSignUpButton />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Signup;