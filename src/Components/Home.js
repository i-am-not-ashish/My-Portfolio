import React from 'react'
import background from '../assets/images/wp2757874-wallpaper-gif.gif'
import './home.css'
const Home = () => {
  const myStyle = {
    backgroundImage:`url(${background})`,
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color:'white',
    justifyContent: "center",
    alignItems: "center",
    textAlign:"center"
};
  return (
    <div className='m-0 p-0 ' style={myStyle}>
      <h1 style={{paddingTop:"30vh",fontSize :"92px",fontFamily:"Rubik Maps"}} className='animated-text3'>Ashish Kumar</h1>
      <h2 style={{fontSize:"90px",fontFamily:"'Tangerine', serif"}} className='animated-text4'>Portfolio</h2>
    </div>
  )
}

export default Home