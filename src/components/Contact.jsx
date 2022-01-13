import React from "react";
import "./innerCss/contact.css";

let submit = (e) => {
  e.preventDefault();

  alert('submitted')
};

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h4>GET STARTED</h4>
        <h1>Let's work together</h1>
        <div className="forms">
          <div className="formText">
            <p>
              Please tell us a bit about you, your project, and how best to
              reach you. We’ll get right back to you.
            </p>
            <br />
            <p>
              Prefer email? <br />
              <span>support@thefalsecode.com</span>
            </p>
            <br />
            <p>
              Are you looking to join us? Feel free to drop us a note: <br />
              <span>career@thefalsecode.com</span>
            </p>
            <br />
          </div>
          <div className="formInput">
            <p style={{ color: "red", fontSize: ".8rem" }}>
              Please enter details carefully*
            </p>
            <br />
            <form onSubmit={submit}>
              <input type="text" placeholder="Your name" />
              <br />
              <input type="email" placeholder="Your email" />
              <br />
              <input type="number" placeholder="Your phone number" />
              <br />
              <textarea placeholder="Your project discription" />
              <br />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
