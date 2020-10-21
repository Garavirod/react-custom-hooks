import React from 'react';
import {useCounter} from '../../hooks/useCounter';




export const CounterApp = () =>{

    const {state:counter, increment, decrement,reset} = useCounter(100);    
    return (
        <>
            <h4>Counter App</h4>
            <p>counter {counter}</p>            
            <hr/>
            <button onClick={()=>increment(2)} className="btn btn-primary">+</button>
            <button onClick={()=>decrement(2)} className="btn btn-primary">-</button>
            <button onClick={()=>reset()} className="btn btn-primary">reset</button>
        </>
    )
}