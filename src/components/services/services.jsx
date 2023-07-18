import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__containter">
                <article className='service'>
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Custom Web Development: Tailor-made websites that perfectly match your unique business needs, ensuring a seamless user experience and optimal functionality.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Responsive Design: Creating websites that adapt to various devices and screen sizes, guaranteeing a consistent and user-friendly experience across desktops, tablets, and mobile devices.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>LFront-End Development: Crafting visually appealing and interactive user interfaces using modern web technologies such as HTML5, CSS3, and JavaScript.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Back-End Development: Building robust and scalable server-side applications and databases to power your website's functionality and handle complex business logic.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>E-commerce Solutions: Designing and developing secure and feature-rich online stores, integrating payment gateways, shopping carts, inventory management, and order processing systems.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>API Integration: Seamlessly connecting your website with third-party services, APIs, or software to enhance functionality, streamline processes, and provide a better user experience.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Website Maintenance and Support: Providing ongoing support, regular updates, security monitoring, and bug fixes to keep your website secure, up-to-date, and functioning smoothly.</p>
                        </li>

                    </ul>
                </article>
                {/* END OF UI/UX */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Business Consulting</h3>
                    </div>
                    <ul className='service__list'>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Business Planning and Strategy: Helping startups develop a comprehensive business plan, define their vision and mission, set achievable goals, and create a roadmap for success.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Market Research and Analysis: Conducting in-depth market research to identify target customers, understand industry trends, and assess market opportunities, enabling startups to make informed business decisions.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Competitive Analysis: Analyzing the competitive landscape to identify key competitors, assess their strengths and weaknesses, and develop strategies to differentiate and position the startup effectively.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Financial Planning and Forecasting: Assisting startups in creating financial models, projecting revenue streams, estimating expenses, and developing a sound financial strategy to ensure sustainable growth and profitability.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Branding and Marketing Strategy: Developing a strong brand identity and crafting effective marketing strategies to create awareness, attract target customers, and build a loyal customer base.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Technology and Digital Transformation: Advising startups on technology adoption, digital strategies, and leveraging innovative solutions to enhance operations, reach customers, and gain a competitive edge.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Funding and Investor Relations: Guiding startups through the fundraising process, helping them identify potential funding sources, preparing investment materials, and providing support in building relationships with investors.</p>
                        </li>

                    </ul>
                </article>
                {/* END OF WEB DEVELOPMENT */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Game Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Game Concept and Design: Assisting clients in conceptualizing game ideas, defining game mechanics, creating engaging narratives, and developing comprehensive game design documents.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Game Development and Programming: Building games for various platforms (PC, console, mobile) using industry-standard game engines like Unity or Unreal Engine, implementing game mechanics, physics, artificial intelligence, and user interfaces.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Game Prototyping: Rapidly prototyping game ideas to test mechanics, gameplay, and user experience, allowing for early feedback and iterative development.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Gameplay Programming: Implementing core gameplay systems, player controls, camera systems, user interfaces, and game progression mechanics to ensure an engaging and enjoyable gaming experience.</p>
                        </li>
                        <li >
                            <BiCheck className='service__list-icon' />
                            <p>Game Monetization and Publishing: Providing guidance on monetization strategies, including in-app purchases, advertising, or premium pricing models, and assisting with the publishing process across various platforms.</p>
                        </li>

                    </ul>
                </article>
                {/* END OF GAME DEVELOPMENT */}

            </div>
        </section>
    )
}

export default services
