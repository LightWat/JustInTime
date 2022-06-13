import React from "react";
import { render, screen } from "@testing-library/react";
import Teacher from "../components/Teacher";
import '@testing-library/jest-dom/extend-expect'


describe("學生可以查看老師提供的遠距課連結", () => {

    test("有開關老師名字按鈕", () => {
        render(<Teacher/>);
        const button = screen.getByRole('button');
        expect(button).toBeTruthy();
    });
});