import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/DraftTimeGraphic.jpeg'
import IMG2 from '../../assets/ftpGraphic.png'
import IMG3 from '../../assets/portfolio3.jpg' //Need to update this
import IMG4 from '../../assets/portfolio4.jpg' //Need to update this
import IMG5 from '../../assets/Priority_Queue.png'
import IMG6 from '../../assets/mstGraphic.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'DraftTime - Web App',
        github: 'https//github.com',
        demo: 'https//github.com',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Python FTP Server',
        github: 'https//github.com',
        demo: 'https//github.com',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Weather Mobile Application',
        github: 'https//github.com',
        demo: 'https//github.com',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Testing Suite for a Graph Creation Application',
        github: 'https//github.com',
        demo: 'https//github.com',
    },
    {
        id: 5,
        image: IMG5,
        title: 'Priority Queue Implimentation',
        github: 'https//github.com',
        demo: 'https//github.com',
    },
    {
        id: 6,
        image: IMG6,
        title: 'MST Implimentation',
        github: 'https//github.com',
        demo: 'https//github.com',
    }
]

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">

                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key='id' className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default portfolio
