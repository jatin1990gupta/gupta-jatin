import React from "react";

import classes from "./Education.module.css";

const Education = (props) => {
  return <div className={classes.Education}>{props.children}</div>;
};

export default Education;
