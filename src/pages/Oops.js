import React from "react";
import { useLocation } from "react-router";

export default function Oops() {
  let location = useLocation();

  return (
    <div>
      <h1>Oops! 找不到你的網頁！</h1>
      <div>
        你所找尋的網頁 {location.pathname}，並不存在！<br />
        請確認後再次拜訪。
      </div>
    </div>
  );
}