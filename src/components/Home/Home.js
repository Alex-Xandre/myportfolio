import React, { useState, useEffect} from 'react'

import './home.css'
import styled,{ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles } from '../../themes.js'
import {MenuItems} from './MenuItems'
import {Link} from 'react-scroll'
//importing typewriter-effect
import Typewriter from "typewriter-effect";

import home_img from '../../images/main-image.png'
import stack_react from '../../images/icon_react.png'
import stack_node from '../../images/icon_nodejs.png'
import stack_mysql from '../../images/icon_mysql.png'
import stack_mongo from '../../images/icon_mongodb.png'
import stack_android from '../../images/icon_android.png'
import stack_java from '../../images/icon_java.png'
import stack_html from '../../images/icon_html.png'
import stack_css from '../../images/icon_css.png'
import stack_sass from '../../images/icon_sass.png'



import proj1 from '../../images/proj1.png'
import proj2 from '../../images/barkmeoww.png'
import proj3 from '../../images/halingoo.png'
import proj4 from '../../images/proj4.png'
import check from '../../images/checked.png'
import Aos from 'aos'
import "aos/dist/aos.css"

import MessengerCustomerChat from 'react-messenger-customer-chat';




const StyledApp = styled.div `
color: ${(props) => props.theme.fontColor}` 



