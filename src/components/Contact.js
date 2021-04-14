import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReactDOM from "react-dom";

export default function Contact({ isopen, onClose }) {
  const [title, setTitle] = useState("Drop Me a Message");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tzl8sjf",
        "template_ofzqeoc",
        e.target,
        "user_X3AuMwcASyNSe3shhBdZq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTitle("Message sent");
    e.target.reset();
  }

  if (!isopen) {
    return <></>;
  }
  return ReactDOM.createPortal(
    <>
      <div
        className="contact-form"
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
      >
        <div className="container contact-container">
          <form onSubmit={sendEmail}>
            <h3>{title}</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder={"Your Name *"}
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email *"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Your Phone Number *"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-6  textareacontact">
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your Message *"
                    style={{ width: "100%", height: "150px" }}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="form-group ">
              <input
                type="submit"
                name="btnSubmit"
                className="btn btn-dark btn-contact"
                defaultValue="Send Message"
              />
              <button
                className="btn btn-dark btn-contact"
                onClick={() => onClose()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
