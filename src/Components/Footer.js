import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div style={{ paddingBottom: "20px" }} className='border-1 border-top'>
      <MDBFooter className='text-center text-white ' style={{ backgroundColor: 'rgba(0,0,0,0)', paddingTop: "10px" }}>
        <MDBContainer className='pt-4'>
          <section className='mb-4'>
            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-white m-1'
              href='https://www.facebook.com/Darklegend532?mibextid=ZbWKwL'
              target="_blank"
              rel="noreferrer"
              role='button'
            >
              <MDBIcon fab className='fab fa-facebook-f fa-lg' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-white m-1'
              href='https://twitter.com/iam_not_ashish?t=xgOI4ewjRbTmToLnOyEnhg&s=09'
              target="_blank"
              rel="noreferrer"
              role='button'
            >
              <MDBIcon fab className='fa-x fa-lg' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-white m-1'
              href='https://mail.google.com/mail/?view=cm&fs=1&to=ashish563228@gmail.com'
              target="_blank"
              rel="noreferrer"
              role='button'
            >
              <MDBIcon fab className='fa-google fa-lg' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-white m-1'
              href='https://www.instagram.com/i_am_not_ashish/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D/'
              target="_blank"
              rel="noreferrer"
              role='button'
            >
              <MDBIcon fab className='fa-instagram fa-lg' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-white m-1'
              href='https://www.linkedin.com/in/ashish-kumar-65b12b233'
              target="_blank"
              rel="noreferrer"
              role='button'
            >
              <MDBIcon fab className='fa-linkedin fa-lg' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-white m-1'
              href='https://github.com/i-am-not-ashish'
              target="_blank"
              rel="noreferrer"
              role='button'
            >
              <MDBIcon fab className='fa-github fa-lg' />
            </MDBBtn>
          </section>
        </MDBContainer>
      </MDBFooter>
    </div>
  )
}

export default Footer