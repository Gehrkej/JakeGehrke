import React from 'react'
import './portfolio.css'
import { Link } from 'react-router-dom'
import Section from '../shared/Section'
import ProjectData from '../../data/projects.json'
import projectImages from '../../data/projectImages'

const Portfolio = () => {
    return (
        <Section
            id="portfolio"
            eyebrow="My Recent Work"
            title="Portfolio"
            containerClassName="portfolio__container"
        >
            {ProjectData.data.map(({ id, image, title, description }) => {
                return (
                    <article key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img
                                src={projectImages[image]}
                                alt={title}
                                className="portfolio__image"
                            />
                        </div>
                        <h3>{title}</h3>
                        <small className="portfolio__item-description">{`${description.slice(
                            0,
                            100
                        )}...`}</small>
                        <div className="portfolio__item-cta">
                            <Link to={`/projects/${id}`}>
                                <div className="btn btn-primary" target="_blank">
                                    View Project
                                </div>
                            </Link>
                        </div>
                    </article>
                )
            })}
        </Section>
    )
}

export default Portfolio
