import React from 'react';
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'; // Use signInWithRedirect
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const GoogleSignInButton = () => {
    const navigate = useNavigate();

    const handleSigninWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithRedirect(auth, provider); // Use signInWithRedirect
            // No need to handle result here, Firebase will handle the redirect
        } catch (error) {
            console.error("Google sign-up error:", error.code, error.message);
        }
    };

    return (
        <GoogleButton className='google-signup-button' onClick={handleSigninWithGoogle} />
    );
};

export default GoogleSignInButton;