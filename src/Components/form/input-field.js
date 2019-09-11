import React from 'react';

const InputField = (props)=>{
    return(
        <input className={'input'}  type={'text'} value={props.value} name={props.name} onChange={props.onchange} />
    )
};

export default InputField