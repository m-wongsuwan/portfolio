import React from "react";
import portrait from '../images/portrait.JPG'
import hitgub from '../images/hitgub.svg'
import linkedin from '../images/linkedin.svg'

export default function Intro() {

    return (
        <div className='bigIntro vertical-align linkedTo' id='home' style={{height: window.innerHeight}}>
            <div>
                <div className='introGrid'>

                <div className='introRightTop'>
                    <img className='portrait' src={portrait} alt='Portrait of developer Morgan Wongsuwan'/>
                </div>
                <div className='introLeftBottom '>
                    <h1>Hello, I'm Morgan Wongsuwan</h1>
                    <h2>I'm a certified full stack web developer open to employment inquiries.</h2>
                    <div className='links'>
                    <a href='https://github.com/m-wongsuwan/'><img className="introIcon" src={hitgub} alt='github icon' /></a>
                    <a href='https://www.linkedin.com/in/m-wongsuwan/'><img className="introIcon" src={linkedin} alt="linkedIn icon" /></a>
                    </div>
                </div>
                </div>
            </div>
      </div>
    )
}