import React from "react";

import SelectCourse from "./SelectCourse";


export default function AdjustmentArea({userId}) {
  return (
    <div>
      <h3>課程提醒內容調整區</h3>
      <hr />
      <SelectCourse userId={userId} />
    </div>
  )
}