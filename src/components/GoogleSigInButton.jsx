import React from 'react';
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const GoogleSignInButton = () => {
    const navigate = useNavigate(); // ✅ Call hook at the top level

    const handleSigninWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user.email);
            const token = await user.getIdToken();

            if (token) {
                navigate('/'); // ✅ Now it works correctly
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
