import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAuth from '../../hooks/useAuth';
import ErrorModal from '../Shared/ErrorModal/ErrorModal';

const Register = ({ registered, setRegistered, setUser, setInfo, setShowToast }) => {
    const { email, validEmail, setEmail, handleEmail, password, validPass, setPassword, handlePass, showModal, setShowModal, error, setError, navigate, logOut } = useAuth();
    const location = useLocation();

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((credentials) => {
                setUser(credentials.user);
                navigate(location?.state?.from?.pathname || '/', { replace: true });
                setEmail('');
                setPassword('');
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleLogin = (event) => {
        event.preventDefault();

        if (email && password && validEmail && validPass) {
            signInWithEmailAndPassword(auth, email, password)
                .then((credentials) => {
                    setUser(credentials.user);
                    navigate(location?.state?.from?.pathname || '/', { replace: true });
                    setEmail('');
                    setPassword('');
                })
                .catch((e) => {
                    if (e.code === 'auth/user-not-found' || e.code === 'auth/wrong-password') {
                        setError({
                            header: 'Invalid email or password!',
                            body: 'Looks like the email/password you entered is incorrect. Please enter any valid email/password.'
                        });
                        setShowModal(true);
                        logOut('/register');
                    }
                });
        }
    };

    const handleRegister = (event) => {
        event.preventDefault();

        if (email && password && validEmail && validPass) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((credentials) => {
                    setUser(credentials.user);
                    handleVerify(credentials.user);
                    navigate(location.state?.from?.pathname || '/', { replace: true });
                    setEmail('');
                    setPassword('');
                })
                .catch((e) => {
                    if (e.code === 'auth/email-already-in-use') {
                        setError({
                            header: 'The email is already registered!',
                            body: 'The email you are trying register with, is already been registered. Try to log in instead.'
                        });
                        setShowModal(true);
                    }
                });
        }
    };

    const handleVerify = (newUser) => {
        sendEmailVerification(newUser)
            .then(() => {
                setInfo('Email Verification!');
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                }, 5000);
            });
    };

    const handleReset = () => {
        if (email && validEmail) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    setEmail('');
                    setInfo('Reset Password!');
                    setShowToast(true);
                    setTimeout(() => {
                        setShowToast(false);
                    }, 5000);
                })
                .catch((e) => {
                    console.log(e);
                });
        } else {
            setError({
                header: 'Invalid Email!',
                body: 'Please enter any valid email address in the input field before clicking this button.'
            });
            setShowModal(true);
        }
    };

    return (
        <div>
            <div className='md:flex justify-center px-8 md:px-0 pb-12'>
                <div className='md:w-2/5'>
                    <h2 className='font-semibold my-6 text-3xl text-center text-slate-700'>{registered ? 'Log in' : 'Register'}</h2>

                    <div>
                        <Form className='bg-slate-100 border-[1px] border-slate-300 p-6 shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)] shadow-slate-400 rounded-lg'>
                            <Form.Group className='mb-[1.25rem]'>
                                <Form.Label className='font-bold'>Email</Form.Label>
                                <Form.Control onBlur={handleEmail} className='placeholder:text-slate-400' type="email" placeholder='Enter email' autoComplete='username' />
                                <Form.Text className={validEmail ? 'hidden' : 'mb-[1rem] text-xs text-red-500'}>Please enter a valid email address</Form.Text>
                            </Form.Group>

                            <Form.Group className='my-[1.25rem]'>
                                <Form.Label className='font-bold'>Password</Form.Label>
                                <Form.Control onBlur={handlePass} className='placeholder:text-slate-400' type="password" placeholder='Enter password' autoComplete='current-password' />
                                <Form.Text className={validPass ? 'hidden' : 'mb-[1rem] text-xs text-red-500'}>Password must contain at least a digit, an uppercase letter, a lowercase letter, a special character and must be within 8 to 23 characters.</Form.Text>
                            </Form.Group>

                            <div className='flex justify-between mt-[1.25rem]'>
                                <div className='flex items-center'>
                                    <input onChange={() => setRegistered(!registered)} type="checkbox" name="haveAnAccount" id="haveAnAccount" />
                                    <label className='ml-2 mt-[0.2rem] text-sm text-slate-600' htmlFor="haveAnAccount">Already have an account?</label>
                                </div>

                                <button className={`bg-teal-500 disabled:bg-slate-400 font-semibold px-[0.75rem] py-[0.5rem] ${email && password && validEmail && validPass ? 'active:ring' : ''} ring-offset-2 ring-teal-500 rounded-md text-indigo-600 disabled:text-white`} onClick={registered ? handleLogin : handleRegister} type="submit" disabled={email && password && validEmail && validPass ? false : true}>{registered ? 'Log in' : 'Register'}</button>
                            </div>
                        </Form>
                    </div>

                    <div className='flex items-center justify-between pl-6 pt-8'>
                        <button onClick={handleReset} className={`${registered ? '' : 'invisible'} text-sm text-indigo-600 active:text-teal-500`}>Forget password?</button>
                        <button onClick={handleGoogleLogin} className='bg-indigo-400 bg-opacity-75 hover:bg-opacity-100 font-semibold px-[0.75rem] py-[0.5rem] active:ring ring-offset-2 ring-indigo-400 rounded-md text-teal-50'>Log in with Google</button>
                    </div>
                </div>
            </div>

            <ErrorModal error={error} setShowModal={setShowModal} show={showModal}></ErrorModal>
        </div>
    );
};

export default Register;
