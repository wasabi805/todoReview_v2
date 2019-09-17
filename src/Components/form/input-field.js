import React from 'react';

const InputField = (props)=>{
    return(
        <input
            className={'input'}
            type={'text'}

            name={props.name}
            value={props.value}
            onChange={props.onchange} />
    )
};

export default InputField