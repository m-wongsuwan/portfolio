import React, { useState } from 'react';
import home from '../images/home.png'
import folder from '../images/folder.png'
import about from '../images/about.png'
import contact from '../images/contact.png'

export default function Nav() {

    const [highlightNav, setHighlightNav] = useState('#top')

    const [scrollPercentRounded, setScrollPercentRounded] = React.useState(0)

    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        setScrollPercentRounded(Math.round(scrollPercent * 100))
    })
    
    return (
        <nav style={{top: `${scrollPercentRounded < 65 ? scrollPercentRounded : 65}vh`}}>
            <a href='#top' onClick={()=> setHighlightNav('#top')} ><img src={home} alt='home' className={highlightNav === '#top' ? 'active navIcon' : 'navIcon'}/></a>
            <a href='#aboutMe' onClick={()=> setHighlightNav('#aboutMe')}><img src={about} alt='about'  className={highlightNav === '#aboutMe' ? 'active navIcon' : 'navIcon'}/></a>
            <a href='#projects' onClick={()=> setHighlightNav('#projects')} ><img src={folder} alt='folder' className={highlightNav === '#projects' ? 'active navIcon' : 'navIcon'}/></a>
            <a href='#contact' onClick={()=> setHighlightNav('#contact')}><img src={contact} alt='home' className={highlightNav === '#contact' ? 'active navIcon' : 'navIcon'}/></a>
            <p>{scrollPercentRounded}</p>
            <p>{window.innerHeight}</p>
        </nav>
    )
}
