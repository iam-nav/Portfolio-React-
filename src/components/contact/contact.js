import React from 'react'
import './contact.css'

export default function Contact() {
    return (
        <>  
        <div className="containers">
            <div className="layers">
            <div className="container_contact">
            <h1>CONTACT ME</h1>
            <p>I'd love to hear from you.</p>
            </div>
            <div className="contact_inputs">
            <input type="text" placeholder="YOUR NAME" className="name"></input>
            <div className="text_area">
            <textarea placeholder="YOUR MESSAGE" className="message" rows="9" cols="50" ></textarea><br />
            </div>
            <input type="text" placeholder="YOUR EMAIL" className="name"></input><br />
            <input type="text" placeholder="SUBJECT" className="name"></input><br />
            <button className="btns">SEND MESSAGE</button>
            </div>
            </div>
        </div>
    </>
    )
}
