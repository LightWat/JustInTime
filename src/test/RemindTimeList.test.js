import * as React from "react";
import {render, screen, fireEvent} from "@testing-library/react";

import StudentSelectCourse from "../components/StudentSelectCourse.js";
import {NoticeProvider} from "../context/notice-hooks";

describe("測試調整提前通知時間", () => {
  test("時間選單是否存在", () => {
    render(
      <NoticeProvider>
        <StudentSelectCourse userId={"111001001"} />
      </NoticeProvider>
    );

    const selectTime = screen.getByTestId("select-time");

    expect(selectTime).toBeTruthy();
  });

  test("調整成提前20分鐘, 確認狀態是否改變", () => {
    render(
      <NoticeProvider>
        <StudentSelectCourse userId={"111001001"} />
      </NoticeProvider>
    );

    const selectTime = screen.getByTestId("select-time");

    fireEvent.change(selectTime, {target: {value: 20}});
    
    const statusTime = screen.getByTestId("status-time");

    const expectResult = "【所有課程】 20分鐘前提醒通知";
    console.log(statusTime);

    expect(statusTime.textContent).toBe(expectResult);
  })
})