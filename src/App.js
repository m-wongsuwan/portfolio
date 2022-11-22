import React from 'react';
import './css/App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal)

  return (
    <div className="App" id='App'>
      <div className='app-nonFooter' >
        <Nav />
        <Intro />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
      <Footer />

    </div>
  );
}

export default App;
