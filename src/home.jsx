import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Experiece from "./components/experience/experience";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
const Home = () => {
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
  );
};

export default Home;
