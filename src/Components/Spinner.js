import React from "react";
import spin from "./loading-loading-forever.gif"


const Spinner=()=>{
    
        return(
            <>
                <div className="text-center">
                <img className="my-3" height="100px" src={spin} alt="spinner"></img>
                </div>
            </>
        )
    
}

export default Spinner;