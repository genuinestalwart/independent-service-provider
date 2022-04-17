import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase.init';
import useAuth from '../../hooks/useAuth';

const User = () => {
    const { verified, setVerified } = useAuth();

    const handleVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setVerified(true);
            });
    }

    return (
        <div>
            <button onClick={handleVerify}>Verify your email address</button>
            <p>{verified}</p>
        </div>
    );
};

export default User;