import React from "react";


export default function Time({selected, onClick = f => f}) {


  
  if(selected){
      return (
        
        <button 
          className = "button-time-true"
          onClick={onClick}
          data-testid="time"
        >
          
        </button>
      )
  }else{
    return (
        <button 
          className = "button-time-false"
          onClick={onClick}
          data-testid="time"
        >
          
        </button>
    )
  };
}