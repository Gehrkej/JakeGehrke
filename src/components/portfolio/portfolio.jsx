import React, { useEffect, useRef } from 'react'
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
import { motion, useAnimation } from 'framer-motion';

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

const Portfolio = () => {
    const controls = useAnimation();
    const ref = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({
                        opacity: 1,
                        transition: { duration: 1.5 }
                    });
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup the observer on component unmount
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);




    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <motion.div className="container portfolio__container"
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={controls}>
                {ProjectData.data.map(({ id, image, title, github, demo, description }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={images[image]} alt={title} className="portfolio__image" />
                            </div>
                            <h3>{title}</h3>
                            <small className="portfolio__item-description">{`${description.slice(0, 100)}...`}</small>
                            <div className="portfolio__item-cta">
                                <Link to={`/projects/${id}`}>
                                    <div className="btn btn-primary" target="_blank">View
                                        Project
                                    </div>
                                </Link>
                            </div>

                        </article>
                    )
                })}
            </motion.div>

        </section>
    )
}

export default Portfolio
