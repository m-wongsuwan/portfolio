import './App.css';
import portrait from './images/portrait.JPG'

function App() {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal)

  return (
    <div className="App">
      <div className='App--gridContainer'>
        <div className='a gridCell'>
          <h1>Morgan Wongsuwan</h1>
          <div className='imgContainer'>
          <img className='portrait' src={portrait} alt="Portrait of Morgan Wongsuwan"/>
          <p>Building a better world one line of code at a time.</p>
          </div>
        </div>
        <a href='#projects' className='gridCell b'>
          <div className=''>
            <h3>Jump to</h3>
            <h1>Projects</h1>
          </div>
        </a>
        <div className='c gridCell'>
          <h3>Contact</h3>
          <h4>mwongsuwan@gmail.com</h4>
          <h4>801.833.5016</h4>
          <h4>github.com/m-wongsuwan</h4>
        </div>
        <div className='d gridCell'>

        </div>
        <div className='e gridCell aboutMe'>
          <p>Full Stack Devloper using their skills to make the world a better place for all.</p>
        </div>
        <div className='h skills reveal gridCell'>
          <h1>Skills</h1>
        </div>
        <div className='i skill reveal gridCell'>
          <h1 className='skillText'>React</h1>
        </div>
        <div className='j skill reveal gridCell'>
          <h1 className='skillText'>JavaScript</h1>
        </div>
        <div className='k skill reveal gridCell'>
          <h1 className='skillText'>GitHub</h1>
        </div>
        <div className='l skill reveal gridCell'>
          <h1 className='skillText'>Git</h1>
        </div>
        <div className='m skill reveal gridCell'>
          <h1 className='skillText'>Node.js</h1>
        </div>
        <div className='n skill reveal gridCell'>
          <h1 className='skillText'>CSS</h1>
        </div>
        <div className='o skill reveal gridCell'>
          <h1 className='skillText'>American Sign Language</h1>
        </div>
        <div className='p skill reveal gridCell'>
          <h1 className='skillText'>Teaching Experience</h1>
        </div>
        <div className='q gridCell' id='projects'>
          <h1>Projects</h1>
        </div>
        <div className='f reveal gridCell shadow projPic'>

        </div>
        <div className='g reveal gridCell projExplanation'>
          <h1>Magic: The Gathering Hub</h1>
          <p>Developed an app to allow Magic: The Gathering Players to search for cards, create decks, and test their MTG knowledge.</p>
          <p className='projSkills'>React, JavaScript, HTML, CSS, Node.js, Git</p>
          <button>GitHub</button>
          <button>Live Demo</button>
        </div>
        <div className='s reveal gridCell shadow projPic'>

        </div>
        <div className='r reveal gridCell projExplanation'>
          <h1>Magic: The Gathering Hub</h1>
          <p>Developed an app to allow Magic: The Gathering Players to search for cards, create decks, and test their MTG knowledge.</p>
          <p className='projSkills'>React, JavaScript, HTML, CSS, Node.js, Git</p>
          <button>GitHub</button>
          <button>Live Demo</button>
        </div>

      </div>
    </div>
  );
}

export default App;
