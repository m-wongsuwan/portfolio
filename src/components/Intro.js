import React from "react";
import portrait from '../images/portrait.JPG'
import hitgub from '../images/hitgub.svg'
import linkedin from '../images/linkedin.svg'
import contact from '../images/email.svg'

export default function Intro() {

    return (
        <div className='bigIntro linkedTo' id='home' style={{height: window.innerHeight, marginTop: window.innerHeight * .2}}>
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
                        <a href='mailto:morganwongsuwan@gmail.com'><img className="introIcon" src={contact} alt="linkedIn icon" /></a>
                    </div>
                </div>
                </div>
            </div>
      </div>
    )
}