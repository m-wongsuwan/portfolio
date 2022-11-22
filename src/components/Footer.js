import React, { useState } from "react";
import '../css/components/footer.css'

export default function Footer() {

    const [iconCreditsToggle, setIconCreditsToggle] = useState(false)

    return (
        <footer>
            <h1>Morgan Wongsuwan</h1>
            <div className="footer-links">
                <a href='#top'>Home</a>
                <a href='#aboutMe'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact-form'>Contact</a>
            </div>
            <button className="iconToggle" onClick={()=> setIconCreditsToggle(prev => !prev)}>{iconCreditsToggle ? "Hide" : "Show"} Icon Attributions</button>
            <div className="iconCredits" style={iconCreditsToggle ? {display: "block"} : {display: "none"}}>
                <a href="https://www.flaticon.com/free-icons/home" title="home icons" target="_blank" rel="noreferrer" >Home icons created by Aswell Studio - Flaticon</a>
                <br />
                <a href="https://www.flaticon.com/free-icons/folder" title="folder icons" target="_blank" rel="noreferrer" >Folder icons created by cahiwak - Flaticon</a>
                <br />
                <a href="https://www.flaticon.com/free-icons/user" title="user icons" target="_blank" rel="noreferrer" >User icons created by Freepik - Flaticon</a>
                <br />
                <a href="https://www.flaticon.com/free-icons/contact" title="contact icons" target="_blank" rel="noreferrer" >Contact icons created by Icongeek26 - Flaticon</a>
                <br />
                <a href="https://iconscout.com/icons/email" target="_blank" rel="noreferrer">Email Icon</a> by <a href="https://iconscout.com/contributors/irfansusanto98" target="_blank"  rel="noreferrer">Barudak Lier</a>
            </div>
        </footer>
    )
}