import React from "react";
import ReactDOM from "react-dom";
import {NoticeProvider} from "./context/notice-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App"


ReactDOM.render(
  <NoticeProvider>
    <App userId={"111001001"} />
  </NoticeProvider>,
  document.getElementById("root")
);