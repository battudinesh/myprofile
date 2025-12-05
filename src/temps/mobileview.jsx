import * as stylex from '@stylexjs/stylex';
import {Mail,PhoneCall,LinkedinIcon,Github,Download,User,Briefcase,Code,Languages,Brain, Users, Zap,Phone,MapPin} from "lucide-react";
import { useState } from 'react';
function Mobile() {
  const [view,setview]=useState(false)
  const data="Customer & Provider apps using React Native.Features: Real-time tracking, ride booking."
  const portion=data.slice(0,90)+'...' 
  return (
    <section {...stylex.props(styles.page)}>
      <div {...stylex.props(styles.container)}>

        <div {...stylex.props(styles.cont1)}>
          <img {...stylex.props(styles.image)} src="https://media.licdn.com/dms/image/v2/D5635AQE5E6LKrdxDoA/profile-framedphoto-shrink_400_400/B56ZfwIgVcGoAc-/0/1752080451255?e=1765371600&v=beta&t=k4BHWryf99j2ISqez7tl0OLKYt4IfX80j4vp_YNDj_E" alt='dinesh kumar'/>
          <div {...stylex.props(styles.headertext)}>
            <h2 style={{color:'white',margin:'0'}}>DINESH KUMAR L</h2>
            <h3 style={{color:'white',margin:'0'}}>Jr.Software Developer</h3>
            <button {...stylex.props(styles.btn)}onClick={() => window.open("/battudinesh.pdf")}>
              <Download size={16} /> Download Resume
            </button>

          
          </div>

          <div  {...stylex.props(styles.links)}>
            <h3 {...stylex.props(styles.h3tags)} style={{color:'white'}}><Phone size={17} /> Contact</h3>
            <a {...stylex.props(styles.link)}  href="mailto:battudineshkumar123@gmail.com">
              <Mail size={16} /> battudineshkumar123@gmail.com 
            </a>
            <p></p>
            

            <a {...stylex.props(styles.link)} href="tel:7397131053" >
              <PhoneCall size={14} /> +91 7397131053
            </a>
          </div>


          <div {...stylex.props(styles.card)}>
            <h3 {...stylex.props(styles.h3tags)}>
              <MapPin size={18} /> Location
            </h3>
            <p style={{marginLeft:'13px',marginTop:0,marginBottom:0}} {...stylex.props(styles.text)}>Arakkonam, Tamil Nadu, India</p>
          </div>


            <div  {...stylex.props(styles.links)} >
              <h3 {...stylex.props(styles.h3tags)} style={{color:'white'}}>🌐Social Media</h3>
              <a style={{marginLeft:'13px'}}{...stylex.props(styles.link)}href="https://www.linkedin.com/public-profile/settings" target="_blank" >
                <LinkedinIcon size={19} />  LinkedIn  |
              </a>

              <a {...stylex.props(styles.link)}href="https://github.com/battudinesh?tab=repositories" target="_blank" >
                <Github size={18} /> GitHub
              </a>
            </div>

            <div {...stylex.props(styles.card)}>
              <h3 {...stylex.props(styles.h3tags)}><Code size={18} /> Key Skills</h3>
              <ul {...stylex.props(styles.text,styles.list)}>
                <li {...stylex.props(styles.li)}>Python, JavaScript,Html ,Css</li>
                <li {...stylex.props(styles.li)}>Django, React,React Native, Android SDK,</li>
                <li {...stylex.props(styles.li)}>MySQL, REST API, Firebase</li>
                <li {...stylex.props(styles.li)}>Git, GitHub, Linux Basics</li>
              </ul>
            </div>            

            <div {...stylex.props(styles.card)}>
              <h3><Languages size={18} /> Languages</h3>
              <p {...stylex.props(styles.text)}>✅ Tamil : Read/Write/Speak</p>
              <p {...stylex.props(styles.text)}>✅ English : Read/Write/Speak</p>
              <p {...stylex.props(styles.text)}>✅ Telugu : Speak</p>
            </div>
            
            <div {...stylex.props(styles.card)}>
              <h3><User size={18} /> Soft Skills</h3>

              <p {...stylex.props(styles.text)}>
                <Brain size={16} /> Problem Solving
              </p>

              <p {...stylex.props(styles.text)}>
                <Users size={16} /> Team Collaboration
              </p>

              <p {...stylex.props(styles.text)}>
                <Zap size={16} /> Fast Learner
              </p>
            </div>

            <div style={{color:'white',bottom:0,marginTop: 'auto',}} >
              <p {...stylex.props(styles.text)}>© 2025 | Dinesh Kumar - Portfolio</p>
            </div>

        </div>

               {/* 2nd container */}


        <div {...stylex.props(styles.cont2)}>
            <div {...stylex.props(styles.card2)}>
                <h3> Summary</h3>
                <p>I’m a dedicated Junior Software Developer with 1 year of experience in building dynamic web and mobile applications at 
                  Edbrook Private Limited using Django, React Native, JavaScript
                  and MySQL.
                </p>
              </div>


              <div {...stylex.props(styles.card2)}>
                <h3><Briefcase size={18} /> Experience</h3>
                <p><b>Edbrook Private Limited</b></p>
                <p>Junior Software Developer</p>
                <p>Sep 2023 – Sep 2024</p>

                <ul >
                  <li>Developed web & mobile apps using Django & React Native</li>
                  <li>Integrated APIs such as Google Maps and Firebase</li>
                  <li>Improved performance and UI/UX</li>
                </ul>
              </div>

              <div {...stylex.props(styles.card2)}>
                <h3>🚀 Projects</h3>

                <p><b>Clap Solutions Website</b></p>
                <p>Built using Django + Bootstrap</p>

                <p><b>Clap Ride Apps</b></p>

                <p>{view?data:portion}</p>

                <a
                  href="https://github.com"
                  target="_blank"
                  {...stylex.props(styles.projectLink)}
                >
                  View on GitHub
                </a>
                <button {...stylex.props(styles.viewbtn)} style={{display:'block',margin:"auto"}} onClick={()=>setview(!view)}>{view?'close':'view'}</button>
              </div>


            <div {...stylex.props(styles.card2)}>
              <h3>🎓 Education</h3>
              <p><b>M.Sc Physics</b> – Madras University  2017 – 2019</p>
              <p>
                <b>B.Ed</b> – Annamalai College of Education (2019 – 2021)
              </p>
            </div>


        </div>

      </div>
    </section>
  );
}

