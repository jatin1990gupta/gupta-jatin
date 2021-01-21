import React from "react";

import classes from "./Content.module.css";

import AboutSection from "./AboutSection/AboutSection";
import SkillSection from "./SkillSection/SkillSection";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import EducationSection from "./EducationSection/EducationSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import ContactSection from "./ContactSection/ContactSection";
import Footer from "./Footer/Footer";

const Content = (props) => {
  return (
    <div className={classes.Content}>
      <AboutSection />
      <div className={classes.Division}></div>
      <SkillSection />
      <div className={classes.Division}></div>
      <ExperienceSection />
      <div className={classes.Division}></div>
      <ProjectSection />
      <div className={classes.Division}></div>
      <EducationSection />
      <div className={classes.Division}></div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Content;
