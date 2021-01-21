import React from "react";

import classes from "./EducationSection.module.css";

import Education from "./Education/Education";

const EducationSection = (props) => {
  return (
    <div className={classes.EducationSection}>
      <h1>Education</h1>
      <Education>
        <h3>Oriental College of Technology | Bhopal, MP</h3>
        <h5>B.Tech - Computer Science (2018-22) </h5>
      </Education>
      <Education>
        <h3>St. John Vianney School | Gwalior, MP </h3>
        <h5>High School – Mathematics and Computer Science</h5>
      </Education>
    </div>
  );
};

export default EducationSection;
