import React from 'react'
import './experience.css'
import Section from '../shared/Section'
import SkillCategory from './SkillCategory'
import SkillsData from '../../data/skills.json'

const Experience = () => {
    return (
        <Section
            id="experience"
            eyebrow="What Skills I Have"
            title="My Experience"
            containerClassName="experience__container"
        >
            {SkillsData.data.map(({ category, className, items }) => (
                <SkillCategory
                    key={category}
                    category={category}
                    className={className}
                    items={items}
                />
            ))}
        </Section>
    )
}

export default Experience
