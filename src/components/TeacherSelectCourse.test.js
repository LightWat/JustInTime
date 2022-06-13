import React from "react";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import TeacherSelectCourse from "./TeacherSelectCourse";
import {NoticeProvider} from "../context/notice-hooks";


describe("供老師放上遠距課連結", () => {

  test("有提供輸入框", () => {
    render(
      <NoticeProvider>
        <TeacherSelectCourse userId={"iamteacher"} />
      </NoticeProvider>
    );

    const input = screen.getByRole("textbox");

    expect(input).toBeTruthy();
  });

});