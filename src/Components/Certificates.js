import React from 'react'
import python from '../assets/images/python-certificate.jpg'
import react from '../assets/images/react-certificate.jpg'
import reactNative from '../assets/images/react-native-certificate.jpg'
import vc from '../assets/images/version-control-certificate.jpg'

const Certificates = () => {
  const Style2 = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
  const Style3 = {
    width: '33rem',
    backgroundColor: 'rgba(23,24,32,0)',
    color: 'white',
  }
  const Style4 = {
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  }
  const Style5 = {
    fontFamily: "PT Serif",
    border: "white 2px solid",
    color: "white",
    boxShadow: "3px 5px wheat",
    textShadow: '1px 2px solid white'
  }

  const Style6 = {
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily: "PT Serif",
    color: "white"
  }
  return (
    <div >
      <div className='row py-3' style={Style2}>
        <div className='col my-3'style={{marginLeft:"5rem",marginRight:"5rem"}}>
          <div className="card my-3 " style={Style3}>
            <div style={Style4}><img src={python} className="card-img-top" alt="Python" style={{ width: "300px" }} /></div>
            <div className="card-body">
              <h4 className="card-title px-2 py-1 rounded" style={Style5}>Python</h4>
              <a href="https://coursera.org/verify/P5A6BAG4RY3A" className="btn border-white blk" target='_blank' rel="noreferrer" style={Style6}>View Certificate</a>
            </div>
          </div>
        </div>
        <div className='col my-3'style={{marginLeft:"5rem",marginRight:"5rem"}}>
          <div className="card my-3" style={Style3}>
            <div style={Style4}><img src={react} className="card-img-top" alt="React" style={{ width: "300px" }} /></div>
            <div className="card-body">
              <h4 className="card-title px-2 py-1 rounded" style={Style5}>React JS</h4>
              <a href="https://coursera.org/verify/FRMZKTJKASJM" className="btn border-white blk" target='_blank' rel="noreferrer" style={Style6}>View Certificate</a>
            </div>
          </div>
        </div>
      </div>
      <div className='row' style={Style2}>
        <div className='col my-3'style={{marginLeft:"5rem",marginRight:"5rem"}}>
          <div className="card my-2" style={Style3}>
            <div style={Style4}><img src={reactNative} className="card-img-top" alt="React-Native" style={{ width: "300px" }} /></div>
            <div className="card-body">
              <h4 className="card-title px-2 py-1 rounded" style={Style5}>React Native</h4>
              <a href="https://coursera.org/verify/ZPVN78EXSHA7" className="btn border-white blk" target='_blank' rel="noreferrer" style={Style6}>View Certificate</a>
            </div>
          </div>
        </div>
        <div className='col my-3'style={{marginLeft:"5rem",marginRight:"5rem"}}>
          <div className="card my-2" style={Style3}>
            <div style={Style4}><img src={vc} className="card-img-top" alt="Version Control" style={{ width: "300px" }} /></div>
            <div className="card-body">
              <h4 className="card-title px-2 py-1 rounded" style={Style5}>Version Control</h4>
              <a href="https://coursera.org/verify/KKU6WW5XUL62" className="btn border-white blk" target='_blank' rel="noreferrer" style={Style6}>View Certificate</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates