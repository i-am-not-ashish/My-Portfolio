import React from 'react';
import photo from '../assets/images/logo.png'
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  return (
    <div style={{ marginTop: 0, color: "whitesmoke", fontFamily: "Roboto Slab" }}>
      <nav className="navbar navbar-expand-lg navbar-light " style={{ background: "rgba(0,0,0,0)", borderRadius: "10px" }}>
        <div className="container-fluid">
          <Link className="navbar-brand me-2" to="https://www.linkedin.com/in/ashish-kumar-65b12b233">
            <img
              src={photo}
              height="200px"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: '-1px' }}
              className='animo'
            />
          </Link>
          <button

            className="navbar-toggler text-light py-2"
            data-mdb-collapse-init
            type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 border-bottom border-1" >
              <li className="nav-item blk2 " >
                <Link className="nav-link active text-light" aria-current="page" to="/"><MDBIcon fas icon='home' className='me-2 ' />Home</Link>
              </li>
              <li className="nav-item blk2 " >
                <Link className="nav-link active text-light" aria-current="page" to="/about"><MDBIcon fas icon='user-graduate text-white' className='me-2' /> About</Link>
              </li>
              <li className="nav-item blk2 ">
                <Link className="nav-link active text-light" aria-current="page" to="/skills"><MDBIcon fas icon='bezier-curve text-white' className='me-2 ' /> Skills</Link>
              </li>
              <li className="nav-item blk2 ">
                <Link className="nav-link active text-light" aria-current="page" to="/project"><MDBIcon fas icon='project-diagram text-white' className='me-2' /> Projects
                </Link>
              </li>
              <li className="nav-item blk2 ">
                <Link className="nav-link active text-light" aria-current="page" to="/contact"><MDBIcon fas icon='envelope-square text-white' className='me-2' /> Contact Me</Link>
              </li>
              <li className="nav-item blk2 ">
                <Link className="nav-link active text-light" aria-current="page" to="/certificates"><MDBIcon fas icon='certificate text-white' className='me-2' /> Certificates</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar