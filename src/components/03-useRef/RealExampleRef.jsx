import React from 'react';
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook';
import { useState } from 'react';


export const ExampleRef =()=>{

    const [show, setShow] = useState(false);

    const handleClik = () =>{
        setShow(!show);
    }

    return(
        <div className="container">
            <h1>UseRef Example</h1>
            <div className="row">
                <div className="col-md-12">
                    {show && <MultipleCustomHook/>}
                    <button
                        className="btn btn-primary mt-4"    
                        onClick={handleClik}
                    >Push me</button>
                </div>
            </div>
        </div>
    )
}