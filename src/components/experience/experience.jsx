import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons'/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons'/>
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons'/>
                            <div>
                                <h4>Kotlin</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons'/>
                            <div>
                                <h4>Emotion</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>

                </div>
                {/* END OF FRONTEND */}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons'/>
                            <div>
                                <h4>Node JS</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons'/>
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons'/>
                            <div>
                                <h4>C/C++</h4>
                            <small className='text-light'>Experienced</small>
                            </div>                   
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons'/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default experience
