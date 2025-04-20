import React, { useEffect, useRef } from 'react'
import './industryExperience.css'
import { motion, useAnimation } from 'framer-motion'
import { BsBriefcase } from 'react-icons/bs'

const IndustryExperience = () => {
    const controls = useAnimation()
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({
                        opacity: 1,
                        transition: { duration: 1.5 },
                    })
                }
            },
            {
                threshold: 0.1,
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [controls])

    return (
        <section id="industry-experience">
            <h5>My Professional Journey</h5>
            <h2>Industry Experience</h2>

            <motion.div
                className="container industry-experience__container"
                ref={ref}
                initial={{ opacity: 0 }}
                animate={controls}
            >
                <div className="industry-experience__timeline">
                    <article className="industry-experience__item">
                        <div className="industry-experience__icon">
                            <BsBriefcase />
                        </div>
                        <div className="industry-experience__content">
                            <div>
                                <h3>Full-stack Developer</h3>
                                <h4>Knowledge Coop</h4>
                                <small>August 2024 - Present</small>
                                <ul>
                                    <li>
                                        Develop and maintain responsive web
                                        applications using React, Next.js, and
                                        TypeScript.
                                    </li>
                                    <li>
                                        Build robust back-end systems with
                                        Node.js and Django, integrating
                                        databases like PostgreSQL and Firebase.
                                    </li>
                                    <li>
                                        Optimize UI/UX with implementation of
                                        custom design system and component
                                        library, ensuring accessibility and
                                        responsiveness.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>

                    <article className="industry-experience__item">
                        <div className="industry-experience__icon">
                            <BsBriefcase />
                        </div>
                        <div className="industry-experience__content">
                            <div>
                                <h3>
                                    Website and Media Development Coodinator
                                </h3>
                                <h4>
                                    Associated Students of Oregon State
                                    University
                                </h4>
                                <small>2020 - 2022</small>
                                <ul>
                                    <li>
                                        As the Media and Website Development
                                        Coordinator for the Associated Students
                                        of Oregon State University (ASOSU), I
                                        played a pivotal role in supporting the
                                        executive branch by fostering and
                                        strengthening relationships with the
                                        student body and the broader community.
                                    </li>
                                    <li>
                                        Collaborated with the executive branch
                                        to develop and maintain the ASOSU
                                        website, ensuring it was visually
                                        appealing and user-friendly.
                                    </li>
                                    <li>
                                        Managed the ASOSU social media platforms
                                        (Facebook, Instagram, Twitter) to
                                        enhance engagement and promote events.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </motion.div>
        </section>
    )
}

export default IndustryExperience
