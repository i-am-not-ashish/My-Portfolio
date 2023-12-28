
import { Routes ,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Certificates from './Components/Certificates';
import Footer from './Components/Footer';
import './App.css'
function App() {
 
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/project" element={<Projects/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/certificates" element={<Certificates/>} />
    </Routes>
    <Footer/>
    </> 
  );
}

export default App;
