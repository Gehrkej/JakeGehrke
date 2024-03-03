import React from "react";
import "./contact.css";

const contact = () => {
  return (
    <section id="contact">
      <h5>Want to Get in touch?</h5>
      <h2>Contact Me:</h2>

      <div className="container contact__container">
        <div className="experience__frontend">
          <h3>My Contact Information</h3>
          <div className="contact__content">
            <article className="contact__details">
              <div>
                <h4>Email:</h4>
                <small className="text-light">jake.d.gehrke@gmail.com</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
