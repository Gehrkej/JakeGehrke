import React from 'react'
import './header.css'
import { motion } from 'framer-motion';


import CTA from './CTA'
import ME from '../../assets/me-headshot.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
    return (

        <header id="home">

            <div className="container header__container">
                <motion.div initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}>
                    <h5>Hello I'm</h5>
                    <h1>Jake Gehrke</h1>
                    <h5 className="text-light">Fullstack Developer</h5>
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                            animate={{  opacity: 1 }}
                            transition={{ duration: 3 }}>
                    <CTA />
                    <HeaderSocials />
                </motion.div>

                <motion.div className="me"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}>
                    <img src={ME} alt="me" />
                </motion.div>
            </div>


            <a href="#contact" className="scroll__down">Scroll Down</a>

        </header>
    )
}

export default header
