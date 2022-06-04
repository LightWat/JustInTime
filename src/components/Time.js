import React from "react";


export default function Time({selected, onClick = f => f}) {
  return (
    <button 
      style={selected ? {"backgroundColor": "green"} : {"backgroundColor": "red"}}
      onClick={onClick}>
        是否顯示上課時間
    </button>
  );
}