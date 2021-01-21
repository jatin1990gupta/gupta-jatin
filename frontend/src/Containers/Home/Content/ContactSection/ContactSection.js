import React from "react";

import classes from "./ContactSection.module.css";

import ContactBox from "./ContactBox/ContactBox";

const ContactSection = (props) => {
  return (
    <div className={classes.ContactSection}>
      <h1>Contact</h1>
      <ContactBox />
    </div>
  );
};

export default ContactSection;
