import React from "react";

import StudentSelectCourse from "./StudentSelectCourse";
import TeacherSelectCourse from "./TeacherSelectCourse";
import usersData from "../data/usersData.json";
import css from "../CSS/All.css";
import image2 from "../UI/課表.png";


export default function AdjustmentArea({userId}) {
  const identiy = usersData.find((user) => user.id === userId).identity;
  return (
    <>
    <div>

      {identiy === "student" ? 
        <StudentSelectCourse userId={userId} /> : 
        <TeacherSelectCourse userId={userId} />
      }
    </div>
    
    <div className = "class-table">
      <img src={image2} alt="image2" />
    </div>

    <div className = "adjust-area">
    </div>

    <div className = "people">
    </div>
    </>
  );
}
