import React from 'react';
import photo from '../assets/images/Group 1.png'
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  return (
    <div style={{marginTop:0 }}>
      <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#bababa",borderRadius:"10px"}}>
        <div className="container-fluid">
          <Link className="navbar-brand me-2" to="https://www.linkedin.com/in/ashish-kumar-65b12b233">
            <img
              src={photo}
              height="50"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: '-1px' }}
              className='animo'
            />
          </Link>
          <button

            className="navbar-toggler"
            data-mdb-collapse-init
            type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item blk" >
                <Link className="nav-link active" aria-current="page" to="/"><MDBIcon fas icon='home' className='me-2 ' />Home</Link>
              </li>
              <li className="nav-item blk" >
                <Link className="nav-link active" aria-current="page" to="/about"><MDBIcon fas icon='user-graduate' className='me-2' /> About</Link>
              </li>
              <li className="nav-item blk">
                <Link className="nav-link active" aria-current="page" to="/skills"><MDBIcon fas icon='bezier-curve' className='me-2' /> Skills</Link>
              </li>
              <li className="nav-item blk">
                <Link className="nav-link active" aria-current="page" to="/project"><MDBIcon fas icon='project-diagram' className='me-2' /> Projects
                </Link>
              </li>
              <li className="nav-item blk">
                <Link className="nav-link active" aria-current="page" to="/contact"><MDBIcon fas icon='envelope-square' className='me-2' /> Contact Me</Link>
              </li>
              <li className="nav-item blk">
                <Link className="nav-link active" aria-current="page" to="/certificates"><MDBIcon fas icon='certificate' className='me-2' /> Certificates</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar