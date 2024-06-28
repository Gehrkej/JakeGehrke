import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/DraftTimeGraphic.jpeg'
import IMG2 from '../../assets/ftpGraphic.png'
import IMG3 from '../../assets/GraphTesting.PNG'
import IMG4 from '../../assets/portfolio4.jpg' //Need to update this
import IMG5 from '../../assets/Priority_Queue.png'
import IMG6 from '../../assets/mstGraphic.png'
import IMG7 from '../../assets/GolfApp.png'
import IMG8 from '../../assets/FightTheNight.png'
import IMG9 from '../../assets/ASOSU.png'
import ProjectData from '../../data/projects.json'
import IMG10 from '../../assets/TarpaulinApi.png'

import { Link } from 'react-router-dom'

const images = {
    'DraftTimeGraphic.jpeg': IMG1,
    'ftpGraphic.png': IMG2,
    'GraphTesting.PNG': IMG3,
    'portfolio4.jpg': IMG4,
    'Priority_Queue.png': IMG5,
    'mstGraphic.png': IMG6,
    'GolfApp.png': IMG7,
    'FightTheNight.png': IMG8,
    'ASOSU.png': IMG9,
    'TarpaulinApi.png': IMG10,
}

const portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {ProjectData.data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key="id" className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={images[image]} alt={title} className="portfolio__image" />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <Link to={`/projects/${id}`}><a className="btn btn-primary" target="_blank">View
                                    Project </a></Link>
                            </div>

                        </article>
                    )
                })}
            </div>

        </section>
    )
}

export default portfolio
