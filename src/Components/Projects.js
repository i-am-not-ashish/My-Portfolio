import React from 'react'
import core from '../assets/images/motherboard.png'
import coding from '../assets/images/web.png'
import "./project.css"
const Projects = () => {
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
    fontSize:"23px",
    boxShadow: "3px 5px wheat",
    textShadow: '1px 2px solid white'
  }
  const Style6 = {
    height: "130px",
    textAlign: 'justify',
    fontFamily: '"Zilla Slab",sans serif'
  }
  const Style7 = {
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily: "PT Serif"
  }
  const Style8 = {
    backgroundImage: "radial-gradient(0deg,#004bba,#911f87)",
    color: "white",
    height: "75px",
    textAlign: "center",
    lineHeight: "75px",
    fontFamily: "Roboto Slab",
    fontSize: "30px",
    border: "white 4px solid",
    borderRadius: "10px ",
    marginTop: "2px"

  }
  return (
    <div >
      <div style={Style8}>Departmental Projects</div>
      <div className="row " style={Style2}>
        <div className="col py-3 " style={{marginLeft:"5rem",marginRight:"5rem"}}>
          <div className="card px-2" style={Style3}>
            <div style={Style4}>
              <img src={core} className="card-img-top to-img" style={{ width: "256px" }} alt="Home Automation" />
            </div>
            <div className="card-body">
              <h3 className="card-title px-2 py-1 rounded" style={Style5}>Home Automation</h3>
              <p className="card-text" style={Style6}>This project combines Arduino UNO R3, LED, 5V DC Motor, L298N Motor Driver, HC-05 Bluetooth Module, and an Android Application. It seamlessly integrates the HC-05 Bluetooth module, Arduino, and an MIT App Inventor-built Android app for smartphone-controlled lights and fans. Customization features enable users to set fan speeds and light intensity, enhancing home automation.</p>
              <a href="https://drive.google.com/drive/folders/1-xOvSBm7dAZRmqajrtmYABUXSKZu7x7u?usp=sharing" className="btn btn-primary border-white blk" target='_blank' rel="noreferrer" style={Style7}>Go To Project</a>
            </div>
          </div>
        </div>
        <div className="col py-3"style={{marginLeft:"5rem",marginRight:"5rem"}}>
          <div className="card px-2" style={Style3}>
            <div style={Style4}>
              <img src={core} className="card-img-top to-img" style={{ width: "256px" }} alt="Light Intensity Detection System" />
            </div>
            <div className="card-body">
              <h3 className="card-title px-2 py-1 rounded" style={Style5}>Light Intensity Detection System</h3>
              <p className="card-text" style={Style6}>This project comprises Arduino UNO R3, LCD Display 16*2, BH1750 Light Sensor, LEDs, Potentiometer, and Slider. The LED functions as an ambient light sensor-triggered street light, mimicking the automatic activation of street lights in low-light conditions. A variable light source controlled by the slider modulates sensor inputs, allowing for responsive testing of simulated varying light conditions.</p>
              <a href="https://drive.google.com/drive/folders/1TWBVcYMHiPbLtCExbQJMNfI0CnHglh1z?usp=sharing" target='_blank' rel="noreferrer" className="btn btn-primary border-white blk" style={Style7}>Go To Project</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row " style={Style2}>
        <div className="col py-3" style={{marginLeft:"5rem",marginRight:"5rem"}}>
          <div className="card px-2" style={Style3}>
            <div style={Style4}>
              <img src={core} className="card-img-top to-img" style={{ width: "256px" }} alt="Fire Alarm" />
            </div>
            <div className="card-body">
              <h3 className="card-title px-2 py-1 rounded" style={Style5}>Fire Alarm</h3>
              <p className="card-text" style={Style6}>Utilizing Arduino UNO R3, LM35, MQ135, LEDs, and a Buzzer, this project monitors air quality and temperature. If hazardous conditions, indicating a potential fire, are detected, the system triggers an alarm and visual indicators. Scalable for larger systems, it accommodates additional sensors and controls to enhance safety and detection capabilities.</p>
              <a href="https://drive.google.com/drive/folders/1U1lsp1PdtxPw_4UvBiOwJl07hDmlXlT4?usp=sharing" target='_blank' rel="noreferrer" className="btn btn-primary border-white blk" style={Style7}>Go To Project</a>
            </div>
          </div>
        </div>
        <div className="col py-3" style={{marginLeft:"5rem",marginRight:"5rem"}}>
          <div className="card px-2" style={Style3}>
            <div style={Style4}>
              <img src={core} className="card-img-top to-img" style={{ width: "256px" }} alt="DC Motor Speed and Direction Control" />
            </div>
            <div className="card-body">
              <h3 className="card-title px-2 py-1 rounded" style={Style5}>DC Motor Speed and Direction Control</h3>
              <p className="card-text" style={Style6}>Featuring Arduino UNO R3, Potentiometer, L298N Motor Driver, 5V Motor, and Push button, this project enables dynamic motor control. The potentiometer and push button adjust motor direction and speed, providing real-time feedback via Arduino's serial monitor for enhanced control. The setup ensures flexibility in motor manipulation with streamlined monitoring capabilities.</p>
              <a href="https://drive.google.com/drive/folders/1g7qJSWhpB_vr0DJEFKR2CkrsP9LNOfjH?usp=sharing" target='_blank' rel="noreferrer" className="btn btn-primary border-white blk" style={Style7}>Go To Project</a>
            </div>
          </div>
        </div>
      </div>
      <div style={Style8}>Personal Projects</div>
      <div className="row " style={Style2}>
        <div className="col py-3"style={{marginLeft:"5rem",marginRight:"5rem"}}>
          <div className="card px-2" style={Style3}>
            <div style={Style4}>
              <img src={coding} className="card-img-top to-img" style={{ width: "256px" }} alt="News Cat" />
            </div>
            <div className="card-body">
              <h3 className="card-title px-2 py-1 rounded" style={Style5}>News Cat</h3>
              <p className="card-text" style={Style6}>Experience the future of news with our dynamic web app, seamlessly navigating sports, entertainment, business, and more through intuitive routing. Crafted with HTML, CSS, JavaScript, and React.js, our application offers a modern interface and endless updates with the convenience of infinite scroll, ensuring a comprehensive and engaging news experience.</p>
              <a href="https://github.com/i-am-not-ashish/textUtils" target='_blank' rel="noreferrer" className="btn btn-primary border-white blk" style={Style7}>Go To Project</a>
            </div>
          </div>
        </div>
        <div className="col py-3" style={{marginLeft:"5rem",marginRight:"5rem"}}>
          <div className="card px-2" style={Style3}>
            <div style={Style4}>
              <img src={coding} className="card-img-top to-img" style={{ width: "256px" }} alt="Text-Utils" />
            </div>
            <div className="card-body">
              <h3 className="card-title px-2 py-1 rounded" style={Style5}>Text-Utils</h3>
              <p className="card-text" style={Style6}>Immerse yourself in a tech-forward website blending HTML, CSS, and JavaScript with the agility of React.js. Elevate your text experience—transform effortlessly between lowercase and uppercase, count words and letters, and gauge estimated reading time. Tailor your view with multiple dark modes, creating a personalized and efficient browsing journey.</p>
              <a href="https://github.com/i-am-not-ashish/Daily-News" target='_blank' rel="noreferrer" className="btn btn-primary border-white blk" style={Style7}>Go To Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects