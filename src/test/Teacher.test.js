import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'


import StudentSelectCourse from "../components/StudentSelectCourse.js";
import {NoticeProvider} from "../context/notice-hooks";


describe("學生調整是否顯示老師", () => {
  test("顯示老師按鈕是否存在", () => {
    render(
      <NoticeProvider>
        <StudentSelectCourse userId={"111001001"} />
      </NoticeProvider>
    );

    const teacherButton = screen.getByTestId("teacher");

    expect(teacherButton).toBeTruthy();
  });

  test("顯示老師是否為預設值", () => {
    render(
      <NoticeProvider>
        <StudentSelectCourse userId={"111001001"} />
      </NoticeProvider>
    );

    const teacherButton = screen.getByTestId("teacher");

    expect(teacherButton).toHaveClass("button-teacher-true");
  });

  test("顯示老師按下後是否改變", () => {
    render(
      <NoticeProvider>
        <StudentSelectCourse userId={"111001001"} />
      </NoticeProvider>
    );

    const teacherButton = screen.getByTestId("teacher");
    fireEvent.click(teacherButton);

    expect(teacherButton).toHaveClass("button-teacher-false");
  });
});