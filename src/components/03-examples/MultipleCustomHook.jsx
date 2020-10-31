import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const MultipleCustomHook = () => {
  const {counter, increment} = useCounter(1);
  console.log(counter);

  const { loadding, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  /* !!null = false  and !null = true */
  const { author = "somebody", quote = "something" } = !!data && data[0];

  return (
    <div className="container">
      <h1>Breaking Bad's Quotes</h1>
      <hr />
      {loadding ? (
        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-info text-center">Loading...</div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12 p-2 m-2">
            <blockquote className="blockquote text-right">
              <p>{quote}</p>
              <footer className="blockquote-footer">{author}</footer>
            </blockquote>
          </div>
        </div>
      )}
      <div>
        <div>
          <button className="btn btn-primary" onClick={()=>increment()}>
            Following quote
          </button>
        </div>
      </div>
    </div>
  );
};
