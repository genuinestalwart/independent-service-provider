import React from 'react';
import { Modal } from 'react-bootstrap';

const ErrorModal = ({ error, setShowModal, show }) => {
    return (
        <div>
            <Modal show={show} aria-labelledby="errorModal" centered>
                <Modal.Header><Modal.Title id="errorModal">{error.header}</Modal.Title></Modal.Header>
                <Modal.Body><p>{error.body}</p></Modal.Body>
                <Modal.Footer><button className='bg-teal-500 font-semibold px-[0.75rem] py-[0.5rem] active:ring ring-offset-2 ring-teal-500 rounded-md text-indigo-600 disabled:text-white' onClick={() => setShowModal(false)}>Okay</button></Modal.Footer>
            </Modal>
        </div>
    );
};

export default ErrorModal;
