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

const StyledLink = styled.a`
  color: #F26A7E;
`

function Home() {
  
  return (
    <html>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <div className="leftvector">
          <Image src={leftvector} />
        </div>
        <div className="rightvector">
          <Image src={rightvector} />
        </div>
        <div className="signup-main">
          <div className="image-block">
            <div className="skilzenlogo">
            <Link href="/"><Image src={skilzenlogo} /></Link>
            </div>
            <div className="signupImage">
              <Image width={400} height={280} src={signupImage} />
            </div>
          </div>
          <div className="signup-block">
            <div className="toptext">Lets get you Started!</div>
            <Link href="/signup">
              <div className="student-register">
                <Image
                  className="studentimage"
                  width={70}
                  height={60}
                  src={student}
                />
                <h3>Student</h3>
              </div>
            </Link>
            <Link href="/recruitersignup">
              <div className="recruiter-register">
                <Image
                  className="studentimage"
                  width={70}
                  height={60}
                  src={student}
                />
                <h3>Recruiter</h3>
              </div>
            </Link>
            <div className="bottomtext">
              Already on Skilzen? Go to <StyledLink href="/signin">Sign In</StyledLink>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Home