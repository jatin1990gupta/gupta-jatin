import React from "react";

import classes from "./Project.module.css";

const Project = (props) => {
  let proj = <div className={classes.Disabled}></div>;
  let imgStyle = null;

  if (!props.disabled) {
    proj = <div className={classes.Proj}>{props.children}</div>;
    imgStyle = {
      background: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${props.img})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  }

  return (
    <div className={classes.Project} style={imgStyle}>
      {proj}
    </div>
  );
};

export default Project;
