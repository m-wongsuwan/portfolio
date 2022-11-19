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
    
    // function returnSideNavStyle() {
    //     return {top: `${scrollPercentRounded}vh` }
    //     // if (window.scrollY > window.innerHeight - 135) {
    //     //     return {bottom: "135"} 
    //     // } else {
    //     //     return {top: scrollPercentRounded}
    //     // }
    // }

    return (
        <>
        <nav className='sideNav' style={{top: `${scrollPercentRounded * ((window.innerHeight - 315)/window.innerHeight)}vh`}}>
        {/* <nav className='sideNav' style={returnSideNavStyle()}> */}
            <a href='#top' onClick={()=> setHighlightNav('#top')} ><img src={home} alt='home' className={highlightNav === '#top' ? 'active navIcon' : 'navIcon'}/></a>
            <a href='#aboutMe' onClick={()=> setHighlightNav('#aboutMe')}><img src={about} alt='about'  className={highlightNav === '#aboutMe' ? 'active navIcon' : 'navIcon'}/></a>
            <a href='#projects' onClick={()=> setHighlightNav('#projects')} ><img src={folder} alt='folder' className={highlightNav === '#projects' ? 'active navIcon' : 'navIcon'}/></a>
            <a href='#contact' onClick={()=> setHighlightNav('#contact')}><img src={contact} alt='home' className={highlightNav === '#contact' ? 'active navIcon' : 'navIcon'}/></a>
            {/* <p>{scrollPercentRounded}</p>
            <p>{window.innerHeight}</p>
            <p>{window.scrollY}</p> */}
        </nav>
        <nav className='topNav'>
            <a href='#top' onClick={()=> setHighlightNav('#top')} ><img src={home} alt='home' className={highlightNav === '#top' ? 'active navIcon' : 'navIcon'}/></a>
            <a href='#aboutMe' onClick={()=> setHighlightNav('#aboutMe')}><img src={about} alt='about'  className={highlightNav === '#aboutMe' ? 'active navIcon' : 'navIcon'}/></a>
            <a href='#projects' onClick={()=> setHighlightNav('#projects')} ><img src={folder} alt='folder' className={highlightNav === '#projects' ? 'active navIcon' : 'navIcon'}/></a>
            <a href='#contact' onClick={()=> setHighlightNav('#contact')}><img src={contact} alt='home' className={highlightNav === '#contact' ? 'active navIcon' : 'navIcon'}/></a>
            <p>{scrollPercentRounded}</p>
            <p>{window.innerHeight}</p>
            
        </nav>
        </>
    )
}
