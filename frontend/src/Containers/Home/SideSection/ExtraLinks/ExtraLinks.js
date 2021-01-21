import React from "react";

import classes from "./ExtraLinks.module.css";

const ExtraLinks = (props) => {
  return (
    <div className={classes.ExtraLinks}>
      <a
        href="https://drive.google.com/file/d/1Q1MNY-H-NBHRKwgrRqrg-5rRjxpz0FNp/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        View Resume
      </a>
    </div>
  );
};

export default ExtraLinks;
