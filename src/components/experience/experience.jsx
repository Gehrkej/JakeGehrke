import React, { useEffect, useRef } from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { motion, useAnimation } from 'framer-motion';


const Experience = () => {
    const controls = useAnimation();
    const ref = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({
                        opacity: 1,
                        transition: { duration: 1.5 }
                    });
                }
            },
            {
                threshold: 0.1,
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
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <motion.div className="container experience__container"
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={controls}>
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">3 Years</small>
                            </div>

                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">3 Years</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">3 Years</small>
                            </div>

                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">2 Years</small>
                            </div>

                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>React Native</h4>
                                <small className="text-light">1 Year</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Figma</h4>
                                <small className="text-light">1 Year</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Kotlin</h4>
                                <small className="text-light">>1 Year</small>
                            </div>

                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Emotion</h4>
                                <small className="text-light">>1 Year</small>
                            </div>
                        </article>

                    </div>

                </div>
                {/* END OF FRONTEND */}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Node JS</h4>
                                <small className="text-light">2 Years</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>SQL</h4>
                                <small className="text-light">1 Year</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Google Firebase</h4>
                                <small className="text-light">1 Year</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">>1 Year</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>RabbitMQ</h4>
                                <small className="text-light">>1 Year</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Redis</h4>
                                <small className="text-light">>1 Year</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">>1 Year</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Docker</h4>
                                <small className="text-light">>1 Year</small>
                            </div>

                        </article>
                    </div>
                </div>
                {/*End Backend*/}

                <div className="experience__programming">
                    <h3>Other Programming</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>C/C++</h4>
                                <small className="text-light">3 Years</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">1 Year</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>C#</h4>
                                <small className="text-light">>1 Year</small>
                            </div>

                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Assembly</h4>
                                <small className="text-light">>1 Year</small>
                            </div>

                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Unity</h4>
                                <small className="text-light">>1 Year</small>
                            </div>
                        </article>
                    </div>

                </div>
                {/*End Programming*/}

                <div className="experience__business">
                    <h3>Business Experience</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Management</h4>
                                <small className="text-light">3 Years</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Project Management</h4>
                                <small className="text-light">2 Years</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Marketing</h4>
                                <small className="text-light">2 Years</small>
                            </div>

                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Social Media</h4>
                                <small className="text-light">2 Years</small>
                            </div>

                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Budgeting</h4>
                                <small className="text-light">1 Year</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icons" />
                            <div>
                                <h4>Accounting</h4>
                                <small className="text-light">1 Year</small>
                            </div>
                        </article>
                    </div>

                </div>
            </motion.div>
        </section>
    )
}

export default Experience
