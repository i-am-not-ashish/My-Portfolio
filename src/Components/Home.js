import React from 'react'
import './home.css'
const Home = () => {
  const myStyle = {
    height: "70vh",
    fontSize: "50px",
    color: 'white',
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  };
  return (
    <div className='m-0 p-0' style={myStyle} >
      <h1 style={{ paddingTop: "20vh", fontSize: "92px", fontFamily: "Rubik Maps" }} className='animated-text3 mx-3'>Ashish Kumar</h1>
      <h2 style={{ fontSize: "90px", fontFamily: "'Tangerine', serif", textShadow: "2px 4px black" }} className='animated-text4 blk2'>Portfolio</h2>
    </div>
  )
}

export default Home