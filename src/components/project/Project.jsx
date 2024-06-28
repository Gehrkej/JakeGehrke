import React from 'react'
import './project.css'

import IMG1 from '../../assets/DraftTimeGraphic.jpeg'
import IMG2 from '../../assets/ftpGraphic.png'
import IMG3 from '../../assets/GraphTesting.PNG'
import IMG4 from '../../assets/portfolio4.jpg' //Need to update this
import IMG5 from '../../assets/Priority_Queue.png'
import IMG6 from '../../assets/mstGraphic.png'
import IMG7 from '../../assets/GolfApp.png'
import IMG8 from '../../assets/FightTheNight.png'
import IMG9 from '../../assets/ASOSU.png'
import IMG10 from '../../assets/TarpaulinApi.png'

import { MdOutlineDateRange } from 'react-icons/md'
import { GiTechnoHeart } from 'react-icons/gi'
import { SiProgress } from 'react-icons/si'


import { FiUsers } from 'react-icons/fi'

import ProjectData from '../../data/projects.json'
import { useParams } from 'react-router-dom'

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

function Project() {

    const { id } = useParams()

    const projectIndex = ProjectData.data.findIndex(project => project.id == id)

    const project = ProjectData.data[projectIndex]

    return (
        <>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={images[project.image]} alt="project image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__content">
                        <h2>{project.title}</h2>

                        <div className="about__cards">
                            <article className="about__card">
                                <MdOutlineDateRange className="about__icon" />
                                <h5>Project Start</h5>
                                <small>{project.start}</small>
                            </article>
                            <article className="about__card">
                                <GiTechnoHeart className="about__icon" />
                                <h5>Technology</h5>
                                {project.technology.map((tech, index) => (
                                    <div key={index}>
                                        <small>{tech}</small>
                                        <br />
                                    </div>
                                ))}
                            </article>
                            <article className="about__card">
                                <SiProgress className="about__icon" />
                                <h5>Project Status</h5>
                                <small>{project.status}</small>
                            </article>
                        </div>
                        <p>
                            {project.description}
                        </p>
                        {project.github != '' ? <a href={project.github} className="btn btn-primary">
                            Visit Github Repo
                        </a> : <></>}
                        {project.live != '' ? <a href={project.live} className="btn">
                            Visit Project
                        </a> : <></>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
