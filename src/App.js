import './App.css';
import { Anchor, Col, Row } from 'antd';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import projectJson from './json/projectJson';
import Projects from './components/Projects'
const { Link } = Anchor;

const App =()=> {
  return (
    <>
      <Row>
            <Col span={3}>
              <Anchor>
                <div className='links'>
                  <Link href="#about" title="About"/>
                </div>
                <div className='links'>
                  <Link href="#experience" title="Experience" />
                </div>
                <div className='links'>
                  <Link href="#projects" title="Projects"/>
                </div>
                <div className='links'>
                  <Link href="#skills" title="Skills" />
                </div>
                <div className='links'>
                  <Link href="#contact" title="Contact" />
                </div>
              </Anchor>
            </Col>
        <Col span ={21}>
          <div id = 'about' className='About'>
            <About/>
           </div>
    <div id = 'experience' className='Experience'>
      <Experience/>
    </div>
    <div id = 'projects'>
    <Projects data = {projectJson}/>
    </div>
    <div id = 'skills'>
      <Skills/>
      </div>
    <div id = 'contact'>
      <Contact/>
    </div>
    
    
   
    </Col>
    </Row>
    </>
  
  );
}

export default App;
