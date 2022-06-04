import React from "react";

import AdjustmentList from "./AdjustmentList";


export default function AdjustmentArea({userId}) {
  return (
    <div>
      <h3>課程提醒內容調整區</h3>
      <hr />
      <AdjustmentList userId={userId} />
    </div>
  )
}