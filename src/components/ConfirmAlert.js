import React, {useState} from "react";

import coursesData from "../data/coursesData.json";
import Popup from "./Popup";


export default function ConfirmAlert({course}) {
  const [buttonPopup, setButtonPopup]= useState(false);

  const courseData = coursesData.find(coursesData => 
    coursesData.id === course.id);

  const isAll = course.id === "all";

  return (
    <>
      <button onClick={() => setButtonPopup(true)}>確定通知</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>上課提醒</h3>
          <p>{course.name}</p>
          {course.showTeacher ? <p>教師 : 
            {isAll ?
              "【教師名稱】" : 
              courseData.teacher}</p> : 
            null}
          {course.showTime ? <p>上課時間: 
            {isAll ?
              "【上課時間】": 
              courseData.time}</p> : 
            null}
          <p>{course.remind} 分鐘後上課</p>
          <p>上課連結：{isAll ?
            "【上課連結】":
            <a href={courseData.link}>點這裡!</a>}
          </p>          
      </Popup>
    </>
  );
}