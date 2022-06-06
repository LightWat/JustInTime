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
      <div>
        <h4>
          {course.open ? 
            `【${course.name}】 ${course.remind}分鐘前提醒通知` :
            `【${course.name}】 未開啟通知`
          }
        </h4>
        <div>
          <h4>上課連結</h4>
          <a href={courseData.link}>連結</a>
        </div>
        {course.showTime ? 
          <div>
            <h4>上課時間</h4>
            <h5>{courseData.time}</h5>
          </div>: 
        null}
        {course.showTeacher ? 
          <div>
            <h4>教授姓名</h4>
            <h5>{courseData.teacher}</h5>
          </div> : 
        null}
      </div>
    );
  } else {
    return (
      <div>
        <h4>
          {course.open ? 
            `【${course.name}】 ${course.remind}分鐘前提醒通知` :
            `【${course.name}】 未開啟通知`
          }
        </h4>
        <div>
          <h4>上課連結</h4>
        </div>
        {course.showTime ? 
          <div>
            <h4>上課時間</h4>
          </div>: 
        null}
        {course.showTeacher ? 
          <div>
            <h4>教授姓名</h4>
          </div> : 
        null}
      </div>
    );
  }
}