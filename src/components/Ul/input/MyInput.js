import React from "react";
import clMyInput from "./MyInput.module.css";

const MyInput = ({ ...props }) => {
  return <input {...props} className={clMyInput.myInput} />;
};
export default MyInput;
