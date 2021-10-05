import React from "react";
import clMyModal from "./MyModal.module.css";

const MyModal = ({ title, id, children, visible, setVisible }) => {
  const rootClass = [clMyModal.myModal];

  if (visible) {
    rootClass.push(clMyModal.active);
  }

  return (
    <div id={id} className={rootClass.join(" ")}>
      <div className={clMyModal.myModalContent}>
        <h1 className={clMyModal.myModalTitle}>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
