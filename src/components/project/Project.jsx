import React from 'react'
import '../about/about.css'
import './project.css'

import { MdOutlineDateRange } from 'react-icons/md'
import { GiTechnoHeart } from 'react-icons/gi'
import { SiProgress } from 'react-icons/si'

import ProjectData from '../../data/projects.json'
import projectImages from '../../data/projectImages'
import AboutCard from '../shared/AboutCard'
import { useParams } from 'react-router-dom'

function Project() {
    const { id } = useParams()

    const projectIndex = ProjectData.data.findIndex(
        (project) => project.id === parseInt(id)
    )

    const project = ProjectData.data[projectIndex]

    return (
        <>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img
                            src={projectImages[project.image]}
                            alt={project.title}
                        />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__content">
                        <h2>{project.title}</h2>

                        <div className="about__cards">
                            <AboutCard
                                icon={<MdOutlineDateRange />}
                                title="Project Start"
                            >
                                <small>{project.start}</small>
                            </AboutCard>
                            <AboutCard
                                icon={<GiTechnoHeart />}
                                title="Technology"
                            >
                                {project.technology.map((tech, index) => (
                                    <div key={index}>
                                        <small>{tech}</small>
                                        <br />
                                    </div>
                                ))}
                            </AboutCard>
                            <AboutCard
                                icon={<SiProgress />}
                                title="Project Status"
                            >
                                <small>{project.status}</small>
                            </AboutCard>
                        </div>
                        <p>{project.description}</p>
                        {project.highlights?.length > 0 && (
                            <ul className="project__highlights">
                                {project.highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        )}
                        {project.github !== '' ? (
                            <a
                                href={project.github}
                                className="btn btn-primary"
                            >
                                Visit Github Repo
                            </a>
                        ) : (
                            <></>
                        )}
                        {project.live !== '' ? (
                            <a href={project.live} className="btn">
                                Visit Project
                            </a>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
