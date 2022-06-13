import React from "react";
import { render, screen } from "@testing-library/react";
import Time from "./Time";
import '@testing-library/jest-dom/extend-expect'


describe("學生可以查看老師提供的遠距課連結", () => {

    test("有開關上課時間按鈕", () => {
        render(<Time/>);
        const button = screen.getByRole('button');
        expect(button).toBeTruthy();
    });
});