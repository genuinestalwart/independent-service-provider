import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { email, validEmail, setEmail, handleEmail, password, validPass, setPassword, handlePass, error, setError, navigate, setUser } = useAuth();
    const location = useLocation();

    const handleLogin = (event) => {
        event.preventDefault();

        if (email && password && validEmail && validPass) {
            signInWithEmailAndPassword(auth, email, password)
                .then((credentials) => {
                    setUser(credentials.user);
                    navigate(location?.state?.from?.pathname || '/checkout', { replace: true });
                    setEmail('');
                    setPassword('');
                })
                .catch((error) => {
                    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                        setError('Invalid email or password!');
                    }
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
                <button onClick={handleLogin} type="submit">Log in</button>
                <p>{error}</p>
            </form>
        </div>
    );
};

export default Login;