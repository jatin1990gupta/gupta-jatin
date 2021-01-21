import React from "react";

import classes from "./SideSection.module.css";

import Intro from "./Intro/Intro";
import ExtraLinks from "./ExtraLinks/ExtraLinks";
import ProfileLinks from "./ProfileLinks/ProfileLinks";

const SideSection = (props) => {
  return (
    <div className={classes.SideSection}>
      <Intro />
      <ExtraLinks />
      <ProfileLinks />
    </div>
  );
};

export default SideSection;
