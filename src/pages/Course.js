import React from "react";
import ReactDOM from "react-dom";
import {NoticeProvider} from "../context/notice-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import {useLocation } from "react-router-dom";
import App from "../components/AdjustmentArea"

// ReactDOM.render(
//   <NoticeProvider>
//     <App userId={"111001001"} />
//   </NoticeProvider>,
//   document.getElementById("root")
// );

export default function Course(){
  const { state } = useLocation();
  const { id } = state;  
    return(
        <NoticeProvider>
          <App userId={id} />
        </NoticeProvider>
    );
}