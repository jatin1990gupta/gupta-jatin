import React from "react";

import classes from "./SkillPart.module.css";

const SkillPart = (props) => {
  return <div className={classes.SkillPart}>{props.children}</div>;
};

export default SkillPart;
