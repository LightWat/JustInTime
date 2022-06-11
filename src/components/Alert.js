import Popup from './Popup';
import React, {useState ,useEffect} from 'react';
import {countTime} from "../utils/countTime";
import coursesData from "../data/coursesData.json";


function Alert({course}) {
  const [timedPopup, setTimedPopup]= useState(false);
  
  const remind = countTime(course);

  useEffect(()=>{
    if (remind > 0) {
      setTimeout(()=>{
        setTimedPopup(true);
      }, remind);
    }
  },[remind]);

  const courseData = coursesData.find(coursesData => 
    coursesData.id === course.id);

  return (
    <>
      <div className="Alert">
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <h3>上課提醒</h3>
          <p>{courseData.name}</p>
          {course.showTeacher ? <p>教師: {courseData.teacher}</p> : null}
          {course.showTime ? <p>上課時間: {courseData.time}</p> : null }
          <p>{course.remind} 分鐘後上課</p>
          <p>上課連結：<a href={courseData.link}>點這裡!</a></p>          
        </Popup>
      </div>
    </>
  );
}

export default Alert;
