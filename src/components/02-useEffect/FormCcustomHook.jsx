import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";

export const FormCustomHook = () => {
  const form = {
    name: "",
    email: "",
    password: "",
  };

  const [data,handleChange] = useForm(form);
  const { name, email,password } = data;

  useEffect(()=>{
    console.log('You wrote in email box');
  },[email]);


  return (
    <>
      <h1>Form with custom hook</h1>
      <hr />
      <div className="container">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="name"
            id=""
            placeholder="name"
            value={name}
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="password please"
            value={password}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};
