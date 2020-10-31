import { useEffect, useState } from "react";

export const useFetch = (url) =>{
    const [state,setState] = useState({data:null, loadding:true, error:null});
    useEffect(()=>{
        setState({data:null, loadding:true, error:null})
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setState({
                loadding:false,
                error:null,
                data
            })
        });
        
    },[url]);

    return state;
};