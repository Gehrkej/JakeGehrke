import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__containter">
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>UI/UX Design: Utilizing Figma to create intuitive and visually appealing user interfaces
                                and experiences, ensuring that your website not only looks great but is also
                                user-friendly and easy to navigate.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Custom Web Development: Tailor-made websites that perfectly match your unique business
                                needs, ensuring a seamless user experience and optimal functionality.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Responsive Design: Creating websites that adapt to various devices and screen sizes,
                                guaranteeing a consistent and user-friendly experience across desktops, tablets, and
                                mobile devices.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Front-End Development: Crafting visually appealing and interactive user interfaces using
                                modern web technologies such as HTML5, CSS3, and JavaScript.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Back-End Development: Building robust and scalable server-side applications and databases
                                to power your website's functionality and handle complex business logic.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>API Integration: Seamlessly connecting your website with third-party services, APIs, or
                                software to enhance functionality, streamline processes, and provide a better user
                                experience.</p>
                        </li>

                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Website Maintenance and Support: Providing ongoing support, regular updates, security
                                monitoring, and bug fixes to keep your website secure, up-to-date, and functioning
                                smoothly.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Website Monetization and Publishing: Offering guidance on monetization strategies, such
                                as advertising, subscription models, or e-commerce solutions, and assisting with the
                                publishing and promotion process to maximize your website's revenue potential.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI/UX */}
                <article className="service">
                    <div className="service__head">
                        <h3>Mobile Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>UI/UX Design: Utilizing Figma to create intuitive and visually appealing user interfaces
                                and experiences, ensuring that your mobile app not only looks great but is also
                                user-friendly and easy to navigate.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Custom Mobile App Development: Tailor-made mobile applications that perfectly match your
                                unique business needs, ensuring a seamless user experience and optimal
                                functionality.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Cross-Platform Compatibility: Developing mobile apps that run smoothly on both iOS and
                                Android devices, providing a consistent and reliable experience across different
                                platforms.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Front-End Development: Crafting visually appealing and interactive user interfaces using
                                modern technologies such as React Native and Flutter.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Back-End Development: Building robust and scalable server-side applications and databases
                                to power your mobile app's functionality and handle complex business logic.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>API Integration: Seamlessly connecting your mobile app with third-party services, APIs,
                                or software to enhance functionality, streamline processes, and provide a better user
                                experience.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>App Maintenance and Support: Providing ongoing support, regular updates, security
                                monitoring, and bug fixes to keep your mobile app secure, up-to-date, and functioning
                                smoothly.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>App Monetization and Publishing: Providing guidance on monetization strategies, including
                                in-app purchases, advertising, or premium pricing models, and assisting with the
                                publishing process across various platforms.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF MOBILE DEVELOPMENT */}
                <article className="service">
                    <div className="service__head">
                        <h3>Game Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Game Concept and Design: Assisting clients in conceptualizing game ideas, defining game
                                mechanics, creating engaging narratives, and developing comprehensive game design
                                documents.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Game Development and Programming: Building games for various platforms (PC, console,
                                mobile) using industry-standard game engines like Unity or Unreal Engine, implementing
                                game mechanics, physics, artificial intelligence, and user interfaces.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Game Prototyping: Rapidly prototyping game ideas to test mechanics, gameplay, and user
                                experience, allowing for early feedback and iterative development.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Gameplay Programming: Implementing core gameplay systems, player controls, camera
                                systems, user interfaces, and game progression mechanics to ensure an engaging and
                                enjoyable gaming experience.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Game Monetization and Publishing: Providing guidance on monetization strategies,
                                including in-app purchases, advertising, or premium pricing models, and assisting with
                                the publishing process across various platforms.</p>
                        </li>

                    </ul>
                </article>
                {/* END OF GAME DEVELOPMENT */}

            </div>
        </section>
    )
}

export default services
