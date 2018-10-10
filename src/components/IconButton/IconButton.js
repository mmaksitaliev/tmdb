import React from "react";

export default ({ className, onClick, children }) => {
  const classNames = "icon-button " + (className ? className : "");
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};
