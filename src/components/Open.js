import React from "react";

import RemindTimeList from "./RemindTimeList";


export default function Open({user, courseId, selected, onClick = f => f}) {
  return (
    <>
      <button 
        style={selected ? {"backgroundColor": "green"} : {"backgroundColor": "red"}}
        onClick={onClick}>
          是否通知
      </button>
      {selected ? <RemindTimeList user={user} courseId={courseId} /> : null}
    </>
  );
}