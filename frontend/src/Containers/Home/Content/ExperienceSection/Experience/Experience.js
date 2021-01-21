import React from "react";

import classes from "./Experience.module.css";

const Experience = (props) => {
  return <div className={classes.Experience}>{props.children}</div>;
};

export default Experience;
