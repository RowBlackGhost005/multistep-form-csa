import React , {useRef , useEffect} from 'react';

import {inputState} from '../reducers/formErrorsReducer';
import { validateOnlyText , validateCurrency} from '../utils/validator';

const SECTION = "packageDetails";

const PackageForm = React.memo(({packageData, updateData , fieldValidation , setValidations}) => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const validateInputText = (e) => {
        setValidations(SECTION , e.target.name , !validateOnlyText(e.target.value));
    };

    const validateInputCurrency = (e) => {
        setValidations(SECTION , e.target.name , !validateCurrency(e.target.value));
    }

    const radioChecked = (e) => {
        updateData(SECTION , e.target.name , e.target.value);
        setValidations(SECTION , e.target.name , false);
    }

    return(
        <div id="container-package-form">

            <h2 className="heading-color mb-1 text-center">Package Details</h2>

            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="packageDescription">Content Description</label>
                <input ref={inputRef} className={`${fieldValidation.packageDescription === inputState.INVALID ? "error-input" : "input-floating"}`} type="text" placeholder="Coffee Mugs" name="packageDescription" id="packageDescription" 
                    value={packageData.packageDescription} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputText}/>
                    {fieldValidation.packageDescription === inputState.INVALID && <p className='text-error ps-1 text-italic'>A description is required</p>}
            </div>

            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="packageValue">Declared Value</label>
                <input className={`${fieldValidation.packageValue === inputState.INVALID ? "error-input" : "input-floating"}`}  type="text" placeholder="12.50" name="packageValue" id="packageValue" 
                    value={packageData.packageValue} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputCurrency}/>
                    {fieldValidation.packageValue === inputState.INVALID && <p className='text-error ps-1 text-italic'>A value of the package is required</p>}
            </div>

            <div className="container-input mb-1">
                <label className="label text-color" htmlFor="packageWeight">Weight</label>
                <input  className={`${fieldValidation.packageWeight === inputState.INVALID ? "error-input" : "input-floating"}`} type="text" placeholder="0.4" name="packageWeight" id="packageWeight" 
                    value={packageData.packageWeight} 
                    onChange={(e) => updateData(SECTION , e.target.name , e.target.value)}
                    onBlur={validateInputCurrency}/>
                    {fieldValidation.packageWeight === inputState.INVALID && <p className='text-error ps-1 text-italic'>A weight is required (KG)</p>}
            </div>

            <div className="container-input mb-1">
                <p className="text-color mb-1">Package Type:</p>
                <label className="text-color">
                    <input  type="radio" name="packageType" value="envelop" checked={packageData.packageType === 'envelop'} onChange={radioChecked}/> Envelop
                </label>
                <label className="text-color">
                    <input type="radio" name="packageType" value="box" checked={packageData.packageType === 'box'} onChange={radioChecked}/> Box
                </label>
                {fieldValidation.packageType === inputState.INVALID && <p className='text-error ps-1 text-italic'>Select a package type</p>}
            </div>

        </div>
    );
});

export default PackageForm;