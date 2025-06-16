import React , {useRef , useEffect} from 'react';

import {inputState} from '../reducers/formErrorsReducer';
import { validateOnlyText , validateEmail , validatePhone} from '../utils/validator';

const SECTION = "receiverData";

const ReceiverForm = React.memo(({receiverData, updateData , fieldValidation , setValidations}) => {

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
        <div id="container-receiver-form">
            <h2 className="heading-color mb-1 text-center">Receiver Information</h2>

            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="receiverName">Full Name</label>
                <input ref={inputRef} className={`${fieldValidation.receiverName === inputState.INVALID ? "error-input" : "input-floating"}`} type="text" placeholder="Mark Pearson" name="receiverName" id="receiverName"
                    value={receiverData.receiverName} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputText}/>
                    {fieldValidation.receiverName === inputState.INVALID && <p className='text-error ps-1 text-italic'>A name is required</p>}
            </div>

            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="receiverEmail">E-mail</label>
                <input className={`${fieldValidation.receiverEmail === inputState.INVALID ? "error-input" : "input-floating"}`} type="text" placeholder="receiver@mail.com" name="receiverEmail" id="receiverEmail"
                    value={receiverData.receiverEmail} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputEmail}/>
                {fieldValidation.receiverEmail === inputState.INVALID && <p className='text-error ps-1 text-italic'>A valid email is required</p>}
            </div>

            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="receiverPhone">Phone Number:</label>
                <input className={`${fieldValidation.receiverPhone === inputState.INVALID ? "error-input" : "input-floating"}`} type="text" placeholder="55 555 23452" name="receiverPhone" id="receiverPhone"
                    value={receiverData.receiverPhone} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputPhone}/>
                {fieldValidation.receiverPhone === inputState.INVALID && <p className='text-error ps-1 text-italic'>Input a valid 10-digit phone number</p>}
            </div>


            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="receiverAddress">Address:</label>
                <input className={`${fieldValidation.receiverAddress === inputState.INVALID ? "error-input" : "input-floating"}`} type="text" placeholder="Lowfield Street #523" name="receiverAddress" id="receiverAddress"
                    value={receiverData.receiverAddress} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputText}/>
                {fieldValidation.receiverAddress === inputState.INVALID && <p className='text-error ps-1 text-italic'>An address is required</p>}
            </div>

            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="receiverCity">City:</label>
                <input className={`${fieldValidation.receiverCity === inputState.INVALID ? "error-input" : "input-floating"}`} type="text" placeholder="San Francisco" name="receiverCity" id="receiverCity"
                    value={receiverData.receiverCity} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputText}/>
                {fieldValidation.receiverCity === inputState.INVALID && <p className='text-error ps-1 text-italic'>A city name is required.</p>}
            </div>

            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="receiverCountry">Country:</label>
                <input className={`${fieldValidation.receiverCountry === inputState.INVALID ? "error-input" : "input-floating"}`} type="text" placeholder="United States" name="receiverCountry" id="receiverCountry"
                    value={receiverData.receiverCountry} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputText}/>
                {fieldValidation.receiverCountry === inputState.INVALID && <p className='text-error ps-1 text-italic'>A country name is required.</p>}
            </div>

        </div>
    );
});

export default ReceiverForm;