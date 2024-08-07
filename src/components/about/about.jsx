import React, { useEffect, useRef } from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import MeProfessional from '../../assets/me-professional.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { motion, useAnimation } from 'framer-motion';


const About = () => {
    const controls = useAnimation();
    const ref = useRef(null);

    //Picture hook
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1 }
                    });
                }
            },
            {
                threshold: [0.1, 0.25, 0.5, 0.75, 1.0],
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup the observer on component unmount
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1 }
                    });
                }
            },
            {
                threshold: [0.1, 0.25, 0.5, 0.75, 1.0]
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup the observer on component unmount
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);





    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container" ref={ref}>
                <motion.div className="about__me"
                            ref={ref}
                            initial={{ x: -100, opacity: 0 }}
                            animate={controls}>
                    <div className="about__me-image">
                        <img src={ME} alt="Me in my OSU Baseball Uniform" />
                    </div>
                    <div className="about__me-image">
                        <img src={MeProfessional} alt="Me at an ASOSU Work Event" />
                    </div>
                </motion.div>
                <motion.div className="about__content"
                            ref={ref}
                            initial={{ y: 100, opacity: 0 }}
                            animate={controls}>
                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <FaAward className="about__icon" />
                                <h5>Experience</h5>
                                <small>Bachelors Degree in Computer Science</small>
                            </article>
                            <article className="about__card">
                                <FiUsers className="about__icon" />
                                <h5>Clients</h5>
                                <small>5+</small>
                            </article>
                            <article className="about__card">
                                <VscFolderLibrary className="about__icon" />
                                <h5>Projects</h5>
                                <small>20+</small>
                            </article>
                        </div>
                        <p>I am a recent graduate of Oregon State University, holding a degree in Computer Science with
                            a minor in General Business. My academic journey culminated with a GPA of 3.82, earning me
                            the Greek honors of magna cum laude.</p>
                        <p>Throughout my studies, I engaged in a variety of impactful projects. For my senior capstone,
                            I collaborated with the OSU Men's golf team to develop a custom training app. We prototyped
                            the application with Figma, developed the front end in React
                            Native, and took a serverless approach by using Google Firebase. Additionally, I created a
                            responsive weather web
                            application with React and Emotion for the front end and enabled real-time data by
                            integrating the OpenWeather API. I
                            also led the development of "Fight the Night," a 2D action-platformer, showcasing my skills
                            in Unity and C#.</p>

                        <p>Professionally, I served as the Website and Media Development Coordinator for the Associated
                            Students of Oregon State University (ASOSU). In this role, I enhanced the website’s design
                            and functionality, led the migration to Drupal 10. On top of this, I designed marketing
                            materials that
                            significantly increased student engagement. Previously, I worked as a Student Technician at
                            OSU's MIME IT, providing technical support to faculty and managing work through a ticketing
                            system.</p>

                        <p>Beyond my academic and professional pursuits, I have demonstrated leadership as President of
                            the Oregon State University Club Baseball team, where I managed internal affairs and
                            coordinated with external entities to plan 2 full seasons, 41 games total. Some noteworthy
                            events and
                            projects from this were ending 3rd at regional with a final national ranking of 19 out 500
                            teams, fundraising over $2000 each season, and investing in long term assets for the club
                            such as a pitching machine and new jerseys. </p>

                        <p>Reflecting on my past experience, I look to bring my dedication, hard work, and passion into
                            my professional career.</p>

                        <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    </div>
                </motion.div>


            </div>
        </section>

    )
}

export default About
