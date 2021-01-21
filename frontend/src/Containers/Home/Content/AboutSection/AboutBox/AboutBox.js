import React from "react";

import classes from "./AboutBox.module.css";

const AboutBox = (props) => {
  return (
    <div className={classes.AboutBox}>
      "You may encounter defeats, but you must not be defeated. In fact, it may
      be necessary to encounter the defeats, so you can know who you are, what
      you can rise from and how you can still come out of it."
      <p>- Maya Angelou</p>
    </div>
  );
};

export default AboutBox;
