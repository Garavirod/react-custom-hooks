import { useState } from "react";

export const useForm =(initialState={})=>{
    const [data,setData] = useState(initialState);

    const handleChange = ({target}) => {
        setData({
            ...data,
            [target.name]:target.value
        });
    }
    return [data,handleChange];
};
