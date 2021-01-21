import React from "react";

import classes from "./ExperienceSection.module.css";

import Experience from "./Experience/Experience";

const ExperienceSection = (props) => {
  return (
    <div className={classes.ExperienceSection}>
      <h1>Experience</h1>
      <Experience>
        <h3>
          BLUELIT SOLUTIONS LLP | <span>Software Developer - Intern</span>{" "}
        </h3>
        <h5>Sep 2020 - Dec 2020 | Hyederabad, India (Remote)</h5>
        <p>
          • <b>Phase 1: </b>Created a Static website as a landing page.
        </p>
        <p>
          • <b>Phase 2: </b>Converted that Website into ReactJS. Added
          Authentication of users.
        </p>
        <p>
          • <b>Phase 3: </b>Implemented a store part for e-commerce.
        </p>
      </Experience>
      <Experience>
        <h3>
          MONKTREE EDUCATION PVT. LTD. |{" "}
          <span>Back End Developer - Intern</span>{" "}
        </h3>
        <h5>July 2020 - Sep 2020 | Delhi, India (Remote)</h5>
        <p>
          • Created different API's for Authentication and managing User Data.
        </p>
        <p>
          • Maintained whole server side code and handled different requests.
        </p>
      </Experience>
    </div>
  );
};

export default ExperienceSection;
