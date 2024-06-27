import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { IoFileTrayStackedOutline } from 'react-icons/io5'

// import { useState } from 'react'

const nav = () => {
    // const [activeNav, setActiveNav] = useState('#') 
    return (
        <nav>
            <a href="#"><AiOutlineHome /></a>
            <a href="#about"><AiOutlineUser /></a>
            <a href="#experience"><BiBook /></a>
            <a href="#services"><RiServiceLine /></a>
            <a href="#portfolio"><IoFileTrayStackedOutline /></a>
            <a href="#contact"><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default nav
