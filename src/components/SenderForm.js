import React , {useRef , useEffect} from 'react';

import {inputState} from '../reducers/formErrorsReducer';
import { validateOnlyText , validateEmail , validatePhone} from '../utils/validator';

const SECTION = "senderData";

const SenderForm = React.memo(({senderData , updateData , fieldValidation , setValidations}) => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const validateInputText = (e) => {
        setValidations(SECTION , e.target.name , !validateOnlyText(e.target.value));
    };

    const validateInputEmail = (e) => {
        setValidations(SECTION , e.target.name , !validateEmail(e.target.value));
    }

    const validateInputPhone = (e) => {
        setValidations(SECTION , e.target.name , !validatePhone(e.target.value));
    }

    return(
        <div id="container-sender-form">

            <h2 className="heading-color mb-1 text-center">Sender Information</h2>
            
            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="senderName">Full Name:</label>
                <input ref={inputRef} className={`${fieldValidation.senderName === inputState.INVALID ? "error-input" : "input-floating"}`} type="text" placeholder="John" name="senderName" id="senderName" 
                    value={senderData.senderName} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputText}/>
                {(fieldValidation.senderName === inputState.INVALID) && <p className='text-error ps-1 text-italic'>A name is required</p>}
            </div>

            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="senderEmail">E-mail:</label>
                <input className={`${fieldValidation.senderEmail === inputState.INVALID ? "error-input" : "input-floating"}`} type="text" placeholder="sender@mail.com" name="senderEmail" id="senderEmail"
                    value={senderData.senderEmail} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputEmail}/>
                {fieldValidation.senderEmail === inputState.INVALID && <p className='text-error ps-1 text-italic'>A valid email is required</p>}
            </div>

            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="senderPhone">Phone Number:</label>
                <input className={`${fieldValidation.senderPhone === inputState.INVALID ? "error-input" : "input-floating"}`} type="text" placeholder="5555523452" name="senderPhone" id="senderPhone"
                    value={senderData.senderPhone} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputPhone}/>
                {fieldValidation.senderPhone === inputState.INVALID && <p className='text-error ps-1 text-italic'>Input a valid 10-digit phone number</p>}
            </div>


            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="senderAddress">Address:</label>
                <input className={`${fieldValidation.senderAddress === inputState.INVALID ? "error-input" : "input-floating"}`} type="text" placeholder="Saint Boulevard #523" name="senderAddress" id="senderAddress"
                    value={senderData.senderAddress} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputText}/>
                {fieldValidation.senderAddress === inputState.INVALID&& <p className='text-error ps-1 text-italic'>An address is required</p>}
            </div>

            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="senderCity">City:</label>
                <input className={`${fieldValidation.senderCity === inputState.INVALID ? "error-input" : "input-floating"}`} type="text" placeholder="Vancouver" name="senderCity" id="senderCity"
                    value={senderData.senderCity} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputText}/>
                {fieldValidation.senderCity === inputState.INVALID && <p className='text-error ps-1 text-italic'>A city name is required.</p>}
            </div>

            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="senderCountry">Country:</label>
                <input className={`${fieldValidation.senderCountry === inputState.INVALID ? "error-input" : "input-floating"}`} type="text" placeholder="Canada" name="senderCountry" id="senderCountry"
                    value={senderData.senderCountry} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputText}/>
                {fieldValidation.senderCountry === inputState.INVALID && <p className='text-error ps-1 text-italic'>A country name is required.</p>}
            </div>


        </div>
    );
});

export default SenderForm;