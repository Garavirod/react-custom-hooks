import {useState} from 'react';

export const useCounter = (initialState = 0) =>{
    const [state,setSate] = useState(initialState);
    const increment = (factor=1) =>{
        setSate(state + factor);
    }

    const decrement = (factor=1) =>{
        setSate(state - factor);
    }

    const reset = () =>{
        setSate(initialState);
    }

    return{
        increment,
        decrement,
        reset,
        state
    }
};