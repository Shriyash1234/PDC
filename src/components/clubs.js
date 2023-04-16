import React,{useState} from 'react';
import Header from './header'
import Footer from './footer'

function Clubs(){
    return(
        <div>
            <Header/>
            <div className="container clubs">
        <h1>Annuity | Finance Club </h1>
        <table>
            <tr>
                <td>
                    <img src="https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/309439876_420567350237561_2156672749790611013_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3ljSdv1ozq0AX98PGCz&_nc_oc=AQnMijPukW5wyFILJHjUwYQ-RA9IJQq5YAAd7cnFHKeHCVNiWEzKsBvjBU7LSt8kykA&_nc_ht=scontent-bom1-2.xx&oh=00_AfCaSspfNHV7L_SDAdus2gJ7LnTkYAk8jkVxmNte-X-dfQ&oe=643FFC85" width="200px" alt="" />
                </td>
                <td>
                    <h3>"Master Your Finances, Empower Your Future"</h3>
                    <p className='club-desc'>
                        Annuity club at IIT Gandhinagar is a financial club that focuses on the concept of annuities, which are a type of financial product that provides a series of payments over a certain period of time. The club aims to educate students about the benefits and drawbacks of annuities and to help them make informed decisions about their personal finances.
                    </p>
                    <address>
                        <strong>Club Secretary:</strong>
                        Shreyas Chaudhari
                        E-mail : <a href="mailto:#" target="_blank"> 16pixels[at]iitgn.ac.in</a>
                    </address>
                </td>
            </tr>
        </table>
        </div>
            <Footer/>
        </div>
    )
}
export default Clubs;