import React, {useState, useEffect} from "react";

import {useNotices} from "../context/notice-hooks";


export default function RemindTimeList({user, courseId}) {
  const {updateRemindTime} = useNotices();
  const [selectedTime, setSelectedTime] = useState(
    user.course.find(course => course.id === courseId).remind
  );

  const range = [0, 5, 10, 15, 20];

  const change = e => {
    setSelectedTime(e.target.value);
  }

  useEffect(() => {
    updateRemindTime(user.id, courseId, selectedTime);
  }, [user.id, courseId, selectedTime, updateRemindTime]);

  return (
    <select defaultValue={range[0]} onChange={change}>
      {range.map((elm, i) => (
        <option value={elm}>{elm}</option>
      ))}
    </select>
  );
}