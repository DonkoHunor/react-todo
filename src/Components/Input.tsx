import {useState} from "react";

interface InputProps {
    value: string,
    setValue: (targetValue: string) => void,
}

function Input(props: InputProps){
    return <>
        <input
            value={props.value}
            onChange={(e) => {
                props.setValue(e.target.value);
            }}
            style={{
                padding: '10px',
                marginTop: '15px',
                borderRadius: '10px',
                borderColor: `${props.value === '' ? 'red' : 'black'}`
            }}
            type="text"/>
    </>
}
export default Input