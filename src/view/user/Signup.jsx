import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleSignInButton from '../../components/GoogleSigInButton';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import Swal from 'sweetalert2';


function Signup() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    // handle form input change
    const handleSignupInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then(userInfo => {
                const token = userInfo.user.getIdToken();
                if (token) {
                    localStorage.setItem('token', token);
                    navigate('/');
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Singup successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='form-container'>
            <Form className='signup-form' onSubmit={handleSignup} >
                <h1>Signup </h1>
                {/* Email id */}
                <Form.Group className='signup-form-input-container' controlId="formBasicEmail">
                    <Form.Label>Email-Id</Form.Label>
                    <Form.Control
                        className='signup-form-input'
                        type="email"
                        placeholder="john@gmail.com"
                        value={formData.email}
                        name="email"
                        onChange={handleSignupInputChange}
                    />
                </Form.Group>

                {/* Password */}
                <Form.Group className='signup-form-input-container' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className='signup-form-input'
                        type='password'
                        placeholder='John@123'
                        value={formData.password}
                        name="password"
                        onChange={handleSignupInputChange}
                    />
                </Form.Group>

                {/* Button */}
                <Form.Group className='signup-form-button-container'>
                    <Button variant="primary" type="submit" className='signup-button'>
                        Signup
                    </Button>
                    <Form.Text>Already have an account?
                        <Link to={'/login'}>Signin</Link>
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

export default Signup;