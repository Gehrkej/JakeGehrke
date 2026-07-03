import React from 'react'
import { BiCheck } from 'react-icons/bi'

/**
 * One service offering card with its bulleted list of deliverables.
 */
const ServiceCard = ({ title, items }) => {
    return (
        <article className="service">
            <div className="service__head">
                <h3>{title}</h3>
            </div>
            <ul className="service__list">
                {items.map((item, index) => (
                    <li key={index}>
                        <BiCheck className="service__list-icon" />
                        <p>{item}</p>
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default ServiceCard
