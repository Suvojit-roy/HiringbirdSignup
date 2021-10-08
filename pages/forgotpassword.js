import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled, { css } from 'styled-components'
import signupImage from "../public/signup.png";
import skilzenlogo from "../public/skilzenlogo.png";
import student from "../public/student.svg";
import leftvector from "../public/leftvector.svg";
import rightvector from "../public/rightvector.svg";
import signinimage from '../public/Signin_existinguser 1.svg'
import fblogo from '../public/fb.png'
import googlelogo from '../public/google.png'
import linkedinlogo from '../public/linkedin.png'
import styles from "../styles/Home.module.css";
import forgotpassword from '../public/Forgot_pass.svg'

const StyledLink = styled.a`
  color: #F26A7E;
`


const recruitersignup = () => {
    return (
        <html>
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
        </head>
        <body>
          <div className="leftvector" >
            <Image src={leftvector} />
          </div>
          <div className="rightvector" style={{transform: "rotate(-60deg)"}}>
            <Image src={rightvector} />
          </div>
          <div className="signup-main">
            <div className="image-block">
              <div className="skilzenlogo">
              <Link href="/"><Image src={skilzenlogo} /></Link>
              </div>
              <div className="signupImage">
                <Image width={400} height={280} src={forgotpassword} />
              </div>
            </div>
            <div className="signin-block">
              <div className="toptext-signin"><b>Let us help</b></div>
              <div className="secondtext">Forgot Password</div>
              <div className="thirdtext">Mention your registered email/phone number to get verification code*</div>
              <div className="regemail">
                <span>Registered Email<span style={{color:"#F26A7E"}}>*</span></span>
                <input/>
              </div>
              <div style={{width:"100%",textAlign:"center",paddingTop:"8%",color:"#F26A7E" }}>
                <span style={{fontSize: "12px"}}>OR</span>
              </div>
              <div className="contact">
                <span>Contact No.<span style={{color:"#F26A7E"}}>*</span></span>
                <input/>
              </div>
              <div style={{width:"100%",color:"#F26A7E"}}>
                <span style={{fontSize: "12px",paddingTop:"1%"}}>Check email/number to get the code</span>
              </div>
              
              <Link href='/passwordreset'>
              <div style={{display:"flex",width:"100%",justifyContent:"center",paddingTop:"15%"}}>
                <button className="signinbtn">Enter</button>
              </div>
              </Link>
              
            </div>
          </div>
        </body>
      </html>  );
}
 
export default recruitersignup;