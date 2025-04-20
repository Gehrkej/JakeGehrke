import React, { useEffect, useRef } from 'react'
import './contact.css'
import { motion, useAnimation } from 'framer-motion'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'

const Contact = () => {
    const controls = useAnimation()
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1 },
                    })
                }
            },
            {
                threshold: [0.1, 0.25, 0.5, 0.75, 1.0],
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        // Cleanup the observer on component unmount
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [controls])

    return (
        <section id="contact">
            <h5>Want to Get in touch?</h5>
            <h2>Contact Me</h2>

            <motion.div
                className="container contact__container"
                ref={ref}
                initial={{ y: 100, opacity: 0 }}
                animate={controls}
            >
                <div className="contact__card">
                    <article className="contact__option">
                        <div className="contact__option-icon">
                            <MdEmail />
                        </div>
                        <h4>Email</h4>
                        <h5>development@jakegehrke.com</h5>
                        <a
                            href="mailto:development@jakegehrke.com"
                            className="contact__link"
                        >
                            Send a message
                        </a>
                    </article>

                    <article className="contact__option">
                        <div className="contact__option-icon">
                            <FaLinkedin />
                        </div>
                        <h4>LinkedIn</h4>
                        <h5>Jake Gehrke</h5>
                        <a
                            href="https://www.linkedin.com/in/jake-gehrke/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__link"
                        >
                            Connect with me
                        </a>
                    </article>

                    <article className="contact__option">
                        <div className="contact__option-icon">
                            <FaGithub />
                        </div>
                        <h4>GitHub</h4>
                        <h5>@gehrkej</h5>
                        <a
                            href="https://github.com/gehrkej"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__link"
                        >
                            View my work
                        </a>
                    </article>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact
