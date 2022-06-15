import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; 

import App from "../components/App.js";


describe("測試登入時成功與失敗", () => {
  test("確認可填入帳號", () => {
    render(
      <Router>
        <App />
      </Router> 
    );

    const userNameField = screen.getByPlaceholderText("Enter UserID");

    expect(userNameField).toBeTruthy();
  });

  test("確認可填入密碼", () => {
    render(
      <Router>
        <App />
      </Router>  
    );

    const pwdField = screen.getByPlaceholderText("Enter Password");

    expect(pwdField).toBeTruthy();
  });

  test("確認有提交資訊按鈕", () => {
    render(
      <Router>
        <App />
      </Router>  
    );

    const submitButton = screen.getByRole("button");

    expect(submitButton).toBeTruthy();
  });

  test("填入正確密碼時，可成功顯示課程選擇區", () => {
    render(
      <Router>
        <App />
      </Router>  
    );

    const userNameField = screen.getByPlaceholderText("Enter UserID");
    const pwdField = screen.getByPlaceholderText("Enter Password");
    const submitButton = screen.getByRole("button");

    const userName = "111001001";
    const pwd = "1234";

    fireEvent.change(userNameField, {target: {value: userName}});
    fireEvent.change(pwdField, {target: {value: pwd}});
    fireEvent.click(submitButton);

    const img = screen.getByAltText("image2");

    expect(img).toBeTruthy();
  });

});