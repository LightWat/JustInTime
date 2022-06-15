import React from "react";
import coursesData from "../data/coursesData.json";

export default function Status({course}) {
  let courseData;

  if (course.id !== "all") {
    courseData = coursesData.find(
      courseData => courseData.id === course.id
    ); 
  }

  if (course.id !== "all") {
    return (
      <div >
        <h5 className = "alart-time">
          {course.open ? 
            `【${course.name}】 ${course.remind}分鐘前提醒通知` :
            `【${course.name}】 未開啟通知`
          }
        </h5>
        <div>
          <a href={courseData.link} >
            <button className = "show-link"></button>
          </a>          
        </div>
        {course.showTime ? 
          <div className = "show-time">
            <h5 className = "detail-time">{courseData.time}</h5>
          </div>: 
        null}
        {course.showTeacher ? 
          <div className = "show-teacher">
            <h5 className = "detail-teacher">{courseData.teacher}</h5>
          </div> : 
        null}
      </div>
    );
  } else {
    return (
      <div>
        <h5 className = "alart-time" data-testid="status-time">
          {course.open ? 
            `【${course.name}】 ${course.remind}分鐘前提醒通知` :
            `【${course.name}】 未開啟通知`
          }
        </h5>
        <div className = "show-link"></div>
        {course.showTime ? 
          <div className = "show-time"></div>: 
        null}
        {course.showTeacher ? 
          <div className = "show-teacher"></div> : 
        null}
      </div>
    );
  }
}