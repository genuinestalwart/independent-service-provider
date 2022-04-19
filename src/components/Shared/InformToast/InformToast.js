import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const InformToast = ({ info, show }) => {
    return (
        <div aria-live="polite" aria-atomic="true">
            <ToastContainer className='pr-8 md:pr-20' position="middle-end">
                <Toast show={show}>
                    <Toast.Header><h4 className='text-lg text-teal-500'>{info}</h4></Toast.Header>
                    <Toast.Body className='bg-slate-200'><p className='font-medium text-indigo-500'>Mail has been sent. Don't forget to check your spam folder.</p></Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
};

export default InformToast;