export default Mobile;

const styles = stylex.create({
  page: {
    margin: 0,
    minHeight: '100vh',
    width: '100%',
  },

  container: {
    display: 'grid',
    gridTemplateColumns: '35% 65%', 
  },

  cont1: {
    backgroundColor: '#151212',
    minHeight: '100vh',
    padding:'20px',
     display: 'flex',
  flexDirection: 'column',
  },

  cont2: {
    backgroundColor: '#ad9d9d',
    minHeight: '100vh',
  },
  image: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    borderStyle: "3px solid white",
    display: "block",        
    margin: "20px auto",
     transition: "all 0.4s ease", 

  ':hover': {
    boxShadow: "0 0 20px #00f2ff", 
    transform: "scale(1.05)",
    cursor: "pointer",

  }
  },
  headertext: {
        gap: '2px',
        display: 'flex',
        fontWeight: 'bold',
        textAlign: 'center',
        flexDirection: 'column',
        color: 'white',
        fontSize:'13px',


    },
  btn: {
    borderStyle: "none",
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: "white",
    color: "#111827",
    maxWidth: "200px",
    alignSelf:"center",
  },
  links: {
    gap: "16px",
  },
  link: {
    color: "#ebedf4ff",
    fontSize:'16px',

    textDecoration: "none",
    ':hover': {
      textDecoration: "underline",
    },
    '@media(max-width:820px)':{
      fontSize:'12px'

    }
  },
    card: {
    maxWidth: "70vw",
    width: "100%",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    textAlign: "left",
    color:'white',
    
  },
  h3tags:{
    '@media(max-width:820px)':{
    marginTop:'20px',
    marginBottom:'10px',
    }
  },
  text:{
    '@media(max-width:820px)':{
      fontSize:'12px',
    }

  },
    list: {
    paddingLeft: "20px",
  },
  li: {
    marginBottom: "8px",  
    lineHeight: 1.6,
  },
  card2: {
    maxWidth: "60vw",
    width: "100%",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    textAlign: "left",
    color:'white',
    margin:'20px',
    padding:'5px',
    transition: "all 0.4s ease", 
    minHeight:'20vh',

    ':hover': {
      boxShadow: "0 0 20px #00f2ff", 
      transform: "scale(1.05)",
      cursor: "pointer",

    }
  },
  viewbtn:{
    backgroundColor:"#ad9d9d",
    color:'#ffff',
    borderRadius:'10px',
    borderStyle:'none',
  }

});
