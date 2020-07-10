import React from 'react'
import './whatdo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@'
 
const element = <FontAwesomeIcon icon={faCoffee} />


export default function Whatdo() {
    return (
        <React.Fragment>
            <div className="headline">
            <h1>WHAT I DO</h1>
            <h3>Things I'm skilled at and passionate about</h3>
            </div>
            <div className="skills">
            <ul>
                <li>
                 <span className="round"></span>
                 <h4>Web Application<br/>Development</h4> 
                 <h3>Fast, responsive and engaging apps that <br /> bring your ideas to life.</h3>  
                </li>
            </ul>
            </div>
    
        </React.Fragment>
    )
}
