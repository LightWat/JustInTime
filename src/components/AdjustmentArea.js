import React from "react";

import StudentSelectCourse from "./StudentSelectCourse";
import TeacherSelectCourse from "./TeacherSelectCourse";
import usersData from "../data/usersData.json";


export default function AdjustmentArea({userId}) {
  const identiy = usersData.find((user) => user.id === userId).identity;
  return (
    <div>
      <h3>課程提醒內容調整區</h3>
      <hr />
      {identiy === "student" ? 
        <StudentSelectCourse userId={userId} /> : 
        <TeacherSelectCourse userId={userId} />
      }
    </div>
  );
}
