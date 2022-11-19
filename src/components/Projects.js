import React from "react";
import notableImg from '../images/notable.png'

export default function Projects() {

    return (
        <div className='projects linkedTo' id='projects'>
        <h1>Projects</h1>

        <div className='reveal project1 projectRow'>
          <a href="https://notabledating.herokuapp.com" target="_blank" rel="noreferrer noopener">
            <div className='project1Img projImg'>
            </div>
          </a>
          <div className='project1Text projText'>
            <h2>Notable Dating App</h2>
            <p>Developed a space for singles to meet potential partners. Full user authentication functionality. Users are able to create an account, filter by age and gender preference, post notes on other profiles, and send messages.</p>
            <p className="skillsP">React, CSS, HTML, Javascript, MongoDB, Express, User Authentication</p>
            <div className="proj-buttons">
              <button className="codeBtn" >Code</button>
              <button className="demoBtn" >Live Demo</button>
            </div>
          </div>
        </div>

        <div className='reveal project2 projectRow'>
          <a href="http://shortdle.herokuapp.com/game" target="_blank" rel="noreferrer noopener">
            <div className='project2Img projImg'>
            </div>
          </a>
          <div className='project2Text projText'>
            <h2>Shortdle Web Game</h2>
            <p>Produced a Wordle-like app for users to enjoy. Javascript handles game logic and a responsive keyboard display that changes based on previous guesses. Complete CRUD functionality for posting, updating, reading, and deleting high scores.</p>
            <p className="skillsP">React, CSS, HTML, Javascript, CRUD, MongoDB, Express, Git</p>
            <div className="proj-buttons">
              <button className="codeBtn" >Code</button>
              <button className="demoBtn" >Live Demo</button>
            </div>
          </div>
        </div>

        <div className='reveal project3 projectRow'>
          <a href="https://themagichub.surge.sh/" target="_blank" rel="noreferrer noopener">
            <div className='project3Img projImg'>
            </div>

          </a>
          <div className='project3Text projText'>
            <h2>Magic: The Gathering Hub</h2>
            <p>Developed a Magic: The Gathering fan site that makes use of the Scryfall API. Users are able to search Magic's entire card catalogue to build decks for multiple formats that can be pasted directly into either the Magic Arena or Magic Online platforms, play a quiz game that tests their card recognition skills, and pull up random cards just for the heck of it. </p>
            <p className="skillsP">React, CSS, HTML, Javascript, APIs</p>
            <div className="proj-buttons">
              <button className="codeBtn" >Code</button>
              <button className="demoBtn" >Live Demo</button>
            </div>
          </div>
        </div>

      </div>
    )
}