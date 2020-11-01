import { useEffect, useState, useRef } from "react";

export const useFetch = (url) =>{
    const isMounted = useRef(true);

    useEffect(()=>{
        // When component is desmounted we set reference's vale in false
        return() =>{
            isMounted.current=false;
        }
    },[]);


    const [state,setState] = useState({data:null, loadding:true, error:null});
    useEffect(()=>{
        setState({data:null, loadding:true, error:null})
        fetch(url)
        .then(res=>res.json())
        .then(data=>{

            setTimeout(()=>{
                // Here we ask if component is mounted fot setting data
                if(isMounted.current){
                    setState({
                        loadding:false,
                        error:null,
                        data
                    })
                }else{
                    console.log("component was desmounted setState was not called");
                }
            },4000);
        });
        
    },[url]);

    return state;
};