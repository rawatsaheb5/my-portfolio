import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificate from "./components/Certificate";


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <Certificate />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
