import React, { useRef } from 'react';


export const FocusScreen = () =>{

    const InputRef= useRef();

    const handleClick=()=>{
        // document.querySelector('input').select();
        InputRef.current.select(); 
    }

    return(
        <div className="container">
            <h1>UseRef Hook</h1>
            <div className="row">
                <div className="col-md-12">
                    <input 
                        className="form-control" 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="Name"
                        ref={InputRef}
                    />
                    <button className="btn btn-primary mt-4" onClick={handleClick}>Push me</button>
                </div>
            </div>
        </div>
    )
}