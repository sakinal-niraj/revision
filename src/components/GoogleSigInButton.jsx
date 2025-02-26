import React from 'react';
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GoogleSignInButton = () => {
    const navigate = useNavigate();

    const handleSigninWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user.email);
            const token = await user.getIdToken();
            if (token) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                localStorage.setItem('token',token);
                navigate('/');
            }            
        } catch (error) {
            console.error("Google sign-up error:", error.code, error.message);
        }
    };

    return (
        <GoogleButton className='google-signup-button' onClick={handleSigninWithGoogle} />
    );
};

export default GoogleSignInButton;
