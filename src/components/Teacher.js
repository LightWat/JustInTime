import React from "react";


export default function Teacher({selected, onClick = f => f}) {
  if(selected){
    return (
      
      <button 
        className = "button-teacher-true"
        onClick={onClick}
        data-testid="teacher"
      >
        
      </button>
    )
}else{
  return (
      <button 
        className = "button-teacher-false"
        onClick={onClick}>
        
      </button>
  )
};
}