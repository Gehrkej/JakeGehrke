import React from 'react'

/**
 * The small icon + label + value card used in the About section and on project
 * detail pages (shares the `about__card` styling).
 *
 *   <AboutCard icon={<FaAward />} title="Experience">Bachelors Degree</AboutCard>
 */
const AboutCard = ({ icon, title, children }) => {
    return (
        <article className="about__card">
            {React.cloneElement(icon, { className: 'about__icon' })}
            <h5>{title}</h5>
            {children}
        </article>
    )
}

export default AboutCard
