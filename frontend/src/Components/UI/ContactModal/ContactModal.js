import React from "react";

import classes from "./ContactModal.module.css";

const ContactModal = (props) => {
  return props.show ? (
    <div class={classes.ContactModal}>
      <div className={classes.TextBox}>
        <p>Your message sent successfully to Jatin.</p>
        <button onClick={props.clicked}>Back</button>
      </div>
    </div>
  ) : null;
};

export default ContactModal;
