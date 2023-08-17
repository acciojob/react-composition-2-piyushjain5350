import React from "react";
const Modal = ({show , onClose}) => {
    if(!show){
       return null;
    }
    
    return(
     <div className="model-overlay">
        <div  className="model-close" onClick={onClose}>
                Close
       
         <p >This is the content of the modal.</p>
       </div>
        
     </div>
    )
 }
 
 export default Modal