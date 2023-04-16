import react from 'react'
import './CSS/footer.css'
<script src="https://kit.fontawesome.com/39de6b7b39.js" crossorigin="anonymous"></script>
function Footer2() {
    return (
        <div className='footer'>
            <div className='row'>
                <img className='iitgn-image' src={require('../components/Images/iitgn.png')} />
                <h3>PDC Council</h3>
            </div>
            <div className='row'>
                <h2>Explore</h2>
                <p>Develop essential skills such as leadership, teamwork, communication, problem-solving, and decision-making. </p>
            </div>
            <div className='row'>
                <h2>Contact us</h2>
                <div className="social-handles">
                    <div class="social-handles-margin facebook-hai">
                        <div>
                            <a href="https://www.facebook.com/OfficialPDC/" target="_blank">Facebook</a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/OfficialPDC/" target="_blank"><i class="fa-brands brands fa-facebook-f"></i></a>
                        </div>
                    </div>
                    <div class="social-handles-margin linkedin-hai">
                        <div>
                            <a href="https://www.linkedin.com/school/indian-institute-of-technology-gandhinagar-iitgn-/?originalSubdomain=in" target="_blank">Linkedin</a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/school/indian-institute-of-technology-gandhinagar-iitgn-/?originalSubdomain=in" target="_blank"><i class="fa-brands brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="social-handles-margin instagram-hai">
                        <div>
                            <a href="https://www.instagram.com/iit_gandhinagar/?hl=en" target="_blank">Instagram</a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/iit_gandhinagar/?hl=en" target="_blank"> <i class="fa-brands brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="social-handles-margin instagram-hai">
                        <div>
                            <a href="mailto:pdc.secretary@iitgn.ac.in" target="_blank">Email</a>
                        </div>
                        <div>
                            <a href="mailto:pdc.secretary@iitgn.ac.in" target="_blank"> <i class="fa-brands fa brands fa-envelope-o"></i></a>
                        </div>
                    </div>
                    <div class="social-handles-margin instagram-hai">
                        <div>
                            <a href="https://www.youtube.com/channel/UCbOCAa_fRS1qEOknCmEHzVw" target="_blank">Youtube</a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/channel/UCbOCAa_fRS1qEOknCmEHzVw" target="_blank"> <i class="fa-brands brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <h2>Address</h2>
                <p>IIT Gandhinagar<br/>- near Palaj<br/>Gandhinagar, Gujarat, India - 382355 </p>
            </div>
        </div>
    )
}
export default Footer2
