import React from "react";
import {render, screen} from "@testing-library/react";
import TeacherSelectCourse from "./TeacherSelectCourse";
import '@testing-library/jest-dom/extend-expect'

describe("供老師放上遠距課連結", () => {

  test("有提供輸入框", () => {
        render(<TeacherSelectCourse />);
        const input = screen.getByRole("textbox");
        expect(input).toBeTruthy();
    });

});