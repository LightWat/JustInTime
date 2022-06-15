import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

import StudentSelectCourse from "../components/StudentSelectCourse.js";
import {NoticeProvider} from "../context/notice-hooks";


describe("學生調整是否開啟通知", () => {
  test("開關通知按鈕是否存在", () => {
    render(
      <NoticeProvider>
        <StudentSelectCourse userId={"111001001"} />
      </NoticeProvider>
    );

    const openButton = screen.getByTestId("open");

    expect(openButton).toBeTruthy();
  });

  test("開關按鈕是否為預設值", () => {
    render(
      <NoticeProvider>
        <StudentSelectCourse userId={"111001001"} />
      </NoticeProvider>
    );

    const openButton = screen.getByTestId("open");

    expect(openButton).toHaveClass("button-alart-true");
  });

  test("開關按鈕按下後是否改變", () => {
    render(
      <NoticeProvider>
        <StudentSelectCourse userId={"111001001"} />
      </NoticeProvider>
    );

    const openButton = screen.getByTestId("open");
    fireEvent.click(openButton);

    expect(openButton).toHaveClass("button-alart-false");
  });
});