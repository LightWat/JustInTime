import React from "react";


export default function Time({selected, onClick = f => f}) {


  
  if(selected){
      return (
        
        <button 
          className = "button-time-true"
          onClick={onClick}>
          
        </button>
      )
  }else{
    return (
        <button 
          className = "button-time-false"
          onClick={onClick}>
          
        </button>
    )
  };
}