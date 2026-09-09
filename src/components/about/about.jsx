import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import MeProfessional from '../../assets/me-professional.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import AboutCard from '../shared/AboutCard'
import AboutData from '../../data/about.json'

const cardIcons = {
    award: <FaAward />,
    users: <FiUsers />,
    projects: <VscFolderLibrary />,
}

const revealOptions = {
    threshold: [0.1, 0.25, 0.5, 0.75, 1.0],
}

const About = () => {
    // Image and content slide in independently (from the side / from below).
    const image = useRevealOnScroll({
        ...revealOptions,
        animateTo: { x: 0, opacity: 1, transition: { duration: 1 } },
    })
    const content = useRevealOnScroll({
        ...revealOptions,
        animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
    })

    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <motion.div
                    className="about__me"
                    ref={image.ref}
                    initial={{ x: -100, opacity: 0 }}
                    animate={image.controls}
                >
                    <div className="about__me-image">
                        <img src={ME} alt="Me in my OSU Baseball Uniform" />
                    </div>
                    <div className="about__me-image">
                        <img src={MeProfessional} alt="Me at an ASOSU Work Event" />
                    </div>
                </motion.div>
                <motion.div
                    className="about__content"
                    ref={content.ref}
                    initial={{ y: 100, opacity: 0 }}
                    animate={content.controls}
                >
                    <div className="about__content">
                        <div className="about__cards">
                            {AboutData.cards.map(({ icon, title, value }) => (
                                <AboutCard
                                    key={title}
                                    icon={cardIcons[icon]}
                                    title={title}
                                >
                                    <small>{value}</small>
                                </AboutCard>
                            ))}
                        </div>
                        {AboutData.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}

                        <a href="#contact" className="btn btn-primary">
                            Let's Talk
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
