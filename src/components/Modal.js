import React from "react";
const Modal = ({show , onClose}) => {
    if(!show){
       return null;
    }
    let modalStyle={
        border:'1px solid black',
        padding:'10px',
        margin:'10px 0'
    }
    return(
     <div className="model-overlay" style={modalStyle}>
        <div  className="model-close" >
            <button onClick={onClose}>Close</button>
       
         <p >This is the content of the modal.</p>
       </div>
        
     </div>
    )
 }
 
 export default Modal