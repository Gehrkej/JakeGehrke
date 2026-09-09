import React, { useState, useEffect, useCallback } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { IoFileTrayStackedOutline } from 'react-icons/io5'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'
import NavData from '../../data/navItems.json'

const navIcons = {
    home: <AiOutlineHome />,
    work: <MdWorkOutline />,
    user: <AiOutlineUser />,
    book: <BiBook />,
    portfolio: <IoFileTrayStackedOutline />,
    services: <RiServiceLine />,
    contact: <BiMessageSquareDetail />,
}

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
                    {NavData.data.map(({ href, icon, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => {
                                setActiveNav(href)
                                closeMobileMenu()
                            }}
                            className={activeNav === href ? 'active' : ''}
                        >
                            {navIcons[icon]}
                            <span>{label}</span>
                        </a>
                    ))}
                </div>
                <div className="nav__mobile-toggle" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    )
}

export default Nav
