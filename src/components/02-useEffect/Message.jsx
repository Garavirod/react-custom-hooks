import React, { useEffect, useState } from 'react';

export const Message = () =>{

    const [coords,setCoords]  = useState({
        x:0,
        y:0
    });

    useEffect(()=>{
        console.log("Component was mounted!");

        const mouseMove = (e) =>{            
            const _coor = {x:e.x, y:e.y};
            setCoords(_coor);             
        }

        window.addEventListener('mousemove',mouseMove);
        return () =>{
            // Cleaning stage
            window.removeEventListener('mousemove',mouseMove);
            console.log("Component was Unmounted!");            
        }
    },[coords])


    return(
        <>
            <div>
                <h3>Not faintest Idea!</h3>
                <h6>x : {coords.x} - y : {coords.y}</h6>
            </div>
        </>
    )
};