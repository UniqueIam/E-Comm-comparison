import React from "react";
import './Error.css';
import { NavLink } from "react-router-dom";

const Error=()=>{
return (
    <>
    <div className="error-portion">
        <div className="error-div">
            <h1 className="error">4<span>0</span>4</h1>
            <h2 className="lost">UH OH! You're <span>lost</span> !</h2>
            <p className="goback">The page you are looking for does<span> not</span> exist .How you got here is a mystery.<br/>But you can click the button below to go back to the homepage .</p>
                <NavLink to='/'>
                <button>Go Back</button>
                </NavLink>
            
        </div>
    
    
    
        
    </div>
    </>
)
}
export default Error