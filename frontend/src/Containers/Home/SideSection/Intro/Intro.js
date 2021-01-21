import React from "react";

import classes from "./Intro.module.css";

import ProfImg from "../../../../Assets/img/prof.jpg";

const Intro = (props) => {
  return (
    <div className={classes.Intro}>
      <img src={ProfImg} alt="" />
      <h4>
        I am <span>Jatin Gupta</span>.
      </h4>
      <h5>Web Developer (MERN). Competitive Programmer.</h5>
    </div>
  );
};

export default Intro;
