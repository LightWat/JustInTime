import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import StudentSelectCourse from "../components/StudentSelectCourse.js";
import {NoticeProvider} from "../context/notice-hooks";


describe("使用者可察看通知內容", () => {
  test("查看通知按鈕是否存在", () => {
    render(
      <NoticeProvider>
        <StudentSelectCourse userId={"111001001"} />
      </NoticeProvider>
    );

    const confirmButton = screen.getByTestId("confirm");

    expect(confirmButton).toBeTruthy();
  });

  test("按下通知按鈕後可以預覽通知", () => {
    render(
      <NoticeProvider>
        <StudentSelectCourse userId={"111001001"} />
      </NoticeProvider>
    );

    const confirmButton = screen.getByTestId("confirm");

    fireEvent.click(confirmButton);

    const alert = screen.getByTestId("popup");

    expect(alert).toBeTruthy();
  });
});