import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories}) => {

    const [InputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit Hecho');

        if(InputValue.trim().length > 2){
            setCategories(cats => [InputValue, ...cats]);
            setInputValue('');
        }
    }
    return (
            <form className="form__categoria" onSubmit={handleSubmit}>
              <input 
                placeholder="Saitama"
                className="input__categoria"
                type="text" 
                value={InputValue}
                onChange={handleInputChange}
                />  
                <br></br>
                <span>Press Enter to search</span>
            </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.string.isRequired
}
//No se pone el fragment porque en si el form es un panel