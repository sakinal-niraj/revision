import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleSignInButton from '../../components/GoogleSigInButton';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useState } from 'react';
import Swal from 'sweetalert2';


function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    // handlnig input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, loginData.email, loginData.password)
            .then(userInfo => {
                const token = userInfo.user.getIdToken();
                if (token) {
                    localStorage.setItem('token', token);
                    navigate('/');
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Logged in successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='form-container'>
            <Form className='signup-form' onSubmit={handleSignIn}>
                <h1>Sign In </h1>
                {/* Email id */}
                <Form.Group className='signup-form-input-container' controlId="formBasicEmail">
                    <Form.Label>Email-Id</Form.Label>
                    <Form.Control
                        className='signup-form-input'
                        type="email"
                        placeholder="john@gmail.com"
                        value={loginData.email}
                        name='email'
                        onChange={handleInputChange}
                    />
                </Form.Group>

                {/* Password */}
                <Form.Group className='signup-form-input-container' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className='signup-form-input'
                        type='password'
                        placeholder='John@123'
                        value={loginData.password}
                        name='password'
                        onChange={handleInputChange}
                    />
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