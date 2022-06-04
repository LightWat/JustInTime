import React from "react";


export default function Status({course}) {
  return (
    <div>
      <h4>{`【${course.name}】 ${course.notice.remind}分鐘前提醒`}</h4>
      <h4>上課連結</h4>
      {course.notice.time ? <h4>上課時間</h4> : null}
      {course.notice.teacher ? <h4>教授姓名</h4> : null}
    </div>
  );
}