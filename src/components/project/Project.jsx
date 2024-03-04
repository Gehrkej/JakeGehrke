import React from "react";
import "./project.css";
import ME from "../../assets/me-about.JPG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function Project() {
  return (
    <>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years Learning</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>A Few</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>A Couple Completed</small>
              </article>
            </div>
            <p>
              Highly motivated Computer Science major with a strong business
              background and a GPA of 3.79. Skilled in a variety of programming
              languages, including Python, C, C++, HTML, JavaScript, CSS,
              Kotlin, and Haskell. Proficient in utilizing developer tools such
              as VS Code, Android Studio, and technologies/frameworks like
              GitHub, NodeJS, React, Git, and Redux. Experienced in developing
              mobile and web applications, including a personal site and a
              mobile app for drafting NFL players. Solid understanding of
              algorithms, data structures, computer architecture, and networks.
              Demonstrated leadership as the President of Oregon State
              University Club Baseball. Efficient in managing projects,
              collaborating with teams, and providing excellent customer
              support.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
