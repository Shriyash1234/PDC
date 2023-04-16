import React from "react";
import Header from "./header";
import Footer from './footer';
import './CSS/about.css';
// import { Container, Row, Col } from "react-bootstrap";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function About() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="aboutus">
                    <h1 className="abouttitle">Professional Development Council</h1>
                    <p>
                        IIT Gandhinagar Professional Development Cell (PDC) is a student-run body that aims to develop the skills of the students beyond academics and help them in their professional growth. PDC provides a platform for students to explore various career options, interact with professionals, and gain practical knowledge through workshops, internships, and industrial visits.
                        <br/><br/><br/>
                        Our goal is to provide a platform for students to explore their interests, develop their skills, and achieve their career goals. We are committed to helping our students grow both personally and professionally and preparing them for the challenges of the real world.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>    
    )
}

export default About
