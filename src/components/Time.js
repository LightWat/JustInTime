import React from "react";
import image from "../UI/上課時間.png";
import image1 from "../UI/上課時間-被點選.png"
import image2 from "../UI/課表.png";
import css from "../CSS/Time.css";

export default function Time({selected, onClick = f => f}) {

  const style = {
    //position: absolute,
    width: 1133,
    height: 1011,
    left: 732,
    top: 263,
    borderRadius: 1
    
  };
  

  return (
    <>
    <button 
      style={selected ? {"backgroundImage": `url(${image})`}: {"backgroundImage": `url(${image1})`}}
      //style={{backgroundImage: `url('../UI/上課時間.png')`<img src={require('../UI/上課時間.png')} alt="../UI/上課時間.png"/>}}
      //className = "button"
      //style = {b}
      //tyle={style}
      onClick={onClick}>
      
    </button>
    <div style = {style}>
      <img src={image2} alt="image2" />;
    </div>
    </>
  );
}