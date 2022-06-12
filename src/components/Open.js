import React from "react";


export default function Open({selected, onClick = f => f}) {
  if(selected){
    return (
        
      <button 
        className = "button-alart-true"
        onClick={onClick}>
          
      </button>
    )
  }else{
    return (
        <button 
          className = "button-alart-false"
          onClick={onClick}>
          
        </button>
    )
  };
}