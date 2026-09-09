import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Section from '../shared/Section'
import ContactOption from './ContactOption'
import socials from '../../data/socials.json'

const contactMethods = [
    {
        icon: <MdEmail />,
        label: 'Email',
        value: socials.email.address,
        href: `mailto:${socials.email.address}`,
        cta: 'Send a message',
    },
    {
        icon: <FaLinkedin />,
        label: 'LinkedIn',
        value: socials.linkedin.handle,
        href: socials.linkedin.url,
        cta: 'Connect with me',
        external: true,
    },
    {
        icon: <FaGithub />,
        label: 'GitHub',
        value: socials.github.handle,
        href: socials.github.url,
        cta: 'View my work',
        external: true,
    },
]

const Contact = () => {
    return (
        <Section
            id="contact"
            eyebrow="Want to Get in touch?"
            title="Contact Me"
            containerClassName="contact__container"
            initial={{ y: 100, opacity: 0 }}
            animateTo={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            threshold={[0.1, 0.25, 0.5, 0.75, 1.0]}
        >
            <div className="contact__card">
                {contactMethods.map(method => (
                    <ContactOption key={method.label} {...method} />
                ))}
            </div>
        </Section>
    )
}

export default Contact
