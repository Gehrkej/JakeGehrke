import React from 'react'
import './industryExperience.css'
import Section from '../shared/Section'
import ExperienceItem from './ExperienceItem'
import ExperienceData from '../../data/experience.json'

const IndustryExperience = () => {
    return (
        <Section
            id="industry-experience"
            eyebrow="My Professional Journey"
            title="Industry Experience"
            containerClassName="industry-experience__container"
        >
            <div className="industry-experience__timeline">
                {ExperienceData.data.map(item => (
                    <ExperienceItem key={item.org} {...item} />
                ))}
            </div>
        </Section>
    )
}

export default IndustryExperience
