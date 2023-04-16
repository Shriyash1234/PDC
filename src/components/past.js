import React,{useState} from 'react';
import Header from './header'
import Footer from './footer'
import './CSS/team.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

function Past(){
    return(
        <div>
            <Header/>
            <div className='team'>
                <h1 className='Heading'>Our Team</h1>
                <div className='team-message'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                <div className='team-cards'>
                <div className='card'>
                        <img className='team-photo' src={require('../components/Images/Dhanvi.webp')}></img>
                        <div className='content'>
                            <p className='name'>Dhairya Shah</p>
                            <p className='position'>PDC Secreatary</p>
                            <p className='position'>2022-23</p>
                            <div className="social-icons">
                                <span>
                                    <FontAwesomeIcon className="fa-brands fb1" icon={faFacebookF} />
                                    <FontAwesomeIcon className="fa-brands insta1" icon={faInstagram} />
                                    <FontAwesomeIcon className="fa-brands linkedin1" icon={faLinkedin} />
                                    <FontAwesomeIcon className="fa-brands youtube1" icon={faYoutube} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='team-photo' src={require('../components/Images/Maitreya.jpg')}></img>
                        <div className='content'>
                            <p className='name'>Aurag Verma</p>
                            <p className='position'>PDC Secreatary</p>
                            <p className='position'>2021-22</p>
                            <div className="social-icons">
                                <span>
                                    <FontAwesomeIcon className="fa-brands fb1" icon={faFacebookF} />
                                    <FontAwesomeIcon className="fa-brands insta1" icon={faInstagram} />
                                    <FontAwesomeIcon className="fa-brands linkedin1" icon={faLinkedin} />
                                    <FontAwesomeIcon className="fa-brands youtube1" icon={faYoutube} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='team-photo' src={require('../components/Images/team-member2.jpg')}></img>
                        <div className='content'>
                            <p className='name'>Hitesh Singh</p>
                            <p className='position'>PDC Secreatary</p>
                            <p className='position'>2020-21</p>
                            <div className="social-icons">
                                <span>
                                    <FontAwesomeIcon className="fa-brands fb1" icon={faFacebookF} />
                                    <FontAwesomeIcon className="fa-brands insta1" icon={faInstagram} />
                                    <FontAwesomeIcon className="fa-brands linkedin1" icon={faLinkedin} />
                                    <FontAwesomeIcon className="fa-brands youtube1" icon={faYoutube} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Past;