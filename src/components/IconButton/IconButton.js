import React from "react";

export default props => {
  return <button className="icon-button" {...props}>{props.children}</button>;
};
