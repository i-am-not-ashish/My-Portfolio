import React from 'react'
import Map from './Map'
import Email from './Email'
import bg from '../assets/images/wp2757874-wallpaper-gif.gif'

const Contact = () => {
return (
    <>
   <div style={{backgroundImage:`url(${bg})`}}>
    <div style={{color:"white",fontFamily:"PT Serif",padding:"20px"}}>
      <h2>Contact me, waiting for your message!</h2>
    </div>
    <div style={{fontFamily:"Roboto Slab"}} ><Email/></div>
    <div style={{color:"white",fontFamily:"PT Serif",padding:"20px"}}>
      <h2>You can find me here!</h2>
    </div>
    <div><Map/></div>
    </div>
    </>
  )
}

export default Contact