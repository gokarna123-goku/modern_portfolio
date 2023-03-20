import React from "react";
import "./styles.css";

import Header from "./components/header/Header";
import Nav from "./components/nav/nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
  );
}
