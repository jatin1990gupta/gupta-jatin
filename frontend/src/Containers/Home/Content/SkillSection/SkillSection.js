import React from "react";

import classes from "./SkillSection.module.css";

import SkillPart from "./SkillPart/SkillPart";

const SkillSection = (props) => {
  return (
    <div className={classes.SkillSection}>
      <h1>Tech Stack</h1>
      <div className={classes.SkillParts}>
        <SkillPart>
          <h3>Development</h3>
          <ul>
            <li>ReactJS || NodeJS </li>
            <li>ExpressJS || MongoDB</li>
            <li>Heroku || GitHub</li>
          </ul>
        </SkillPart>
        <SkillPart>
          <h3>Others</h3>
          <ul>
            <li>DS Algo</li>
            <li>C and C++</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </SkillPart>
      </div>
    </div>
  );
};

export default SkillSection;
