import React, { useState } from "react";
import axios from "axios";

import classes from "./ContactBox.module.css";

import Spinner from "../../../../../Components/UI/Spinner/Spinner";
import ContactModal from "../../../../../Components/UI/ContactModal/ContactModal";

const ContactBox = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = () => {
    setSending(true);
    axios
      .post("http://localhost:5000/submit-data", {
        name: inputName,
        email: inputEmail,
        message: inputMessage,
      })
      .then((response) => {
        setSending(false);
        setMessageSent(true);
        setInputName("");
        setInputEmail("");
        setInputMessage("");
        console.log("Message sent");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className={classes.ContactBox}>
      <ContactModal show={messageSent} clicked={() => setMessageSent(false)} />
      <h2>Let's Connect!</h2>
      <p>
        Please reach me on{" "}
        <a href="https://www.linkedin.com/in/jatin1990gupta/" target="_blank#">
          Linkedin
        </a>{" "}
        or through my e-mail:
        <a href="mailto:jatin1990gupta@gmail.com"> jatin1990gupta@gmail.com</a>
      </p>
      <p>Or Contact me Below:</p>

      {sending ? (
        <Spinner />
      ) : (
        <div className={classes.InputBox}>
          <div className={classes.InputArea}>
            <input
              type="text"
              placeholder="Your Name"
              value={inputName}
              onChange={(event) => setInputName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={inputEmail}
              onChange={(event) => setInputEmail(event.target.value)}
            />
          </div>
          <p>Enter Message</p>
          <div className={classes.MessageArea}>
            <textarea
              cols="60"
              rows="8"
              value={inputMessage}
              onChange={(event) => setInputMessage(event.target.value)}
            />
          </div>
          <button onClick={onSubmit} className={classes.Button} type="submit">
            Send Message
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactBox;
