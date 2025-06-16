import React, { useState } from "react";

import {inputState} from '../reducers/formErrorsReducer';


const SubmitForm = ({validationData}) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const [modalTitle, setModalTitle] = useState("");

    const [modalText, setModalText] = useState("");

    const submit = () => {


    const isInvalid = Object.entries(validationData).some(([inObj, innerObj]) => 
    Object.entries(innerObj).some(([key, value]) => value !== inputState.VALID));


        if(isInvalid){
          setModalTitle("Register Error");
          setModalText("There are some fields missing in the form, check them and try again.");
          setModalOpen(true);
        }else{
          setModalTitle("Shipment Registered");
          setModalText("Shipment registered sucessfully.");
          setModalOpen(true);
        }
    }

    return(
        <div className='flex-container-column flex-justify-center py-2'>
            <p className="text-color text-center py-2">All done, please submit your shipment information.</p>
            <button className="btn-primary w-30 text-center mx-auto" onClick={submit}>Submit</button>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}  title={modalTitle} message={modalText}/>}
        </div>
    );
};

export default SubmitForm;



const Modal = ({ isOpen, onClose  , title , message}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="mb-1">{title}</h2>
        <p className="mb-1">{message}</p>
        <button className="btn-primary w-30 mx-auto" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

