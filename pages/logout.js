import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled, { css } from 'styled-components'
import signupImage from "../public/signup.png";
import skilzenlogo from "../public/skilzenlogo.png";
import student from "../public/student.svg";
import leftvector from "../public/leftvector.svg";
import rightvector from "../public/rightvector.svg";
import styles from "../styles/Home.module.css";
import Router from 'next/router'

const StyledLink = styled.a`
  color: #F26A7E;
`

function Home() {
  const logout=async()=>{
    const response=await fetch('http://localhost:5000/logout',{
      method:'POST',
    })

    const data=await response.json()
    console.log(data)
    Router.push('/signin')
  }
  
  return (
    <html>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet"/>
      </head>
      <body>
      <div style={{display:"flex",width:"100%",justifyContent:"center",paddingTop:"15%"}}>
                <button className="signinbtn" onClick={logout}>Logout</button>
              </div>
      </body>
    </html>
  );
}

export default Home