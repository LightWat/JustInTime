import React from "react";


export default function Teacher({selected, onClick = f => f}) {
  return (
    <button 
      style={selected ? {"backgroundColor": "green"} : {"backgroundColor": "red"}}
      onClick={onClick}>
        是否顯示老師
    </button>
  );
}