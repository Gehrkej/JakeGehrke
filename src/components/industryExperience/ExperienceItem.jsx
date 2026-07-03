import React from 'react'
import { BsBriefcase } from 'react-icons/bs'

/**
 * One job entry in the Industry Experience timeline.
 */
const ExperienceItem = ({ title, org, dates, bullets }) => {
    return (
        <article className="industry-experience__item">
            <div className="industry-experience__icon">
                <BsBriefcase />
            </div>
            <div className="industry-experience__content">
                <div>
                    <h3>{title}</h3>
                    <h4>{org}</h4>
                    <small>{dates}</small>
                    <ul>
                        {bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default ExperienceItem
