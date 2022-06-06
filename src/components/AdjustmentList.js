import React, {useState} from "react";

import {useNotices} from "../context/notice-hooks";
import Teacher from "./Teacher";
import Time from "./Time";
import Open from "./Open";
import Status from "./Status";


export default function AdjustmentList({userId}) {
  const {
    users,
    updateNoticeTeacher,
    updateNoticeTime,
    updateNoticeOpen
  } = useNotices();
  const [selected, setSelected] = useState("001");

  const user = users.find(user => user.id === userId);
  const course = user.course.find(course => course.id === selected);

  const submit = e => {
    setSelected(e.target.value);
  }

  return (
    <>
      <select defaultValue={selected} onChange={submit}>
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

      <hr />

      <Status course={course} />
    </>
  );
}