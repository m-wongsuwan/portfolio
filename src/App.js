import './App.css';

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
      <h1>Morgan Wongsuwan</h1>
      <div className='App--gridContainer'>
        <div className='a gridCell'>
          <div className='imgContainer'>
          {/* <img className='portrait' src={portrait} alt="Portrait of Morgan Wongsuwan"/> */}

        </div>
        </div>
        <div className='b gridCell'>
        </div>
        <div className='c gridCell'>
        </div>
        <div className='d gridCell'>

        </div>
        <div className='e gridCell'>

        </div>
        <div className='f reveal gridCell shadow'>

        </div>
        <div className='g reveal gridCell'>

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
        <div className='q gridCell'>
        </div>
      </div>
    </div>
  );
}

export default App;
