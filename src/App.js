import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

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
      <Nav />
      <Intro />
      <AboutMe />
      <Projects />
     

      <div className='contact linkedTo' id='contact'>
        <h1>Get in touch!</h1>
        <a href="mailto:morganwongsuwan@gmail.com">Get in touch</a>
      </div>

    <footer>
    <a href="https://www.flaticon.com/free-icons/home" title="home icons" target="_blank" rel="noreferrer" >Home icons created by Aswell Studio - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/folder" title="folder icons" target="_blank" rel="noreferrer" >Folder icons created by cahiwak - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/user" title="user icons" target="_blank" rel="noreferrer" >User icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/contact" title="contact icons" target="_blank" rel="noreferrer" >Contact icons created by Icongeek26 - Flaticon</a>
    <a href="https://iconscout.com/icons/email" target="_blank" rel="noreferrer">Email Icon</a> by <a href="https://iconscout.com/contributors/irfansusanto98" target="_blank">Barudak Lier</a>
    </footer>
    </div>
  );
}

export default App;
