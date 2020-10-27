import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () =>{

    const [formstate, setFormState] = useState({
        name:'',
        email:''
    });

    const {name, email} = formstate;

    // Is a recomendation threat each change separately


    useEffect(()=>{
        console.log("Hey");
    },[]);


    useEffect(()=>{
        console.log("From data change!");
    },[formstate]);


    useEffect(()=>{
        console.log("email change!");
    },[email]);

    const handleInputchange=(e)=>{
        setFormState({
            ...formstate,
            [e.target.name]:e.target.value,
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input 
                    className="form-control" 
                    type="text" 
                    name="name" 
                    id="" 
                    placeholder="name"
                    value={name}
                    onChange={handleInputchange}
                />         
            </div>

            <div className="form-group">
                <input 
                    className="form-control" 
                    type="text" 
                    name="email" 
                    id="" 
                    placeholder="e-mail"
                    value={email}
                    onChange={handleInputchange}
                />               
            </div>


            {
                (name === '123') && <Message/>
            }
        </>
    );
}