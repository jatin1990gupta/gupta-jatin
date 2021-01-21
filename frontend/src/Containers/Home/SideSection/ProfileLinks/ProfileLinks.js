import React from "react";

import classes from "./ProfileLinks.module.css";

const ProfileLinks = (props) => {
  return (
    <div className={classes.ProfileLinks}>
      <a
        href="https://github.com/jatin1990gupta"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/jatin-gupta-a847b9158/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a
        href="https://www.instagram.com/gupta.jatin1990/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
};

export default ProfileLinks;