const Home = () => {
  useEffect(() => {
      Aos.init({duration: 1000})
      Aos.refresh()
  }, [])

  const [theme] = useState("light")
  const [clicked,setClicked] = useState(true)

  //projects
 
   
//   const themeToggler =() =>{
//   theme === "light" ? setTheme("dark"): setTheme("light")
//   }

  const handleClick =() =>{
   clicked === false ? setClicked(true): setClicked(false)
}





  return (
 
      
    <ThemeProvider theme={theme === "light"? lightTheme: darkTheme}>
    <GlobalStyles/>
       <StyledApp>
       <div className='home'>

        <MessengerCustomerChat
        pageId="104959258728460"
        appId="2837583293208170"
        minimized="true"
    />
    
      
       <nav className='NavbarItems'>
          <h1 className='navbar-logo'> Alexander Micua</h1>
        

          <div className='menu-icon' onClick={() => handleClick()}>
               <i className={clicked === false ? 'fa-solid fa-xmark' :'fas fa-bars'}></i> 
          </div>
          
        <ul className={clicked === false ? 'nav-menu active': 'nav-menu' }>
            {MenuItems.map((item, index)=> {
                return(
                    <li key ={index}>
                        <Link to={item.url} activeClass="activelink" spy={true} smooth={true} offset={100} duration={500} delay={10} className={item.cName}>
                        {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>

        <div className='home_links'>
         
        {/* <i onClick={() => themeToggler()} className={theme ==='dark' ?  'fa-solid fa-lightbulb': 'fa-solid fa-moon' }></i> */}
       </div>

       </nav>

        <section className='home_section' id='home' >
         
            <div className='home_section_container'>
            <h1 className='home_section-title'>    <Typewriter

                            onInit={(typewriter)=> {
                            typewriter                         
                            .typeString("Xcrypt Aces Developer and Co-Founder")
                            .start()      
                            .pauseFor(300)
                        }}
                            />
            </h1>
        
            <h2 className='home_section_description'>A Developer who is eager to learn and explore more on technology stuffs.</h2>
            {/* <button className='home_section_button1'>Hire A FreeLancer</button> */}
           <a href="https://www.linkedin.com/in/alexander-micua-04657a217/" target="_blank" rel='noreferrer'> <button className='btn home_section_button2'>Hire A FreeLancer</button> </a> 
            </div>
           
            <img src={home_img} className="home_section_bg" alt='photoss' />
 
        </section >
       
      
        <section className='about_section'  id="about" data-aos ="fade-up" >
            
            <h1 className='about_section-title' data-aos ="fade-up" style={{opacity:'.3'}}> 

            <Typewriter

                    onInit={(typewriter)=> {

                    typewriter

                    .typeString("About")
                    .start()
                    .pauseFor(300)
                    }}
           
                    />
             </h1>

            <h2 className='about_section-description' data-aos ="fade-up" >Hello! I'm a full-stack developer specializing in developing solutions with JavaScript and Java</h2>
            
            <div className='about_section_content-container'>
            <p className='about_section-content ' data-aos ="fade-right">
                A 22 year old programmer that worked on 
                    projects including creation of websites, android application, full-stack software development; moderating discord and editing short videos; and tutoring.
                    <br/><br/>
                    Nothing is impossible in Programming as long as you believe in yourself and you know the logic and fundamentals of the system
                    <br/>
                    <br/>
                        Things that I am currently studying: #<strong>Web Development</strong>, #<strong>UI/UX Design</strong>, #<strong>Trading</strong>, #<strong>Web3</strong>, #<strong>VA</strong>, #<strong>Japanese Culture</strong>
                    </p>
                <div className='about_section-techstack' data-aos ="fade-up">
                    <h2 className='about_section_techstack-title' >
                        Technology Stacks
                    </h2>

                    <div className='tech_stack_container'>
                        <div className='tech_stack' data-aos ="fade-right"><img src={stack_html} alt="skils" /></div>
                        <div className='tech_stack' data-aos ="fade-right"><img src={stack_css} alt="skils" /></div>
                        <div className='tech_stack' data-aos ="fade-right"><img src={stack_sass} alt="skils" /></div>
                        <div className='tech_stack' data-aos ="fade-right"><img src={stack_android} alt="skils" /></div>
                        <div className='tech_stack' data-aos ="fade-right"><img src={stack_java} alt="skils" /></div>
                        <div className='tech_stack' data-aos ="fade-right"><img src={stack_mongo} alt="skils" /></div>
                        <div className='tech_stack' data-aos ="fade-right"><img src={stack_mysql} alt="skils"/></div>
                        <div className='tech_stack' data-aos ="fade-right"><img src={stack_node} alt="skils"/></div>
                        <div className='tech_stack' data-aos ="fade-right"><img src={stack_react} alt="skils"/></div>
                        
                    </div> 
                    
                </div>
            </div>
        </section>

        <section className='project_section'   id = 'projects'>
        <h1 className='about_project-title'  data-aos ="fade-up" style={{opacity:'.3'}}> 
        <Typewriter

                    onInit={(typewriter)=> {
                    typewriter

                    .typeString("Projects")
                    .start()
                    .pauseFor(300)
                    }}
          
                    />
        
        </h1>

        <div className='project_main-container'>
        
            <div className='project' data-aos ="fade-right">    
                <img src={proj1} alt="project1"  />
                     <div className="overlay overlayLeft">  
                <h1>Xcryptaces </h1>
                <h2>Mentoring Website of Xcrypt Aces</h2>
                <h2>Tech Stack used: <span>React, Node, MongoDb, SCSS</span></h2>
                <button className='btn_mr'><a href='https://xcryptaces.com' target="_blank" rel='noreferrer'>Visit Website to new tab</a></button>
                </div>
            </div>

            <div className='project' data-aos ="fade-left">    
                <img src={proj3} alt="project1"  />
                     <div className="overlay overlayLeft">  
                     <h1>Halingo</h1>
                     <h2>Implemented Post, Profile, Blog Features</h2>
                <h2>Tech Stack used: <span>React, Node, MongoDb, Material UI, CSS, NX</span></h2>
                <button className='btn_mr'><a href='https://halingo.be' target="_blank" rel='noreferrer'>Visit Website to new tab</a></button>
                </div>
            </div>


            <div className='project' data-aos ="fade-right">    
                <img src={proj2} alt="project1"  />
                     <div className="overlay overlayLeft">  
                   
                     <h1>BarkMeow Heroes</h1>
                     <h2>NFT Landing Page</h2>
                <h2>Tech Stack used: <span>React, HTML, CSS</span></h2>
                <button className='btn_mr'><a href='https://barkmeowheroeshq.com' target="_blank" rel='noreferrer'>Visit Website to new tab</a></button>
                </div>
            </div>

            <div className='project' data-aos ="fade-left">    
                <img src={proj4} alt="project1"  />
                     <div className="overlay overlayLeft">  
                     <h1>This Website</h1>
                     <h2>MY Website</h2>
                <h2>Tech Stack used: <span>React, HTML, CSS3, JQuery</span></h2>
                <button className='btn_mr'> <a href='https://github.com/Alex-Xandre/myportfolio' target="_blank" rel='noreferrer'>Visit Github Repisotory</a></button>
                </div>
            </div>
  

        </div>

        
        </section>

        <section className='services_section'  id = 'service' >
        <h1 className='services-title' data-aos ="fade-up" style={{opacity:'.3'}}> 

<Typewriter

        onInit={(typewriter)=> {

        typewriter

        .typeString("Services")
        .start()
        .pauseFor(300)
        }}

        />
 </h1>
      
            <div className='services-container' data-aos ="fade-up" >
            <img src={check} alt='check icon'/>
                <h2>Full Stack Web development</h2>
                <p> <span></span>Modify/ Create a Full stack Web App </p>
            </div>
            <div className='services-container'data-aos ="fade-up" >
            <img src={check} alt='check icon'/>
                <h2>Front End development</h2>
                <p> <span></span>Modify/ Create a Front End Website </p>
            </div>
            <div className='services-container'data-aos ="fade-up" >
            <img src={check} alt='check icon'/>
                <h2>Back End development</h2>
                <p> <span></span>Modify/ Create a Backend of a Website </p>
            </div>
            <div className='services-container'data-aos ="fade-up" >
            <img src={check} alt='check icon'/>
                <h2>Web Design</h2>
                <p>Create a Website design</p>
            </div>
            <div className='services-container'data-aos ="fade-up" >
            <img src={check} alt='check icon'/>
                <h2>Mobile App Development</h2>
                <p>Implement a full stack mobile app</p>
            </div>

            <div className='services-container'data-aos ="fade-up" >
            <img src={check} alt='check icon'/>
                <h2>Software Development</h2>
                <p>Software Development using Java</p>
            </div>

            <div className='services-container' data-aos ="fade-up">
            <img src={check} alt='check icon'/>
                <h2>Discord Moderator</h2>
                <p>Be a moderator to a discord channel</p>
            </div>
            
            <div className='services-container'data-aos ="fade-up">
            <img src={check} alt='check icon'/>
                <h2>Video Editing</h2>
                <p>Edit short videos for Blogs</p>
            </div>
     
       




       
        </section>

        <section className='contact_section'   id = 'contact' > 
        <h1 className='services-title'  data-aos ="fade-up" style={{opacity:'.3'}}> 

<Typewriter

        onInit={(typewriter)=> {

        typewriter

        .typeString("Contact Me")
        .start()
        .pauseFor(300)
        }}

        />
 </h1>

        <div className='service_more'  data-aos ="fade-left" >
            <h3 style={{fontWeight:'500'}}>Get in touch and let us discuss the project you have in mind on <span>    <a href="https://web.facebook.com/xander.micua.9" target="_blank" rel='noreferrer'>Facebook</a> </span> </h3>
        </div>

        <div className='socialmedia_footer' data-aos ="fade-left">
            <h2>Social Account Links:</h2> 
            
            <a href="https://www.linkedin.com/in/alexander-micua-04657a217/" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
             <a href="https://github.com/Alex-Xandre" target="_blank" rel='noreferrer'> <i className="fa-brands fa-github"></i></a>
          <a href="https://www.instagram.com/xndrmcua/" target="_blank" rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
         <a href="https://web.facebook.com/xander.micua.9" target="_blank" rel='noreferrer'> <i className="fa-brands fa-facebook" ></i>
          </a>
        </div>
      

            <p style={{letterSpacing:'1px'}}>Made with React by Alex with ♡♡♡<br/><span>  All Right Reserve 2021</span></p>
        </section>

       </div>
    
       </StyledApp>
   </ThemeProvider>
    
    
  )
}

export default Home