import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./CSS/login.css";
function Login() {
    let navigate = useNavigate();
    const [Gmail,SetGmail] = useState();
    const [Gname,SetGname] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="login-page">
      <Header />
      <div className="login">
        <div className="rectangle">
          <h1 className="email">Login with IITGN email</h1>
          <div className="Google-login">
          <img className='user-image' src={require('./Images/user-image.png')}></img>
            <LoginSocialGoogle
              client_id={
                "413814460306-rmb30pb16r8eo3gemo0r5lnplbemqnu5.apps.googleusercontent.com"
              }
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ provider, data }) => {
                setIsAuthenticated(true);
                SetGmail(data.email);
                SetGname(data.family_name + data.given_name);
                navigate("/PDC/PlacementMaterial");
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
