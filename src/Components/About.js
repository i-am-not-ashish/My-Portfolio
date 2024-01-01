import React from 'react'
import photo from '../assets/images/wp2757874-wallpaper-gif.gif'
import './about.css'
import resume from '../assets/images/cv.png'
const About = () => {
  const Style3={
    width: '14rem',
    backgroundColor:'rgba(23,24,32,0)',
    color:'white',
  }
  const Style4={
    justifyContent: "center", 
    alignItems: "center", 
    display: "flex"
  }
  const Style5={
    fontFamily: "PT Serif",
    backgroundColor:"#ababab",
    color:"white",
    border:"1px solid black",
    borderRadius:"2px",
    boxShadow:"2px 4px #888888",
    textShadow:'1px 2px solid' 
  }
  const Style6={
    textAlign: 'justify',
    fontFamily:'"Zilla Slab",sans serif',
    height:"32px"
  }
  const Style7={
    backgroundColor: 'black',
    fontFamily:"PT Serif"
  }

  return (
    <div style={{ backgroundImage: `url(${photo})`, paddingLeft: "20px", paddingRight: "20px", paddingTop: "30px", textAlign: 'justify', color: "whitesmoke" }}>
      <h1 style={{ fontFamily: 'Rubik Doodle Shadow,serif', fontSize: "70px", textAlign: 'left', }} className='animated-text'>I'm Ashish Kumar</h1>
      <p style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2'> A driven and inquisitive student currently pursuing a Bachelor of Technology in Electronics and Instrumentation Engineering at the National Institute of Technology, Agartala. Originally from Meerut, Uttar Pradesh, my educational journey has taken me to new horizons.</p><br />
      <div className="card px-1" style={Style3}>
        <div style={Style4}><img src={resume} className="card-img-top" alt="..."/></div>
          <div className="card-body">
            <h5 className="card-title px-3" style={Style5}>Resume</h5>
            <p className="card-text" style={Style6}>Download my Resume from here...</p>
            <a href="https://drive.google.com/file/d/1vtVPIrB1YKFAGiYeFpN6Mha-m7yagprq/view?usp=drive_link" className="btn btn-primary border-white blk" target='_blank' rel="noreferrer" style={Style7}>Download</a>
          </div>
      </div>
      <h3 style={{ fontFamily: 'Roboto Slab', fontSize: "40px", textAlign: 'left', }} className='animated-text'>Academic Background:</h3>
      <ul>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2'><b>Schooling:</b> Bal Vidya Mandir Inter College Daurala.</li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2'><b>10th Grade:</b> [88.67%, 2018]</li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' s><b>12th Grade:</b> [72.6%, 2020]</li>
      </ul>
      <h3 style={{ fontFamily: 'Roboto Slab', fontSize: "40px", textAlign: 'left', }} className='animated-text'>Current Pursuits:</h3>
      <ul>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2'><b>Institution:</b> National Institute of Technology, Agartala.</li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2'><b>Department:</b> Electronics and Instrumentation Engineering.</li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' ><b>Current CGPA:</b> 8.55.</li>
      </ul>
      <h3 style={{ fontFamily: 'Roboto Slab', fontSize: "40px", textAlign: 'left', }} className='animated-text'>Key Subjects Studied:</h3>
      <ul>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' >Network Theory
        </li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' >Analog Electronics
        </li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' >Digital Electronics
        </li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' >Signals and Systems
        </li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' >Linear Control System
        </li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' >Industrial Instrumentation
        </li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' >Object-Oriented Programming</li>
      </ul>
      <h3 style={{ fontFamily: 'Roboto Slab', fontSize: "40px", textAlign: 'left', }} className='animated-text'>Project Highlights:</h3>
      <ul>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' >Proficient in Arduino projects, showcasing a deep understanding of core subjects.</li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' >Web development projects demonstrate my versatility in development skills.</li>
      </ul>
      <h3 style={{ fontFamily: 'Roboto Slab', fontSize: "40px", textAlign: 'left', }} className='animated-text'>Geographical Background:</h3>
      <ul>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' >Hailing from Meerut, Uttar Pradesh.</li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' >Currently pursuing studies in Agartala, Tripura.</li>
      </ul>
      <h3 style={{ fontFamily: 'Roboto Slab', fontSize: "40px", textAlign: 'left', }} className='animated-text'>Passions and Interests:</h3>
      <ul>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' ><b>Projects:</b> Extensive experience in Arduino projects.
        </li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' ><b>Web Development:</b> Demonstrated skills through various web development projects.
        </li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' ><b>Hobbies:</b> Enthusiastic about watching movies, web series, and playing video games.
        </li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' ><b>Sports:</b> A cricket enthusiast with a keen interest in the game.
        </li>
        <li style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2' ><b>Politics:</b> Intrigued by political dynamics and current affairs.</li>
      </ul>
      <p style={{ fontFamily: "Bitter", fontSize: "30px" }} className='animated-text2'>
        As an aspiring engineer with a strong foundation in electronics, I bring a blend of academic excellence, hands-on project experience, and a versatile set of skills. Beyond the realm of technology, my interests in entertainment, sports, and politics reflect a well-rounded personality.<br />I am eager to contribute my skills and knowledge to meaningful projects and collaborations. Let's connect and explore how my academic background and diverse interests can add value to your endeavors.
      </p>
    </div>
  )
}

export default About