import React from 'react'

/**
 * One contact method card (email / LinkedIn / GitHub).
 * `external` adds the target/rel attributes used for the off-site links.
 */
const ContactOption = ({ icon, label, value, href, cta, external }) => {
    const linkProps = external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {}

    return (
        <article className="contact__option">
            <div className="contact__option-icon">{icon}</div>
            <h4>{label}</h4>
            <h5>{value}</h5>
            <a href={href} className="contact__link" {...linkProps}>
                {cta}
            </a>
        </article>
    )
}

export default ContactOption
