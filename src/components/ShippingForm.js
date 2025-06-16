import React , {useEffect , useRef} from 'react';

import {inputState} from '../reducers/formErrorsReducer';

const SECTION = "shippingDetails";

const ShippingForm = React.memo(({shippingData , updateData , fieldValidation , setValidations}) => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const radioChecked = (e) => {
        updateData(SECTION , e.target.name , e.target.value);
        setValidations(SECTION , e.target.name , false);
    }

    return(
        <div id="container-shipping-form">
            <h2 className="heading-color mb-1 text-center">Shipping Preferences</h2>

            <div className="container-input mb-1">
                <p className="text-color mb-1">Delivery type:</p>
                <label className="text-color">
                    <input ref={inputRef} type="radio" name="shippingType" value="delivery" checked={shippingData.shippingType === 'delivery'} onChange={radioChecked}/> Address Delivery
                </label>
                <label className="text-color">
                    <input type="radio" name="shippingType" value="pickup" checked={shippingData.shippingType === 'pickup'} onChange={radioChecked}/> Pickup
                </label>
                {fieldValidation.shippingType === inputState.INVALID && <p className='text-error ps-1 text-italic'>Select a shipping type</p>}
            </div>

            <div className="container-input mb-1">
                <p className="text-color mb-1">Shipping Method:</p>
                <label className="text-color">
                    <input type="radio" name="shippingMethod" value="standard" checked={shippingData.shippingMethod === 'standard'} onChange={radioChecked}/> Standard
                </label>
                <label className="text-color">
                    <input type="radio" name="shippingMethod" value="express" checked={shippingData.shippingMethod === 'express'} onChange={radioChecked}/> Express
                </label>
                <label className="text-color">
                    <input type="radio" name="shippingMethod" value="overnight" checked={shippingData.shippingMethod === 'overnight'} onChange={radioChecked}/> Overnight
                </label>
                {fieldValidation.shippingMethod === inputState.INVALID && <p className='text-error ps-1 text-italic'>Select a shipping method</p>}
            </div>
        </div>
    );
});

export default ShippingForm;