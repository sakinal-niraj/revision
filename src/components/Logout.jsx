import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const result = await Swal.fire({
                title: "Do you want to logout?",
                showDenyButton: true,
                confirmButtonText: "Yes",
                denyButtonText: `No`
            });

            if (result.isConfirmed) {
                await signOut(auth);
                await Swal.fire("Loged out!", "", "success");
                navigate('/login');
            }
        } catch (error) {
            console.error("Logout error:", error.message);
        }
    };

    return (
        <div className='logout-btn-container'>
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
