import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <React.Fragment>
            <div className="background">
                <div className="layer">
                    <div className="navbar">
                        <ul>
                            <span className="Name">Navjot Singh</span>
                                <li><a href="#services">WHAT I DO</a></li>
                                <li><a href="#portfolio">PORTFOLIO</a></li>
                                <li><a href="#about">ABOUT</a></li>
                                <li><a href="#blog">BlOG</a></li>
                                <li><a href="#contact">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className="INFORMATION">
                        <span className="fullstack">Full-Stack</span><br />
                        <span className="ndoejs_and_react">NODE JS | REACT JS</span><br />
                        <span className="developer">developer</span>  
                    </div>
                    <button className="btn">TELL ME MORE</button>
                </div>
            </div>
</React.Fragment>
            
    )
}
