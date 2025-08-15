import React from 'react';
import './aboutme.css';
import headshot from '../../assets/headshot.jpg';

function Aboutme () {
    return (
        <section className="aboutMe" id="aboutME"> 
            <div className="text">
                <h2>Hi, I am Georgina!</h2>
                <p>I am a 3rd Year student taking BS in Computer Science from De La Salle Lipa. Taking my time to learn and improve my skills! Striving to become a UI/UX Engineer. </p>

                <div className="links">
                    <a href="#projects">
                        <i className="fa-solid fa-laptop-code"></i>
                        <span>Projects</span>
                    </a>

                    <a href="#contact">
                        <i className="fa-solid fa-envelope"></i>
                        <span>Contact</span>
                    </a>
                </div>
            </div>

            <div className="picture">
                <img src={headshot} className="headShot" alt="id" />
            </div>
        </section>
    )
}

export default Aboutme;