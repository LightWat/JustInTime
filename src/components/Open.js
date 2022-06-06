import React from "react";


export default function Open({selected, onClick = f => f}) {
  return (
    <>
      <button 
        style={selected ? {"backgroundColor": "green"} : {"backgroundColor": "red"}}
        onClick={onClick}>
          是否通知
      </button>
    </>
  );
}