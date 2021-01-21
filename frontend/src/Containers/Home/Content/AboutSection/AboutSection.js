import React from "react";

import classes from "./AboutSection.module.css";

import AboutBox from "./AboutBox/AboutBox";

const AboutSection = (props) => {
  return (
    <div className={classes.AboutSection}>
      <h1>About me</h1>
      <p>
        The first time I started programming in the laguage C++ and with the
        very basic code of 'Hello World'. Within the whole track I made my way
        through several programming languages like C, Python, JavaScript and
        many more and wandered into the world of programming.
      </p>
      <p>
        As in competitve programming, I prefer C++ to write all the logics.{" "}
        <br /> I also worked on <span>Web Development (MERN)</span> and learnt
        various front-end and back-end libraries. <br /> Some of my projects are
        mentioned below.
      </p>
      <p>
        Also, right now I am passionate about solving{" "}
        <span>Data Structure and Algorithm</span> questions with enhancing my{" "}
        <span>Problem solving skills.</span> <br />
      </p>
      <AboutBox />
    </div>
  );
};

export default AboutSection;
