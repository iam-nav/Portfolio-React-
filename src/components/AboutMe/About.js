import React from 'react'
import './about.css'
import profile from '../img/myprofile.jpeg'
import Html from '../img/html.png'
import bootstrap from '../img/bootstrap.png'
import react from '../img/react.png'
import Express from '../img/express.png'
import Heroku from '../img/heroku.png'
import javascript from '../img/javascript.png'
import redux from '../img/redux.png'
import Mongo from '../img/mongo.jpg'
import Css from '../img/css.png'
import Mysql from '../img/mysql.jpg'
import Node from '../img/node.png'
import Npm from '../img/npm.png'

import { GithubFilled,TwitterOutlined,LinkedinOutlined } from '@ant-design/icons';
export default function About() {
    return (
        <>
        <div>
            <div className="about">
                <h1>ABOUT ME</h1>
                <h4>Let's break the ice a little.</h4>
            </div>
                <div className="profile_container">
            <img src={profile} className="profile" alt="profile"></img>
                </div>
            <div className="Name_skills">
                <h3>Navjot Singh</h3>
                <h4>React | Redux | Node JS | Express | Mongo DB</h4>
            </div>
            <div className="social_plugins">
            <ul>
                <li><GithubFilled className="github" /></li>
                <li><TwitterOutlined className="github" /></li>
                <li><LinkedinOutlined className="github" /></li>
            </ul>
            </div><br /><br />
                <div className="about_us_container">
                    <p>Hi there! I am a Fullstack developer specialized in React and Node.js.<br />
                        <div id="span_one">I've always had a passion for technology and product development - even before becoming a <br /></div>
                        <div id="span"> developer, having worn many hats in my career between business development, sales and product <br /></div>
                        <div id="span">management for tech giants and startups.I use my experience to be more than just a coder, connecting business<br /></div>
                        <div id="span_two" > requirements with modern technology.</div>
                        <div id="span">I have 4+ years of development experience building fullstack pro ducts from scratch, developing and <br /></div>
                        <div id="span">integrating APIs, working with a variety of databases.</div>
                        <div id="span_one">Below you'll find a list of some of my skills:</div>
                    </p>
                </div>
                <div className="frontend_container">
                    <h2>FRONT-END</h2>
                    <div className="skills_frontend">
                        <img src={Html} id="html" alt="html"></img>
                        <img src={Css} id="css" alt="html"></img>
                        <img src={javascript} id="js" alt="js"></img>
                        <img src={bootstrap} id="bootstrap" alt="bootstrap"></img><br />
                        <img src={react} id="react" alt="react" ></img>
                        <img src={redux} id="redux" alt="react" ></img>
                    </div>
                </div>
                <div className="server">
                <h2>SERVER</h2>
                        <img src={Node} id="html" alt="html"></img>
                        <img src={Express} id="css" alt="html"></img>
                        <img src={Npm} id="js" alt="js"></img>
                </div>
                <div className="server">
                <h2>DATABASES</h2>
                        <img src={Mongo} id="mongo" alt="html"></img>
                        <img src={Mysql} id="mysql" alt="html"></img>
                </div>
                <div className="server">
                <h2>CLOUD</h2>
                        <img src={Heroku} id="heroku" alt="html"></img>
                </div>

            </div>
        </>
    )
}
