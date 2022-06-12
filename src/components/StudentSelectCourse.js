import React, {useState} from "react";

import {useNotices} from "../context/notice-hooks";
import Teacher from "./Teacher";
import Time from "./Time";
import Open from "./Open";
import Status from "./Status";
import RemindTimeList from "./RemindTimeList";
import Alert from "./Alert";
import image2 from "../UI/課表.png";
import ConfirmAlert from "./ConfirmAlert";


export default function StudentSelectCourse({userId}) {
  const {
    users,
    updateNoticeTeacher,
    updateNoticeTime,
    updateNoticeOpen,
  } = useNotices();

  const [selected, setSelected] = useState("001");
  
  const user = users.find(user => user.id === userId);
  const course = user.course.find(course => course.id === selected);

  const [selectedTime, setSelectedTime] = useState(course.remind); 

  return (
    <>
      <div className = "class-table">
        <img src={image2} alt="image2" />
      </div>

      <div className = "adjust-area"></div>

      <select className = "select-course" 
        defaultValue={selected} 
        onChange={event =>
          setSelected(event.target.value)
        }
      >
        {user.course.map((course, i) => (
          <option value={course.id}>{course.name}</option>
        ))}
      </select>



      <Teacher 
        selected={course.showTeacher}
        onClick={() => updateNoticeTeacher(userId, selected)} 
      />

      <Time
        selected={course.showTime}
        onClick={() => updateNoticeTime(userId, selected)}
      />

      <br />

      <Open
        user={user}
        courseId={selected} 
        selected={course.open}
        onClick={() => updateNoticeOpen(userId, selected)}
      />
      {course.open ? 
        <RemindTimeList 
          user={user} 
          courseId={course.id}
          defaultValue={selectedTime}
          changeSelect={setSelectedTime}
        /> :
        null
      }
      <Status course={course} />
      <ConfirmAlert course={course} />
      
      {user.course.map((course, i) => (
        (course.open && course.id !== "all") ?
          <Alert course={course} /> :
          null
      ))}
    </>

  );
}