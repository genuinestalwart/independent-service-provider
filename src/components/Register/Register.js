import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { email, validEmail, setEmail, handleEmail, password, validPass, setPassword, handlePass, navigate, setUser } = useAuth();
    const location = useLocation();

    const handleRegister = (event) => {
        event.preventDefault();

        if (email && password && validEmail && validPass) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((credentials) => {
                    setUser(credentials.user);
                    navigate(location.state?.from?.pathname || '/checkout', { replace: true });
                    setEmail('');
                    setPassword('');
                });
        }
    };

    return (
        <div>
            <form>
                <label htmlFor="userEmail">Email</label><br />
                <input onBlur={handleEmail} type="email" name="userEmail" id="userEmail" /><br />
                <label htmlFor="userPass">Password</label><br />
                <input onBlur={handlePass} type="password" name="userPass" id="userPass" /><br />
                <button onClick={handleRegister} type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;