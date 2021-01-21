import React from "react";

import classes from "./ProjectSection.module.css";

import Project from "./Project/Project";
import NotesImg from "../../../../Assets/img/projects/notes.png";
import ColorGameImg from "../../../../Assets/img/projects/colorGame.jpg";

const ProjectSection = (props) => {
  return (
    <div className={classes.ProjectSection}>
      <h1>Recent Projects</h1>
      <div className={classes.ProjectBox}>
        <Project img={NotesImg}>
          <p>We Keeps your</p>
          <p>Notes Safe</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://secure-nots.herokuapp.com/"
          >
            View Project
          </a>
        </Project>
        <Project img={ColorGameImg}>
          <p>Guessing the</p>
          <p>Color Game</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://jatin1990gupta.github.io/Color-Game/"
          >
            Click to play.
          </a>
        </Project>
        <Project disabled></Project>
      </div>
    </div>
  );
};

export default ProjectSection;
