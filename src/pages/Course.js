import React from "react";
import {NoticeProvider} from "../context/notice-hooks";
import {useLocation } from "react-router-dom";
import AdjustmentArea from "../components/AdjustmentArea"

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
          <AdjustmentArea userId={id} />
        </NoticeProvider>
    );
}