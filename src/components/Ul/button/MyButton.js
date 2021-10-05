import React from "react";
import clButton from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={clButton.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
