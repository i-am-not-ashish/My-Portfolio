import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div>
      <MDBFooter className='text-center text-white ' style={{ backgroundColor: '#ababab', paddingTop:"10px"}}>
        <MDBContainer className='pt-4'>
          <section className='mb-4'>
            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='https://www.facebook.com/Darklegend532?mibextid=ZbWKwL'
              target="_blank"
              rel="noreferrer"
              role='button'
            >
              <MDBIcon fab className='fab fa-facebook-f' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='https://twitter.com/iam_not_ashish?t=xgOI4ewjRbTmToLnOyEnhg&s=09'
              target="_blank"
              rel="noreferrer"
              role='button'
            >
              <MDBIcon fab className='fa-x' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='https://mail.google.com/mail/?view=cm&fs=1&to=ashish563228@gmail.com'
              target="_blank"
              rel="noreferrer"
              role='button'
            >
              <MDBIcon fab className='fa-google' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='https://www.instagram.com/i_am_not_ashish/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D/'
              target="_blank"
              rel="noreferrer"
              role='button'
            >
              <MDBIcon fab className='fa-instagram' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='https://www.linkedin.com/in/ashish-kumar-65b12b233'
              target="_blank"
              rel="noreferrer"
              role='button'
            >
              <MDBIcon fab className='fa-linkedin' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='https://github.com/i-am-not-ashish'
              target="_blank"
              rel="noreferrer"
              role='button'
            >
              <MDBIcon fab className='fa-github' />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright: 
          <a className='text-dark' href=' https://i-am-not-ashish.github.io/My-Portfolio/'>
             Portfolio-Ashish Kumar
          </a>
        </div>
      </MDBFooter>
    </div>
  )
}

export default Footer