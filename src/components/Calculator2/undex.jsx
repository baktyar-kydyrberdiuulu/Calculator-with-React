import React, { useState } from "react";

export const Calculator2 = () => {
    const [inputValues, setInputValues] = useState({ input1: 2, input2: 2, });
    const [result, setResult] = useState('hier result ');

    const inputHandler = (e) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
        console.log(inputValues);
    };
    const onPlus = () => {
        setResult(
            () => parseInt(inputValues.input1) + parseInt(inputValues.input2)
        );
    };
    const onMinus = () => {
        setResult(
            () => parseInt(inputValues.input1) - parseInt(inputValues.input2)
        );
    };

    const onMult = () => {
        setResult(
            () => parseInt(inputValues.input1) * parseInt(inputValues.input2)
        );
    };
    const onDelenie = () => {
        setResult(
            () => parseInt(inputValues.input1) / parseInt(inputValues.input2)
        );
    };

    return (
        <div>
            <h1> Calculate 2 </h1>
            <input type="number"
                value={inputValues.input1}
                onChange={inputHandler}
                name="input1" />

            <button onClick={onPlus}> + </button>
            <button onClick={onMinus}> - </button >
            <button onClick={onMult}> * </button>
            <button onClick={onDelenie}> / </button >

            <input type="number"
                value={inputValues.input2}
                onChange={inputHandler}
                name="input2" />
            <h1 style={
                { textAlign: "center", width: 420 }
            }> sum: {result} </h1>
        </div >
    );
};