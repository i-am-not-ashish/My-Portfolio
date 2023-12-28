import React from 'react'
import python from '../assets/images/python-certificate.jpg'
import react from '../assets/images/react-certificate.jpg'
import reactNative from '../assets/images/react-native-certificate.jpg'
import vc from '../assets/images/version-control-certificate.jpg'

const Certificates = () => {
  const Style={
    backgroundColor: 'black',
    fontFamily:"PT Serif"
  }
  const Style2={
    fontFamily: "PT Serif",
    color:"black",
    boxShadow:"2px 4px #888888",
    textShadow:'1px 2px solid' 
  }
  return (
    <div >
      <div className="card my-3 " style={{"width":"36rem",marginLeft:"20px"}}>
        <img src={python} className="card-img-top" alt="..." />
        <div className="card-body">
        <h4 className="card-title px-2 py-1 border-black rounded border-bottom" style={Style2}>Python</h4>
          <a href="https://coursera.org/verify/P5A6BAG4RY3A" className="btn btn-primary border-white blk" target='_blank' rel="noreferrer" style={Style}>View Certificate</a>
        </div>
      </div>
      <div className="card my-3" style={{"width":"36rem",marginLeft:"120px"}}>
        <img src={react} className="card-img-top" alt="..." />
        <div className="card-body">
        <h4 className="card-title px-2 py-1 border-black rounded border-bottom" style={Style2}>React JS</h4>
          <a href="https://coursera.org/verify/FRMZKTJKASJM" className="btn btn-primary border-white blk" target='_blank' rel="noreferrer" style={Style}>View Certificate</a>
        </div>
      </div>
      <div className="card my-2" style={{"width":"36rem",marginLeft:"20px"}}>
        <img src={reactNative} className="card-img-top" alt="..." />
        <div className="card-body">
        <h4 className="card-title px-2 py-1 border-black rounded border-bottom" style={Style2}>React Native</h4>
          <a href="https://coursera.org/verify/ZPVN78EXSHA7" className="btn btn-primary border-white blk" target='_blank' rel="noreferrer" style={Style}>View Certificate</a>
        </div>
      </div>
      <div className="card my-2" style={{"width":"36rem",marginLeft:"120px"}}>
        <img src={vc} className="card-img-top" alt="..." />
        <div className="card-body">
        <h4 className="card-title px-2 py-1 border-black rounded border-bottom" style={Style2}>Version Control</h4>
          <a href="https://coursera.org/verify/KKU6WW5XUL62" className="btn btn-primary border-white blk" target='_blank' rel="noreferrer" style={Style}>View Certificate</a>
        </div>
      </div>
    </div>
  )
}

export default Certificates