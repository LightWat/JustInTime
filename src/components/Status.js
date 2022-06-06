import React from "react";


export default function Status({course}) {
  return (
    <div>
      <h4>{`【${course.name}】 ${course.remind}分鐘前提醒`}</h4>
      <h4>上課連結</h4>
      {course.showTime ? <h4>上課時間</h4> : null}
      {course.showTeacher ? <h4>教授姓名</h4> : null}
    </div>
  );
}