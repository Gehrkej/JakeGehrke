import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { IoFileTrayStackedOutline } from 'react-icons/io5'
import { Tooltip as ReactTooltip } from "react-tooltip";


// import { useState } from 'react'

const nav = () => {
    // const [activeNav, setActiveNav] = useState('#') 
    return (
         <>
             <nav>
            <a href="#home" data-tooltip-id='home_tooltip'><AiOutlineHome /></a>
            <a href="#about" data-tooltip-id='about_tooltip'><AiOutlineUser /></a>
            <a href="#experience" data-tooltip-id='experience_tooltip'><BiBook /></a>
            <a href="#portfolio" data-tooltip-id='portfolio_tooltip'><IoFileTrayStackedOutline /></a>
            <a href="#services" data-tooltip-id='services_tooltip'><RiServiceLine /></a>
            <a href="#contact" data-tooltip-id='contact_tooltip'><BiMessageSquareDetail /></a>
        </nav>
            <ReactTooltip
                id='home_tooltip'
                place="top"
                content="Home" />
             <ReactTooltip
                 id='about_tooltip'
                 place="top"
                 content="About" />
             <ReactTooltip
                 id='experience_tooltip'
                 place="top"
                 content="Experience" />
             <ReactTooltip
                 id='portfolio_tooltip'
                 place="top"
                 content="Portfolio" />
             <ReactTooltip
                 id='services_tooltip'
                 place="top"
                 content="Services" />
             <ReactTooltip
                 id='contact_tooltip'
                 place="top"
                 content="Contact" />
             </>
    )
}

export default nav
