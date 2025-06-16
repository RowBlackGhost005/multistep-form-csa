import SenderForm from './SenderForm';
import PackageFrom from './PackageForm';
import ShippingForm from './ShippingForm';
import ReceiverForm from './ReceiverForm';
import ProgressBar from './ProgressBar';
import SubmitForm from './SubmitForm';

import {formStepReducer , actionTypes } from '../reducers/formStepReducer';
import {formReducer , dataActions} from '../reducers/formReducer';
import {inputState} from '../reducers/formErrorsReducer';
import {formErrorsReducer , errorActions} from '../reducers/formErrorsReducer'

import React, { useReducer, useCallback} from 'react';

function ShipmentForm() {

    /** Initial state (step) of the form*/
    const formStepInitial = {step: 1};

    /** Instantiates the reducer for managing form navigation*/
    const[formStatus, dispatchStep] = useReducer(formStepReducer, formStepInitial);

    const [formData , dispatchFormData] = useReducer(formReducer , {
        senderData: {
            senderName: "",
            senderEmail: "",
            senderPhone: "",
            senderAddress: "",
            senderCity: "",
            senderCountry: ""
        },
        packageDetails: {
            packageType: "",
            packageWeight: "",
            packageDescription: "",
            packageValue: "",
        },
        shippingDetails: {
            shippingType: "",
            shippingMethod: ""
        },
        receiverData:{
            receiverName: "",
            receiverEmail: "",
            receiverPhone: ""
        }
    });

    const updateFields = useCallback((section, field, value) => {
        dispatchFormData({type: dataActions.DATA_UPDATE , section , field , value})
    } , []);

    const[formErrors, dispatchErrors] = useReducer(formErrorsReducer , {        
        senderData: {
            senderName: inputState.UNCHECKED,
            senderEmail: inputState.UNCHECKED,
            senderPhone: inputState.UNCHECKED,
            senderAddress: inputState.UNCHECKED,
            senderCity: inputState.UNCHECKED,
            senderCountry: inputState.UNCHECKED
        },
        packageDetails: {
            packageType: inputState.UNCHECKED,
            packageWeight: inputState.UNCHECKED,
            packageDescription: inputState.UNCHECKED,
            packageValue: inputState.UNCHECKED,
        },
        shippingDetails: {
            shippingType: inputState.UNCHECKED,
            shippingMethod: inputState.UNCHECKED
        },
        receiverData:{
            receiverName: inputState.UNCHECKED,
            receiverEmail: inputState.UNCHECKED,
            receiverPhone: inputState.UNCHECKED,
            receiverAddress: inputState.UNCHECKED,
            receiverCity: inputState.UNCHECKED,
            receiverCountry: inputState.UNCHECKED,
        }});

    const errorField = useCallback((section , field , value) => {
        let type = "";

        if(value){
            type = errorActions.ERROR;
        }else{
            type = errorActions.OK;
        }

        dispatchErrors({type: type , section , field})
    } , []);

    return(
        <div className='border-1 px-1 py-1 container-background rounded-2' id="container-shipment-form">
            

            {formStatus.step === 1 && <SenderForm 
                                            senderData={formData.senderData} 
                                            updateData={updateFields} 
                                            fieldValidation={formErrors.senderData}
                                            setValidations={errorField}/>}
            
            {formStatus.step === 2 && <PackageFrom 
                                            packageData={formData.packageDetails} 
                                            updateData={updateFields}
                                            fieldValidation={formErrors.packageDetails}
                                            setValidations={errorField}/>}
            
            {formStatus.step === 3 && <ShippingForm 
                                            shippingData={formData.shippingDetails} 
                                            updateData={updateFields}
                                            fieldValidation={formErrors.shippingDetails}
                                            setValidations={errorField}/>}
            
            {formStatus.step === 4 && <ReceiverForm 
                                            receiverData={formData.receiverData}
                                            updateData={updateFields}
                                            fieldValidation={formErrors.receiverData}
                                            setValidations={errorField}/>}
            
            {formStatus.step === 5 && <SubmitForm
                                            validationData={formErrors}/>}
            
            <div className='flex-container-row flex-justify-center py-2'>
                <button className='btn-primary me-1 w-30' onClick={() => dispatchStep({type: actionTypes.PREV_STEP})}>Previous</button>
                <button className='btn-primary w-30' onClick={() => dispatchStep({type: actionTypes.NEXT_STEP})}>Next</button>
            </div>

            {formStatus.step !== 5 && <ProgressBar progress={(100 / 5) * formStatus.step}/>}
            
        </div>
    );
};

export default ShipmentForm;