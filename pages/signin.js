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
import forgotpassword from '../public/Forgot_pass.svg'
import styles from "../styles/Home.module.css";
import { useState } from "react";
import  Router  from "next/router";

const StyledLink = styled.a`
  color: #F26A7E;
`


const recruitersignup = () => {

  // const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  // const [name,setName]=useState();
  // const [state, setstate] = useState(initialState)

  const submitdata= async ()=>{
    const response=await fetch('http://localhost:5000/login',{
      method:'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers:{
        'Content-Type':'application/json'
      }
    })

    const data=await response.json()
    console.log(data)
    if(!data.error) {Router.push('/logout')}
  }
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
                <Image width={400} height={280} src={signinimage} />
              </div>
            </div>
            <div className="signin-block">
              <div className="toptext-signin"><b>Welcome Back!</b></div>
              <div className="secondtext">Sign In</div>
              <div className="sociallogos">
                <span style={{padding:"0 20px 0 0"}}><Image width={30} height={30} src={fblogo}/></span>
                <span style={{padding:"0 20px 0 20px"}}><Image width={30} height={30} src={googlelogo}/></span>
                <span style={{padding:"0 20px 0 20px"}}><Image width={30} height={30} src={linkedinlogo}/></span>
                
              </div>
              <div className="email">
                <span>Email<span style={{color:"#F26A7E"}}>*</span></span>
                <input value={email} type="text" onChange={e=>setEmail(e.target.value)}/>
                
              </div>
              <div className="password">
                <span>Password<span style={{color:"#F26A7E"}}>*</span></span>
                <input value={password} type="text" onChange={e=>setPassword(e.target.value)}/>
                
              </div>
              <div style={{width:"100%",textAlign:"right"}}><Link href={"/forgotpassword"} style={{cursor:"pointer"}}>
                <span style={{fontSize: "12px",paddingTop:"1%",cursor:"pointer"}}>Forgot Password?</span></Link>
              </div>
              
              <div style={{width:"80%",display:"flex",flexDirection:"column",paddingTop:"1%"}}>
                <span>
                  <input type="checkbox" value="1" id="customCheckboxInput" name="Show Password" />
                  <span style={{fontSize: "12px",lineHeight: "15px"}}>    Show Password</span>
                </span>
                <span>
                  <input type="checkbox" value="1" id="customCheckboxInput" name="Keep me logged in" />
                  <span style={{fontSize: "12px",lineHeight: "15px"}}>    Keep me logged in </span>
                </span>
                
              </div>
              <div style={{display:"flex",width:"100%",justifyContent:"center",paddingTop:"15%"}}>
                <button className="signinbtn" onClick={submitdata}>Sign In</button>
              </div>
              <div className="bottomtext-signin" >
                New User ? <StyledLink href="/signup">Sign Up</StyledLink>
              </div>
            </div>
          </div>
        </body>
      </html>  );
}
 
export default recruitersignup;