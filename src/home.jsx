import React, { useEffect } from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experiece from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
        window.scrollTo({
            top: portfolioSection.offsetTop,
            behavior: 'smooth',
        })
    }
}

const Home = () => {

    useEffect(() => {
        const hashValue = window.location.hash
        const valueAfterHash = hashValue.slice(1) // Removes the '#'
        if (valueAfterHash == 'portfolio') {

            scrollToPortfolio()
        }
        console.log(valueAfterHash) // Output: "portfolio"
    }, [])

    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experiece />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
