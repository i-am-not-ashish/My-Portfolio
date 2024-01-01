import React from 'react'
import html from "../assets/images/html-5.png"
import css from '../assets/images/css-3.png'
import js from '../assets/images/java-script.png'
import react from '../assets/images/react-js.png'
import express from '../assets/images/express-js.png'
import node from '../assets/images/node-js.png'
import mongo from '../assets/images/mongodb.png'
import python from '../assets/images/python.png'
import java from '../assets/images/java.png'
import c from '../assets/images/c-.png'
import reactNative from '../assets/images/react-native.png'
import sql from '../assets/images/sql.png'
import mysql from '../assets/images/mysql.png'
import matlab from '../assets/images/matlab.png'
import opencv from '../assets/images/opencv.png'
import numpy from '../assets/images/numpy.png'
import pandas from '../assets/images/pandas.png'
import matplot from '../assets/images/Matplotlib.png'
import arduino from '../assets/images/arduino.png'
import arduinoIde from '../assets/images/arduino-ide.png'
import word from '../assets/images/word.png'
import excel from '../assets/images/excel.png'
import pp from '../assets/images/powerpoint.png'
import vs from '../assets/images/visual-studio.png'
import git from '../assets/images/git.png'
import bash from '../assets/images/bash.png'
import conver from '../assets/images/conversation.png'
import leader from '../assets/images/leadership.png'
import './skills.css'
const Skills = () => {
  const style1 = {
    color: "white",
    textAlign: 'justify',
    fontFamily: 'PT Serif',
    margin: 0
  }
  const Style2 = {
    backgroundImage: "radial-gradient(0deg,#004bba,#911f87)",
    color: "white",
    height: "40px",
    lineHeight: "40px",
    fontFamily: "Roboto Slab",
    fontSize: "25px",
    border: "white 2px solid",
    borderRadius: "8px ",
    marginBottom: "10px",
    paddingLeft: "30px",
    marginTop: "2px"

  }
  return (
    <div style={style1}>
      <div style={Style2} className='title'>Web Development</div>
      <div className='d-flex  px-2 text-center'>
        <div className='mx-3 animate'><img src={html} alt='html' width='90px' /> <br />HTML </div>
        <div className='mx-3 animate'><img src={css} alt='css' width='90px' /> <br />CSS </div>
        <div className='mx-3 animate'><img src={js} alt='js' width='90px' /> <br />JavaScript </div>
        <div className='mx-3 animate'><img src={react} alt='react' width='90px' /> <br />React JS </div><br />
      </div>
      <div className='d-flex  px-2 text-center'>
        <div className='mx-3 animate'><img src={express} alt='express' width='90px' /> <br />Express JS </div>
        <div className='mx-3 animate'><img src={node} alt='node' width='90px' /> <br />Node JS </div>
        <div className='mx-3 animate'><img src={mongo} alt='mongo' width='90px' /> <br />Mongo DB </div>
      </div>

      <div style={Style2}>App Development</div>
      <div className='d-flex  px-2  text-center'>
        <div className='mx-3 animate'><img src={reactNative} alt='react-native' width='90px' /> <br />React-Native</div>
      </div>

      <div style={Style2}>Languages</div>
      <div className='d-flex  px-2  text-center'>
        <div className='mx-3 animate'><img src={python} alt='python' width='90px' /> <br />Python</div>
        <div className='mx-3 animate'><img src={java} alt='java' width='90px' /> <br />Java</div>
        <div className='mx-3 animate'><img src={c} alt='c' width='90px' /> <br />C</div>
        <div className='mx-3 animate'><img src={sql} alt='sql' width='90px' /> <br />SQL</div><br />
      </div>
      <div className='d-flex  px-2  text-center'>
        <div className='mx-3 animate'><img src={mysql} alt='MySQL' width='90px' /> <br />MySQL</div>
        <div className='mx-3 animate'><img src={matlab} alt='matlab' width='90px' /> <br />Matlab</div>
      </div>

      <div style={Style2}>Python Libraries</div>
      <div className='d-flex  px-2  text-center'>
        <div className='mx-3 animate'><img src={opencv} alt='OpenCV' width='90px' /> <br />OpenCV</div>
        <div className='mx-3 animate'><img src={numpy} alt='Numpy' width='90px' /> <br />Numpy</div>
        <div className='mx-3 animate'><img src={pandas} alt='Pandas' width='90px' /> <br />Pandas</div>
        <div className='mx-3 animate'><img src={matplot} alt='matplot' width='90px' /> <br />Matplotlib</div>
      </div>

      <div style={Style2}>IoT</div>
      <div className='d-flex  px-2  text-center'>
        <div className='mx-3 animate'><img src={arduino} alt='Arduino' width='90px' /> <br />Arduino</div>
        <div className='mx-3 animate'><img src={arduinoIde} alt='ArduinoIDE' width='90px' /> <br />Arduino IDE</div>
      </div>

      <div style={Style2}>Computor Tools</div>
      <div className='d-flex px-2 text-center'>
        <div className='mx-3 animate'><img src={word} alt='MS Word' width='90px' /> <br />MS Word</div>
        <div className='mx-3 animate'><img src={excel} alt='MS Excel' width='90px' /> <br />MS Excel</div>
        <div className='mx-3 animate'><img src={pp} alt='MS PP' width='90px' /> <br />MS PowerPoint</div>
        <div className='mx-3 animate'><img src={vs} alt='VS Code' width='90px' /> <br />VS Code Editor</div><br />

      </div>
      <div className='d-flex px-2 text-center'>
        <div className='mx-3 animate'><img src={git} alt='git' width='90px' /> <br />Git</div>
        <div className='mx-3 animate'><img src={bash} alt='bash' width='90px' /> <br />Git Bash</div>
      </div>

      <div style={Style2}>Other Skills</div>
      <div className='d-flex  px-2 text-center'>
        <div className='mx-3 animate'><img src={conver} alt='Conversation' width='90px' /> <br />Conversation Skills</div>
        <div className='mx-3 animate'><img src={leader} alt='Leadership' width='90px' /> <br />Leadership Skills</div>
      </div>
    </div>
  )
}

export default Skills