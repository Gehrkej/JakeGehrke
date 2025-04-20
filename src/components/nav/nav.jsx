import React, { useState, useEffect, useCallback } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { IoFileTrayStackedOutline } from 'react-icons/io5'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    const [scrolled, setScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleScroll = useCallback(() => {
        const isScrolled = window.scrollY > 50
        if (isScrolled !== scrolled) {
            setScrolled(isScrolled)
        }
    }, [scrolled])

    useEffect(() => {
        let timeoutId
        const debouncedScroll = () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(handleScroll, 50)
        }

        window.addEventListener('scroll', debouncedScroll)
        return () => {
            window.removeEventListener('scroll', debouncedScroll)
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [handleScroll])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <div className="nav__container">
                <div className="nav__logo">
                    <a
                        href="#home"
                        onClick={() => setActiveNav('#home')}
                        className={activeNav === '#home' ? 'active' : ''}
                    >
                        <img
                            src="/JG_Logo.png"
                            alt="JG Logo"
                            className="nav__logo-img"
                        />
                    </a>
                </div>
                <div
                    className={`nav__links ${
                        isMobileMenuOpen ? 'mobile-menu-open' : ''
                    }`}
                >
                    <a
                        href="#home"
                        onClick={() => {
                            setActiveNav('#home')
                            closeMobileMenu()
                        }}
                        className={activeNav === '#home' ? 'active' : ''}
                    >
                        <AiOutlineHome />
                        <span>Home</span>
                    </a>
                    <a
                        href="#industry-experience"
                        onClick={() => {
                            setActiveNav('#industry-experience')
                            closeMobileMenu()
                        }}
                        className={
                            activeNav === '#industry-experience' ? 'active' : ''
                        }
                    >
                        <MdWorkOutline />
                        <span>Industry</span>
                    </a>
                    <a
                        href="#about"
                        onClick={() => {
                            setActiveNav('#about')
                            closeMobileMenu()
                        }}
                        className={activeNav === '#about' ? 'active' : ''}
                    >
                        <AiOutlineUser />
                        <span>About</span>
                    </a>
                    <a
                        href="#experience"
                        onClick={() => {
                            setActiveNav('#experience')
                            closeMobileMenu()
                        }}
                        className={activeNav === '#experience' ? 'active' : ''}
                    >
                        <BiBook />
                        <span>Experience</span>
                    </a>
                    <a
                        href="#portfolio"
                        onClick={() => {
                            setActiveNav('#portfolio')
                            closeMobileMenu()
                        }}
                        className={activeNav === '#portfolio' ? 'active' : ''}
                    >
                        <IoFileTrayStackedOutline />
                        <span>Portfolio</span>
                    </a>
                    <a
                        href="#services"
                        onClick={() => {
                            setActiveNav('#services')
                            closeMobileMenu()
                        }}
                        className={activeNav === '#services' ? 'active' : ''}
                    >
                        <RiServiceLine />
                        <span>Services</span>
                    </a>
                    <a
                        href="#contact"
                        onClick={() => {
                            setActiveNav('#contact')
                            closeMobileMenu()
                        }}
                        className={activeNav === '#contact' ? 'active' : ''}
                    >
                        <BiMessageSquareDetail />
                        <span>Contact</span>
                    </a>
                </div>
                <div className="nav__mobile-toggle" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    )
}

export default Nav
