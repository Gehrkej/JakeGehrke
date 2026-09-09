import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

/**
 * One skill group (e.g. "Frontend Development") and its list of skills.
 */
const SkillCategory = ({ category, className, items }) => {
    return (
        <div className={className}>
            <h3>{category}</h3>
            <div className="experience__content">
                {items.map(({ name, level }) => (
                    <article className="experience__details" key={name}>
                        <BsPatchCheckFill className="experience__details-icons" />
                        <div>
                            <h4>{name}</h4>
                            <small className="text-light">{level}</small>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default SkillCategory
