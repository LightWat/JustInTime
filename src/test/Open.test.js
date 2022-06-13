import React from "react";
import { render, screen } from "@testing-library/react";
import Open from "../components/Open";
import '@testing-library/jest-dom/extend-expect'


describe("學生可以查看老師提供的遠距課連結", () => {

    test("有開關通知按鈕", () => {
        render(<Open/>);
        const button = screen.getByRole('button');
        expect(button).toBeTruthy();
    });

});