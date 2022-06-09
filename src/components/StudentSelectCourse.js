import React, {useState} from "react";

import {useNotices} from "../context/notice-hooks";
import Teacher from "./Teacher";
import Time from "./Time";
import Open from "./Open";
import Status from "./Status";
import RemindTimeList from "./RemindTimeList";


export default function StudentSelectCourse({userId}) {
  const {
    users,
    updateNoticeTeacher,
    updateNoticeTime,
    updateNoticeOpen,
  } = useNotices();

  const [selected, setSelected] = useState("all");
  
  const user = users.find(user => user.id === userId);
  const course = user.course.find(course => course.id === selected);

  const [selectedTime, setSelectedTime] = useState(course.remind); 

  return (
    <>
      <select defaultValue={selected} onChange={event => 
        setSelected(event.target.value)
      }>
        {user.course.map((course, i) => (
          <option value={course.id}>{course.name}</option>
        ))}
      </select>

      <br />
      <br />

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
      <hr />
      <Status course={course} />
    </>
  );
}