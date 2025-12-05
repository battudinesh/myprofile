import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import {
  Mail,
  PhoneCall,
  LinkedinIcon,
  Github,
  Download,
  User,
  Briefcase,
  Code,
  Languages,
} from "lucide-react";

export default function Card() {
  return (
    <section {...stylex.props(styles.page,styles.text)}>

      <header {...stylex.props(styles.header)}>
        <img
          {...stylex.props(styles.image)}
          src="https://media.licdn.com/dms/image/v2/D5635AQE5E6LKrdxDoA/profile-framedphoto-shrink_400_400/B56ZfwIgVcGoAc-/0/1752080451255?e=1765371600&v=beta&t=k4BHWryf99j2ISqez7tl0OLKYt4IfX80j4vp_YNDj_E"
          alt="Dinesh Kumar"
        />

        <div {...stylex.props(styles.headertext)}>
          <h2 style={{margin:'0px'}}>DINESH KUMAR L</h2>
          <h3 style={{margin:'0px'}}>Jr.Software Developer</h3>

          <div  {...stylex.props(styles.links)}>
            <a {...stylex.props(styles.link)}  href="mailto:battudineshkumar123@gmail.com">
              <Mail size={16} /> battudineshkumar123@gmail.com
            </a>

            <a {...stylex.props(styles.link)} href="tel:7397131053" >
              <PhoneCall size={14} /> +91 7397131053
            </a>
          </div>

          <div {...stylex.props(styles.links)} >
            <a {...stylex.props(styles.link)}href="https://www.linkedin.com/public-profile/settings" target="_blank" >
              <LinkedinIcon size={19} />  LinkedIn
            </a>/

            <a {...stylex.props(styles.link)}href="https://github.com/battudinesh?tab=repositories" target="_blank" >
              <Github size={18} /> GitHub
            </a>
          </div>

          <button
            {...stylex.props(styles.btn)}
            onClick={() => window.open("/battudinesh.pdf")}
          >
            <Download size={16} /> Download Resume
          </button>
        </div>
      </header>

      <div {...stylex.props(styles.container)}>

        {/* SUMMARY */}
        <div {...stylex.props(styles.card)}>
          <h3><User size={18} /> Summary</h3>
          <p>
            I’m a dedicated Junior Software Developer with 1 year of
            experience in building dynamic web and mobile applications at
            Edbrook Private Limited using Django, React Native, JavaScript
            and MySQL.
          </p>
        </div>

        {/* EDUCATION */}
        <div {...stylex.props(styles.card)}>
          <h3>🎓 Education</h3>
          <p><b>M.Sc Physics</b> – Madras University  2017 – 2019</p>
          <p>
            <b>B.Ed</b> – Annamalai College of Education (2019 – 2021)
          </p>
        </div>

        {/* EXPERIENCE */}
        <div {...stylex.props(styles.card)}>
          <h3><Briefcase size={18} /> Experience</h3>
          <p><b>Edbrook Private Limited</b></p>
          <p>Junior Software Developer</p>
          <p>Sep 2023 – Sep 2024</p>

          <ul>
            <li>Developed web & mobile apps using Django & React Native</li>
            <li>Integrated APIs such as Google Maps and Firebase</li>
            <li>Improved performance and UI/UX</li>
          </ul>
        </div>

        {/* SKILLS */}
        <div {...stylex.props(styles.card)}>
          <h3><Code size={18} /> Key Skills</h3>
          <ul>
            <li>Python, JavaScript,Html ,Css</li>
            <li>Django, React,React Native, Android SDK,</li>
            <li>MySQL, REST API, Firebase</li>
            <li>Git, GitHub, Linux Basics</li>
          </ul>
        </div>

        {/* PROJECTS */}
        <div {...stylex.props(styles.card)}>
          <h3>🚀 Projects</h3>

          <p><b>Clap Solutions Website</b></p>
          <p>Built using Django + Bootstrap</p>

          <p><b>Clap Ride Apps</b></p>
          <p>
            Customer & Provider apps using React Native .
            Features: Real-time tracking, ride booking.
          </p>

          <a
            href="https://github.com"
            target="_blank"
            {...stylex.props(styles.projectLink)}
          >
            View on GitHub
          </a>
        </div>

        {/* LANGUAGES */}
        <div {...stylex.props(styles.card)}>
          <h3><Languages size={18} /> Languages</h3>
          <p>✅ Tamil : Read/Write/Speak</p>
          <p>✅ English : Read/Write/Speak</p>
          <p>✅ Telugu : Speak</p>
        </div>

      </div>

      <footer {...stylex.props(styles.footer)}>
        <p>© 2025 | Dinesh Kumar - Portfolio</p>
      </footer>
    </section>
  );
}


const styles = stylex.create({
  page: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#f9fafb",
    display: "flex",
    flexDirection: "column",
  },

     header: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    backgroundColor: "#111827",
    width: "100%",

        gridTemplateColumns: {
            default: '1fr',
            '@media (min-width: 768px)': 'auto 1fr',
        },
    },

  image: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    borderStyle: "3px solid white",
    '@media(max-width:450px)':{
      width: "100px",
      height: "100px",
      marginRight:'20px',

    }
  },

  links: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent:'space-around',
    alignItems:'center',

    
  },link: {
  color: "#ebedf4ff",
  textDecoration: "none",
  fontWeight: "600",
  ':hover': {
    textDecoration: "underline",
  }
},


  container: {
    padding: "40px 20px",
    display: "grid",
    gap: "24px",
    justifyItems: "center",

 
  },

  card: {
    backgroundColor: "#ad9d9d",
    padding: "20px",
    borderRadius: "15px",
    maxWidth: "73vw",
    width: "100%",
    // boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "all 0.4s ease", 

    textAlign: "left",
    ':hover': {
      boxShadow: "0 0 20px #00f2ff", 
      transform: "scale(1.05)",
      cursor: "pointer",

    }
  },

  footer: {
    backgroundColor: "#111827",
    color: "white",
    padding: "20px",
    textAlign: "center",
    marginTop: "auto",
  },

  projectLink: {
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: "bold",
  },

  btn: {
    // padding: "10px 16px",
    borderRadius: "8px",
    borderStyle: "none",
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: "white",
    color: "#111827",
    maxWidth: "200px",
    alignSelf:"center"
  },
  headertext: {
    gap: '2px',
    display: 'flex',
    fontWeight: 'bold',
    textAlign: 'center',
    flexDirection: 'column',
    color: 'white',
    marginRight:'50px'

  },
  text:{
    '@media(max-width:450px)':{
      fontSize:'12px',
    },
    '@media(max-width:360px)':{
      fontSize:'10px',
    }

  },

});
