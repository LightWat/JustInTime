import React from "react";

import {useNotices} from "../context/notice-hooks";


export default function RemindTimeList({
  user, 
  courseId,
  defaultValue,
  changeSelect = f => f,
}) {
  const {updateRemindTime} = useNotices();

  const range = [0, 5, 10, 15, 20];

  return (
    <select
      className = "select-time"
      data-testid="select-time"
      defaultValue={"選擇提前幾分鐘通知"} 
      onChange={event => {
        updateRemindTime(user.id, courseId, event.target.value);
        changeSelect(event.target.value);
      }}
    >
      {range.map((elm, i) => (
        <option value={elm}>{elm}</option>
      ))}
    </select>
  );
}