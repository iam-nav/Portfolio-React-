import React from 'react'
import './whatdo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode,faCogs,faDatabase} from '@fortawesome/free-solid-svg-icons'


export default function Whatdo() {
    return (
        <React.Fragment>
        <div className="container">
            <div className="headline">
            <h1>WHAT I DO</h1>
            <h3>Things I'm skilled at and passionate about</h3>
            </div>

            <div className="skills">
            <ul>
                 <li>
                    <div className="round"><FontAwesomeIcon className="code" icon={faCode} /></div>
                        <h4>Web Application<br/> <span>Development</span></h4> 
                        <h3 id="web">Fast, responsive and engaging apps that <br />
                        <span id="idea">bring your ideas to life.</span></h3>  
                </li>
                <li>
                    <div className="round"><FontAwesomeIcon className="code" icon={faCogs} /></div>
                        <h4>API Integration & <br/> <span>Development</span></h4> 
                        <h3 id="REST">REST and SOAP API integration.<br />
                            <span id="development">REST API development with Node.js bring</span><br />
                            <span id="ideas"> your ideas to life.</span></h3>  
                </li>
                <li>
                    <div className="round"><FontAwesomeIcon className="code" icon={faDatabase} /></div>
                        <h4>Database Design<br/> </h4>
                        <h3 id="database">Database architectures in MongoDB and MySQL<br /><span id="mysql">  always aiming for performance scale and</span><br /><span id="scale"> stability.</span></h3>  
                </li>
            </ul>
        </div>
    </div>
        </React.Fragment>
    )
}
