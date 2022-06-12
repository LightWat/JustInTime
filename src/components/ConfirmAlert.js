import React, {useState} from "react";

import coursesData from "../data/coursesData.json";
import Popup from "./Popup";
import '../CSS/Popup.css'



export default function ConfirmAlert({course}) {
  const [buttonPopup, setButtonPopup]= useState(false);

  const courseData = coursesData.find(coursesData => 
    coursesData.id === course.id);

  const isAll = course.id === "all";
  
  const confirmAlert = event => {
    event.preventDefault();
    setButtonPopup(true);
  }

  return (
    <>
      <button className = "confirm" onClick={confirmAlert}></button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

        <div className = "lighter-color"></div>



        <p className = "popup-course">上課提醒-{course.name}</p>
        {course.showTeacher ? <p className = "popup-teacher">教師 : 
          {isAll ?
            "【教師名稱】" : 
            courseData.teacher}</p> : 
          null
        }
        {course.showTime ? <p className = "popup-time">上課時間: 
          {isAll ?
            "【上課時間】": 
            courseData.time}</p> : 
          null
        }
          
        <p className = "popup-link">上課連結：{isAll ?
          "【上課連結】":
          <a href={courseData.link}>點這裡!</a>}
        </p>
        <p className = "popup-minuate">將在 {course.remind} 分鐘後進行課程</p>          
      </Popup>
    </>
  );
}