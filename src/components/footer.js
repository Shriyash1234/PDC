import react from 'react'
import './CSS/footer.css'

function Footer2(){
    return(
        <div className='footer'>
            <div className='row'>
                <img className='iitgn-image' src={require('../components/Images/iitgn.png')}/>
                <h3>PDC Council</h3>
            </div>
            <div className='row'>
                <h2>Explore</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            </div>
            <div className='row'>
                <h2>Contact us</h2>
                <p>Facebook</p>
                <p>Instgram</p>
                <p>Twitter</p>
                <p>Linkedin</p>
            </div>
            <div className='row'>
                <h2>Address</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            </div>
        </div>
    )
}
export default Footer2