import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./CSS/pmaterial.css";
import {Link } from "react-router-dom";

function Pmaterial(){
    return(
        <div className="Placement-Material">
            <Header/>
                <section className="Prep-Mat">
                    <h1 className="prep-heading">Prep MAT</h1>
                    <h3 className="description">This Prep material consists of a comprehensive set of resources that can help students prepare for various aspects of the job placement process. This includes study materials, mock tests, and interview tips that can assist students in enhancing their knowledge, skills, and confidence in various areas of interest.</h3>
                    <h3 className="description">With this Prep material, students can gain a competitive edge in the job market and increase their chances of landing their dream job. These resources are carefully curated to help students develop their professional skills, hone their interviewing abilities, and gain a better understanding of the requirements of various industries.</h3>
                    <Link target="_blank" to="https://docs.google.com/spreadsheets/d/17pJHhCqJD4KutJ1j7gN4mP3La_lGWE3Ku3U9KA44AuM/edit#gid=374165397"><div className="gsheet">Spreadsheet</div></Link>
                </section>
                <section className="blogs">
                    <h1 className="blog-heading">Blogs</h1>
                    <div className="blog">
                        <div className="rectangle2">
                            <div className="blog-div">
                                <img className='blog-img' src={require('./Images/interview.png')}/>
                                <h3 className="blog-desc">How to prepare for interviews</h3>
                                <h4 className="blog-person">Khushwant Singh</h4>
                            </div>
                        </div>
                        <div className="rectangle2">
                            <div className="blog-div">
                                <img className='blog-img' src={require('./Images/CAT.png')}/>
                                <h3 className="blog-desc">CAT exam</h3>
                                <h4 className="blog-person">Vikram Seth</h4>
                            </div>
                        </div>
                        <div className="rectangle2">
                            <div className="blog-div">
                                <img className='blog-img' src={require('./Images/UPSC.jpg')}/>
                                <h3 className="blog-desc">UPSC exam</h3>
                                <h4 className="blog-person">Jhumpa Lahiri</h4>
                            </div>
                        </div>
                        <div className="rectangle2">
                            <div className="blog-div">
                                <img className='blog-img' src={require('./Images/TOFEL.jpeg')}/>
                                <h3 className="blog-desc">TOFEL exam</h3>
                                <h4 className="blog-person">George Orwell</h4>
                            </div>
                        </div>
                        <div className="rectangle2">
                            <div className="blog-div">
                                <img className='blog-img' src={require('./Images/GRE.jpeg')}/>
                                <h3 className="blog-desc">GRE exam</h3>
                                <h4 className="blog-person">R. K. Narayan</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="Talks">
                    <h1 className="prep-heading">Placement Talks</h1>
                    <div className="videos">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/x3VDjgSQFCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/EAjxNp1lunI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fjauNI_t4ZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tA-fR7Cvh1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>   
                </section>
            <Footer/>
        </div>
    )
}
export default Pmaterial