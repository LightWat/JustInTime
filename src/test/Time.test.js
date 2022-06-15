import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

import StudentSelectCourse from "../components/StudentSelectCourse.js";
import {NoticeProvider} from "../context/notice-hooks";


describe("學生調整是否顯示時間", () => {
  test("顯示時間按鈕是否存在", () => {
    render(
      <NoticeProvider>
        <StudentSelectCourse userId={"111001001"} />
      </NoticeProvider>
    );

    const timeButton = screen.getByTestId("time");

    expect(timeButton).toBeTruthy();
  });

  test("顯示時間是否為預設值", () => {
    render(
      <NoticeProvider>
        <StudentSelectCourse userId={"111001001"} />
      </NoticeProvider>
    );

    const timeButton = screen.getByTestId("time");

    expect(timeButton).toHaveClass("button-time-true");
  });

  test("顯示時間按下後是否改變", () => {
    render(
      <NoticeProvider>
        <StudentSelectCourse userId={"111001001"} />
      </NoticeProvider>
    );

    const timeButton = screen.getByTestId("time");
    fireEvent.click(timeButton);

    expect(timeButton).toHaveClass("button-time-false");
  });
});