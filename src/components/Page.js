import React, { Component } from 'react'
import info from './Info';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Pdf from '../Documents/resume.pdf';
import GithubCorner from 'react-github-corner';
import { FaMedium } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import{FaInstagramSquare} from 'react-icons/fa'
import {FaGithubSquare} from'react-icons/fa'
import {HiExternalLink} from'react-icons/hi'
import {AiFillGithub} from'react-icons/ai'
import {RiYoutubeLine} from'react-icons/ri'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup' 
import ListGroupItem from 'react-bootstrap/ListGroupItem' 
import CardDeck from 'react-bootstrap/CardDeck'
export default class Page extends Component{
    constructor(props) {
      super(props);
      this.state = { 
         feedback: '',
         name: '', 
         email: '' ,
         project:[]
         
       };
    }
     componentDidMount=()=>{
      Aos.init({duration:2000})
      this.setState({project:info})
      let options = {}
      let sections=document.querySelectorAll('.box1')
      let observer=  new IntersectionObserver(function(entries, observer){
          entries.forEach(entry=>{
            if(!entry.isIntersecting){
              return
             }
             entry.target.classList.toggle("lis");
              observer.unobserve(entry.target)
          })
      },options)
          sections.forEach(section=>{
            observer.observe(section)
           })
      let sections2=document.querySelectorAll('.box2')
      let observer2=  new IntersectionObserver(function(entries, observer2){
           entries.forEach(entry=>{
             if(!entry.isIntersecting){
               return
             }
           entry.target.classList.toggle("another");
             observer2.unobserve(entry.target)
            })
           },options)
            sections2.forEach(section=>{
              observer2.observe(section)
            })
    }
     
    handleSubmit= (e)=>{
      e.preventDefault();
      const templateId = "template_OSnwlhmv";;
      this.setState({name:'',feedback:'',email:''})
      this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
      console.log('sent')
    }

    handleChange=(event) =>{ 
      const{name,value}=event.target
      this.setState({[name]:value})
    }

    sendFeedback= (templateId, variables) =>{
      window.emailjs.send(
        'gmail', templateId,
        variables
      ).then(res => {
          console.log('Email successfully sent!')
      })
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
   
    onResumeClick() {
      window.open(Pdf);
    }

    git=()=>{
      window.location.href = "http://www.w3schools.com";
    }
    
    
  render(){ 
    return(
      <>
        <GithubCorner onClick={this.git}id='git'bannerColor="#2a6977" href='https://github.com/diana2341/portfolio' />
        <div className='nav'>
          <div className='tags'>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
          </div>
        </div>
        <div data-aos="fade-right" id="mySidenav" className='sidenav'>
          <div className="box-nav"> 
            <a href='#home'>Home</a>
            <img alt='pic' className='icon home'src={require('../imgs/home.png')}/>
            <a href='#about'>About</a>
            <img alt='pic' className='icon woman'src={require('../imgs/woman.png')}/>
            <a href='#projects'>Projects</a>
            <img alt='pic' className='icon computer'src={require('../imgs/computer.png')}/> 
            <a href='#contact'>Contact</a>
            <img alt='pic' className='icon contact'src={require('../imgs/contact.png')}/>
          </div> 
        </div> 
        <section id='home'className="section">
          <div className="box">
            <h2  className="title intro">
              Hi, My name is
              Diana Ponce
            </h2>
            <p className='title intro-se'>Full-Stack Developer</p>
            <svg id="mee"width="1532"  viewBox="0 0 1532 747" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="undraw_visualization_c2ps 1" clipPath="url(#clip0)" filter="url(#filter0_d)">
              <g id="undraw_hacker_mind_6y85 1 1">
              <g id="undraw hacker mind 6y85 1">
              <path id="Vector" d="M1037.2 84.6489H1027.19V102.072H1037.2V84.6489Z" fill="#47B0C8"/>
              <path id="Vector 2" d="M1071.23 80.2932H1061.23V97.7162H1071.23V80.2932Z" fill="#47B0C8"/>
              <path id="Vector 3" d="M1089.25 80.2932H1079.24V97.7162H1089.25V80.2932Z" fill="#47B0C8"/>
              <path id="Vector 4" d="M1089.25 132.563H1079.24V149.985H1089.25V132.563Z" fill="#47B0C8"/>
              <path id="Vector 5" d="M1109.27 106.428H1099.26V123.851H1109.27V106.428Z" fill="#47B0C8"/>
              <path id="Vector 6" d="M1109.27 134.74H1099.26V152.164H1109.27V134.74Z" fill="#47B0C8"/>
              <path id="Vector 7" d="M1089.25 189.187H1079.24V206.611H1089.25V189.187Z" fill="#47B0C8"/>
              <path id="Vector 8" d="M1109.27 217.5H1099.26V234.923H1109.27V217.5Z" fill="#47B0C8"/>
              <path id="Vector 9" d="M1089.25 324.216H1079.24V341.639H1089.25V324.216Z" fill="#47B0C8"/>
              <path id="Vector 10" d="M1071.23 217.5H1061.23V234.923H1071.23V217.5Z" fill="#47B0C8"/>
              <path id="Vector 11" d="M1037.2 112.961H1027.19V130.384H1037.2V112.961Z" fill="#47B0C8"/>
              <path id="Vector 12" d="M1037.2 385.197H1027.19V402.62H1037.2V385.197Z" fill="#47B0C8"/>
              <path id="Vector 13" d="M1037.2 441.821H1027.19V459.244H1037.2V441.821Z" fill="#47B0C8"/>
              <path id="Vector 14" d="M1037.2 470.134H1027.19V487.557H1037.2V470.134Z" fill="#47B0C8"/>
              <path id="Vector 15" d="M1037.2 143.452H1023.19V145.63H1037.2V143.452Z" fill="#47B0C8"/>
              <path id="Vector 16" d="M1091.25 169.586H1077.24V171.764H1091.25V169.586Z" fill="#47B0C8"/>
              <path id="Vector 17" d="M1037.2 282.836H1023.19V285.014H1037.2V282.836Z" fill="#47B0C8"/>
              <path id="Vector 18" d="M1037.2 306.792H1023.19V308.971H1037.2V306.792Z" fill="#47B0C8"/>
              <path id="Vector 19" d="M1091.25 446.177H1077.24V448.355H1091.25V446.177Z" fill="#47B0C8"/>
              <path id="Vector 20" d="M1075.24 498.447H1061.23V500.624H1075.24V498.447Z" fill="#47B0C8"/>
              <path id="Vector 21" d="M1027.19 163.053V167.408H1031.2V176.12H1027.19V180.475H1037.2V163.053H1027.19Z" fill="#47B0C8"/>
              <path id="Vector 22" d="M1061.23 132.563V136.918H1065.23V145.63H1061.23V149.985H1071.23V132.563H1061.23Z" fill="#47B0C8"/>
              <path id="Vector 23" d="M1099.26 160.874V165.231H1103.26V173.943H1099.26V178.298H1109.27V160.874H1099.26Z" fill="#47B0C8"/>
              <path id="Vector 24" d="M1099.26 245.813V250.168H1103.26V258.88H1099.26V263.235H1109.27V245.813H1099.26Z" fill="#47B0C8"/>
              <path id="Vector 25" d="M1099.26 274.124V278.481H1103.26V287.193H1099.26V291.548H1109.27V274.124H1099.26Z" fill="#47B0C8"/>
              <path id="Vector 26" d="M1099.26 187.01V191.365H1103.26V200.076H1099.26V204.433H1109.27V187.01H1099.26Z" fill="#47B0C8"/>
              <path id="Vector 27" d="M1079.24 106.428V110.784H1083.25V119.495H1079.24V123.851H1089.25V106.428H1079.24Z" fill="#47B0C8"/>
              <path id="Vector 28" d="M1089.25 245.813H1079.24V263.235H1089.25V245.813Z" fill="#47B0C8"/>
              <path id="Vector 29" d="M1089.25 298.082H1079.24V315.504H1089.25V298.082Z" fill="#47B0C8"/>
              <path id="Vector 30" d="M1079.24 271.947V276.302H1083.25V285.014H1079.24V289.37H1089.25V271.947H1079.24Z" fill="#47B0C8"/>
              <path id="Vector 31" d="M1061.23 160.874V165.231H1065.23V173.943H1061.23V178.298H1071.23V160.874H1061.23Z" fill="#47B0C8"/>
              <path id="Vector 32" d="M1061.23 189.187V193.544H1065.23V202.254H1061.23V206.611H1071.23V189.187H1061.23Z" fill="#47B0C8"/>
              <path id="Vector 33" d="M1071.23 274.124H1061.23V291.548H1071.23V274.124Z" fill="#47B0C8"/>
              <path id="Vector 34" d="M1061.23 245.813V250.168H1065.23V258.88H1061.23V263.235H1071.23V245.813H1061.23Z" fill="#47B0C8"/>
              <path id="Vector 35" d="M1071.23 330.75H1061.23V348.172H1071.23V330.75Z" fill="#47B0C8"/>
              <path id="Vector 36" d="M1061.23 302.437V306.792H1065.23V315.504H1061.23V319.861H1071.23V302.437H1061.23Z" fill="#47B0C8"/>
              <path id="Vector 37" d="M1071.23 387.374H1061.23V404.798H1071.23V387.374Z" fill="#47B0C8"/>
              <path id="Vector 38" d="M1089.25 383.019H1079.24V400.441H1089.25V383.019Z" fill="#47B0C8"/>
              <path id="Vector 39" d="M1061.23 359.061V363.418H1065.23V372.13H1061.23V376.485H1071.23V359.061H1061.23Z" fill="#47B0C8"/>
              <path id="Vector 40" d="M1099.26 359.061V363.418H1103.26V372.13H1099.26V376.485H1109.27V359.061H1099.26Z" fill="#47B0C8"/>
              <path id="Vector 41" d="M1211.37 106.428H1201.36V123.851H1211.37V106.428Z" fill="#47B0C8"/>
              <path id="Vector 42" d="M1211.37 134.74H1201.36V152.164H1211.37V134.74Z" fill="#47B0C8"/>
              <path id="Vector 43" d="M1211.37 217.5H1201.36V234.923H1211.37V217.5Z" fill="#47B0C8"/>
              <path id="Vector 44" d="M1201.36 160.874V165.231H1205.36V173.943H1201.36V178.298H1211.37V160.874H1201.36Z" fill="#47B0C8"/>
              <path id="Vector 45" d="M1201.36 245.813V250.168H1205.36V258.88H1201.36V263.235H1211.37V245.813H1201.36Z" fill="#47B0C8"/>
              <path id="Vector 46" d="M1201.36 274.124V278.481H1205.36V287.193H1201.36V291.548H1211.37V274.124H1201.36Z" fill="#47B0C8"/>
              <path id="Vector 47" d="M1201.36 187.01V191.365H1205.36V200.076H1201.36V204.433H1211.37V187.01H1201.36Z" fill="#47B0C8"/>
              <path id="Vector 48" d="M1201.36 359.061V363.418H1205.36V372.13H1201.36V376.485H1211.37V359.061H1201.36Z" fill="#47B0C8"/>
              <path id="Vector 49" d="M1071.23 444H1061.23V461.422H1071.23V444Z" fill="#47B0C8"/>
              <path id="Vector 50" d="M1089.25 411.332H1079.24V428.754H1089.25V411.332Z" fill="#47B0C8"/>
              <path id="Vector 51" d="M1071.23 518.048H1061.23V535.47H1071.23V518.048Z" fill="#47B0C8"/>
              <path id="Vector 52" d="M1089.25 465.779H1079.24V483.201H1089.25V465.779Z" fill="#47B0C8"/>
              <path id="Vector 53" d="M1061.23 415.687V420.042H1065.23V428.754H1061.23V433.111H1071.23V415.687H1061.23Z" fill="#47B0C8"/>
              <path id="Vector 54" d="M1061.23 548.538V552.893H1065.23V561.605H1061.23V565.96H1071.23V548.538H1061.23Z" fill="#47B0C8"/>
              <path id="Vector 55" d="M1181.34 80.2932H1171.33V97.7162H1181.34V80.2932Z" fill="#47B0C8"/>
              <path id="Vector 56" d="M1181.34 217.5H1171.33V234.923H1181.34V217.5Z" fill="#47B0C8"/>
              <path id="Vector 57" d="M1185.34 498.447H1171.33V500.624H1185.34V498.447Z" fill="#47B0C8"/>
              <path id="Vector 58" d="M1171.33 132.563V136.918H1175.33V145.63H1171.33V149.985H1181.34V132.563H1171.33Z" fill="#47B0C8"/>
              <path id="Vector 59" d="M1171.33 160.874V165.231H1175.33V173.943H1171.33V178.298H1181.34V160.874H1171.33Z" fill="#47B0C8"/>
              <path id="Vector 60" d="M1171.33 189.187V193.544H1175.33V202.254H1171.33V206.611H1181.34V189.187H1171.33Z" fill="#47B0C8"/>
              <path id="Vector 61" d="M1181.34 274.124H1171.33V291.548H1181.34V274.124Z" fill="#47B0C8"/>
              <path id="Vector 62" d="M1171.33 245.813V250.168H1175.33V258.88H1171.33V263.235H1181.34V245.813H1171.33Z" fill="#47B0C8"/>
              <path id="Vector 63" d="M1181.34 330.75H1171.33V348.172H1181.34V330.75Z" fill="#47B0C8"/>
              <path id="Vector 64" d="M1171.33 302.437V306.792H1175.33V315.504H1171.33V319.861H1181.34V302.437H1171.33Z" fill="#47B0C8"/>
              <path id="Vector 65" d="M1181.34 387.374H1171.33V404.798H1181.34V387.374Z" fill="#47B0C8"/>
              <path id="Vector 66" d="M1171.33 359.061V363.418H1175.33V372.13H1171.33V376.485H1181.34V359.061H1171.33Z" fill="#47B0C8"/>
              <path id="Vector 67" d="M1181.34 444H1171.33V461.422H1181.34V444Z" fill="#47B0C8"/>
              <path id="Vector 68" d="M1181.34 518.048H1171.33V535.47H1181.34V518.048Z" fill="#47B0C8"/>
              <path id="Vector 69" d="M1171.33 415.687V420.042H1175.33V428.754H1171.33V433.111H1181.34V415.687H1171.33Z" fill="#47B0C8"/>
              <path id="Vector 70" d="M1171.33 548.538V552.893H1175.33V561.605H1171.33V565.96H1181.34V548.538H1171.33Z" fill="#47B0C8"/>
              <path id="Vector 71" d="M1229.38 80.2932H1219.37V97.7162H1229.38V80.2932Z" fill="#47B0C8"/>
              <path id="Vector 72" d="M1229.38 217.5H1219.37V234.923H1229.38V217.5Z" fill="#47B0C8"/>
              <path id="Vector 73" d="M1233.39 498.447H1219.37V500.624H1233.39V498.447Z" fill="#47B0C8"/>
              <path id="Vector 74" d="M1219.37 132.563V136.918H1223.38V145.63H1219.37V149.985H1229.38V132.563H1219.37Z" fill="#47B0C8"/>
              <path id="Vector 75" d="M1219.37 160.874V165.231H1223.38V173.943H1219.37V178.298H1229.38V160.874H1219.37Z" fill="#47B0C8"/>
              <path id="Vector 76" d="M1219.37 189.187V193.544H1223.38V202.254H1219.37V206.611H1229.38V189.187H1219.37Z" fill="#47B0C8"/>
              <path id="Vector 77" d="M1229.38 274.124H1219.37V291.548H1229.38V274.124Z" fill="#47B0C8"/>
              <path id="Vector 78" d="M1219.37 245.813V250.168H1223.38V258.88H1219.37V263.235H1229.38V245.813H1219.37Z" fill="#47B0C8"/>
              <path id="Vector 79" d="M1229.38 330.75H1219.37V348.172H1229.38V330.75Z" fill="#47B0C8"/>
              <path id="Vector 80" d="M1219.37 302.437V306.792H1223.38V315.504H1219.37V319.861H1229.38V302.437H1219.37Z" fill="#47B0C8"/>
              <path id="Vector 81" d="M1229.38 387.374H1219.37V404.798H1229.38V387.374Z" fill="#47B0C8"/>
              <path id="Vector 82" d="M1219.37 359.061V363.418H1223.38V372.13H1219.37V376.485H1229.38V359.061H1219.37Z" fill="#47B0C8"/>
              <path id="Vector 83" d="M1229.38 444H1219.37V461.422H1229.38V444Z" fill="#47B0C8"/>
              <path id="Vector 84" d="M1229.38 518.048H1219.37V535.47H1229.38V518.048Z" fill="#47B0C8"/>
              <path id="Vector 85" d="M1219.37 415.687V420.042H1223.38V428.754H1219.37V433.111H1229.38V415.687H1219.37Z" fill="#47B0C8"/>
              <path id="Vector 86" d="M1219.37 548.538V552.893H1223.38V561.605H1219.37V565.96H1229.38V548.538H1219.37Z" fill="#47B0C8"/>
              <path id="Vector 87" d="M1079.24 518.048V522.403H1083.25V531.115H1079.24V535.47H1089.25V518.048H1079.24Z" fill="#47B0C8"/>
              <path id="Vector 88" d="M1079.24 546.361V550.716H1083.25V559.427H1079.24V563.783H1089.25V546.361H1079.24Z" fill="#47B0C8"/>
              <path id="Vector 89" d="M1027.19 217.5V221.855H1031.2V230.567H1027.19V234.923H1037.2V217.5H1027.19Z" fill="#47B0C8"/>
              <path id="Vector 90" d="M1027.19 328.572V332.928H1031.2V341.639H1027.19V345.994H1037.2V328.572H1027.19Z" fill="#47B0C8"/>
              <path id="Vector 91" d="M1027.19 356.884V361.24H1031.2V369.952H1027.19V374.307H1037.2V356.884H1027.19Z" fill="#47B0C8"/>
              <path id="Vector 92" d="M1027.19 413.51V417.865H1031.2V426.576H1027.19V430.932H1037.2V413.51H1027.19Z" fill="#47B0C8"/>
              <path id="Vector 93" d="M1027.19 494.09V498.447H1031.2V507.158H1027.19V511.514H1037.2V494.09H1027.19Z" fill="#47B0C8"/>
              <path id="Vector 94" d="M1027.19 518.048V522.403H1031.2V531.115H1027.19V535.47H1037.2V518.048H1027.19Z" fill="#47B0C8"/>
              <path id="Vector 95" d="M1141.3 84.6489H1131.29V102.072H1141.3V84.6489Z" fill="#47B0C8"/>
              <path id="Vector 96" d="M1141.3 112.961H1131.29V130.384H1141.3V112.961Z" fill="#47B0C8"/>
              <path id="Vector 97" d="M1141.3 143.452H1127.29V145.63H1141.3V143.452Z" fill="#47B0C8"/>
              <path id="Vector 98" d="M1141.3 282.836H1127.29V285.014H1141.3V282.836Z" fill="#47B0C8"/>
              <path id="Vector 99" d="M1141.3 306.792H1127.29V308.971H1141.3V306.792Z" fill="#47B0C8"/>
              <path id="Vector 100" d="M1131.29 163.053V167.408H1135.29V176.12H1131.29V180.475H1141.3V163.053H1131.29Z" fill="#47B0C8"/>
              <path id="Vector 101" d="M1131.29 217.5V221.855H1135.29V230.567H1131.29V234.923H1141.3V217.5H1131.29Z" fill="#47B0C8"/>
              <path id="Vector 102" d="M1131.29 328.572V332.928H1135.29V341.639H1131.29V345.994H1141.3V328.572H1131.29Z" fill="#47B0C8"/>
              <path id="Vector 103" d="M1255.41 274.124H1245.4V291.548H1255.41V274.124Z" fill="#47B0C8"/>
              <path id="Vector 104" d="M1255.41 302.437H1245.4V319.861H1255.41V302.437Z" fill="#47B0C8"/>
              <path id="Vector 105" d="M1255.41 332.928H1241.39V335.105H1255.41V332.928Z" fill="#47B0C8"/>
              <path id="Vector 106" d="M1255.41 472.311H1241.39V474.49H1255.41V472.311Z" fill="#47B0C8"/>
              <path id="Vector 107" d="M1255.41 496.269H1241.39V498.447H1255.41V496.269Z" fill="#47B0C8"/>
              <path id="Vector 108" d="M1245.4 352.529V356.884H1249.4V365.596H1245.4V369.952H1255.41V352.529H1245.4Z" fill="#47B0C8"/>
              <path id="Vector 109" d="M1245.4 406.975V411.332H1249.4V420.042H1245.4V424.399H1255.41V406.975H1245.4Z" fill="#47B0C8"/>
              <path id="Vector 110" d="M1245.4 518.048V522.403H1249.4V531.115H1245.4V535.47H1255.41V518.048H1245.4Z" fill="#47B0C8"/>
              <path id="Vector 111" d="M1287.44 84.6489H1277.43V102.072H1287.44V84.6489Z" fill="#47B0C8"/>
              <path id="Vector 112" d="M1321.47 80.2932H1311.46V97.7162H1321.47V80.2932Z" fill="#47B0C8"/>
              <path id="Vector 113" d="M1339.49 80.2932H1329.48V97.7162H1339.49V80.2932Z" fill="#47B0C8"/>
              <path id="Vector 114" d="M1339.49 132.563H1329.48V149.985H1339.49V132.563Z" fill="#47B0C8"/>
              <path id="Vector 115" d="M1359.51 106.428H1349.5V123.851H1359.51V106.428Z" fill="#47B0C8"/>
              <path id="Vector 116" d="M1359.51 134.74H1349.5V152.164H1359.51V134.74Z" fill="#47B0C8"/>
              <path id="Vector 117" d="M1339.49 189.187H1329.48V206.611H1339.49V189.187Z" fill="#47B0C8"/>
              <path id="Vector 118" d="M1359.51 217.5H1349.5V234.923H1359.51V217.5Z" fill="#47B0C8"/>
              <path id="Vector 119" d="M1339.49 324.216H1329.48V341.639H1339.49V324.216Z" fill="#47B0C8"/>
              <path id="Vector 120" d="M1321.47 217.5H1311.46V234.923H1321.47V217.5Z" fill="#47B0C8"/>
              <path id="Vector 121" d="M1287.44 112.961H1277.43V130.384H1287.44V112.961Z" fill="#47B0C8"/>
              <path id="Vector 122" d="M1287.44 385.197H1277.43V402.62H1287.44V385.197Z" fill="#47B0C8"/>
              <path id="Vector 123" d="M1287.44 441.821H1277.43V459.244H1287.44V441.821Z" fill="#47B0C8"/>
              <path id="Vector 124" d="M1287.44 470.134H1277.43V487.557H1287.44V470.134Z" fill="#47B0C8"/>
              <path id="Vector 125" d="M1287.44 143.452H1273.42V145.63H1287.44V143.452Z" fill="#47B0C8"/>
              <path id="Vector 126" d="M1341.49 169.586H1327.47V171.764H1341.49V169.586Z" fill="#47B0C8"/>
              <path id="Vector 127" d="M1287.44 282.836H1273.42V285.014H1287.44V282.836Z" fill="#47B0C8"/>
              <path id="Vector 128" d="M1287.44 306.792H1273.42V308.971H1287.44V306.792Z" fill="#47B0C8"/>
              <path id="Vector 129" d="M1341.49 446.177H1327.47V448.355H1341.49V446.177Z" fill="#47B0C8"/>
              <path id="Vector 130" d="M1325.47 498.447H1311.46V500.624H1325.47V498.447Z" fill="#47B0C8"/>
              <path id="Vector 131" d="M1277.43 163.053V167.408H1281.43V176.12H1277.43V180.475H1287.44V163.053H1277.43Z" fill="#47B0C8"/>
              <path id="Vector 132" d="M1311.46 132.563V136.918H1315.46V145.63H1311.46V149.985H1321.47V132.563H1311.46Z" fill="#47B0C8"/>
              <path id="Vector 133" d="M1349.5 160.874V165.231H1353.5V173.943H1349.5V178.298H1359.51V160.874H1349.5Z" fill="#47B0C8"/>
              <path id="Vector 134" d="M1349.5 245.813V250.168H1353.5V258.88H1349.5V263.235H1359.51V245.813H1349.5Z" fill="#47B0C8"/>
              <path id="Vector 135" d="M1349.5 274.124V278.481H1353.5V287.193H1349.5V291.548H1359.51V274.124H1349.5Z" fill="#47B0C8"/>
              <path id="Vector 136" d="M1349.5 187.01V191.365H1353.5V200.076H1349.5V204.433H1359.51V187.01H1349.5Z" fill="#47B0C8"/>
              <path id="Vector 137" d="M1329.48 106.428V110.784H1333.48V119.495H1329.48V123.851H1339.49V106.428H1329.48Z" fill="#47B0C8"/>
              <path id="Vector 138" d="M1339.49 245.813H1329.48V263.235H1339.49V245.813Z" fill="#47B0C8"/>
              <path id="Vector 139" d="M1339.49 298.082H1329.48V315.504H1339.49V298.082Z" fill="#47B0C8"/>
              <path id="Vector 140" d="M1329.48 271.947V276.302H1333.48V285.014H1329.48V289.37H1339.49V271.947H1329.48Z" fill="#47B0C8"/>
              <path id="Vector 141" d="M1311.46 160.874V165.231H1315.46V173.943H1311.46V178.298H1321.47V160.874H1311.46Z" fill="#47B0C8"/>
              <path id="Vector 142" d="M1311.46 189.187V193.544H1315.46V202.254H1311.46V206.611H1321.47V189.187H1311.46Z" fill="#47B0C8"/>
              <path id="Vector 143" d="M1321.47 274.124H1311.46V291.548H1321.47V274.124Z" fill="#47B0C8"/>
              <path id="Vector 144" d="M1311.46 245.813V250.168H1315.46V258.88H1311.46V263.235H1321.47V245.813H1311.46Z" fill="#47B0C8"/>
              <path id="Vector 145" d="M1321.47 330.75H1311.46V348.172H1321.47V330.75Z" fill="#47B0C8"/>
              <path id="Vector 146" d="M1311.46 302.437V306.792H1315.46V315.504H1311.46V319.861H1321.47V302.437H1311.46Z" fill="#47B0C8"/>
              <path id="Vector 147" d="M1321.47 387.374H1311.46V404.798H1321.47V387.374Z" fill="#47B0C8"/>
              <path id="Vector 148" d="M1339.49 383.019H1329.48V400.441H1339.49V383.019Z" fill="#47B0C8"/>
              <path id="Vector 149" d="M1311.46 359.061V363.418H1315.46V372.13H1311.46V376.485H1321.47V359.061H1311.46Z" fill="#47B0C8"/>
              <path id="Vector 150" d="M1349.5 359.061V363.418H1353.5V372.13H1349.5V376.485H1359.51V359.061H1349.5Z" fill="#47B0C8"/>
              <path id="Vector 151" d="M1461.6 106.428H1451.59V123.851H1461.6V106.428Z" fill="#47B0C8"/>
              <path id="Vector 152" d="M1461.6 134.74H1451.59V152.164H1461.6V134.74Z" fill="#47B0C8"/>
              <path id="Vector 153" d="M1461.6 217.5H1451.59V234.923H1461.6V217.5Z" fill="#47B0C8"/>
              <path id="Vector 154" d="M1451.59 160.874V165.231H1455.6V173.943H1451.59V178.298H1461.6V160.874H1451.59Z" fill="#47B0C8"/>
              <path id="Vector 155" d="M1451.59 245.813V250.168H1455.6V258.88H1451.59V263.235H1461.6V245.813H1451.59Z" fill="#47B0C8"/>
              <path id="Vector 156" d="M1451.59 274.124V278.481H1455.6V287.193H1451.59V291.548H1461.6V274.124H1451.59Z" fill="#47B0C8"/>
              <path id="Vector 157" d="M1451.59 187.01V191.365H1455.6V200.076H1451.59V204.433H1461.6V187.01H1451.59Z" fill="#47B0C8"/>
              <path id="Vector 158" d="M1451.59 359.061V363.418H1455.6V372.13H1451.59V376.485H1461.6V359.061H1451.59Z" fill="#47B0C8"/>
              <path id="Vector 159" d="M1321.47 444H1311.46V461.422H1321.47V444Z" fill="#47B0C8"/>
              <path id="Vector 160" d="M1339.49 411.332H1329.48V428.754H1339.49V411.332Z" fill="#47B0C8"/>
              <path id="Vector 161" d="M1321.47 518.048H1311.46V535.47H1321.47V518.048Z" fill="#47B0C8"/>
              <path id="Vector 162" d="M1339.49 465.779H1329.48V483.201H1339.49V465.779Z" fill="#47B0C8"/>
              <path id="Vector 163" d="M1311.46 415.687V420.042H1315.46V428.754H1311.46V433.111H1321.47V415.687H1311.46Z" fill="#47B0C8"/>
              <path id="Vector 164" d="M1311.46 548.538V552.893H1315.46V561.605H1311.46V565.96H1321.47V548.538H1311.46Z" fill="#47B0C8"/>
              <path id="Vector 165" d="M1431.57 80.2932H1421.56V97.7162H1431.57V80.2932Z" fill="#47B0C8"/>
              <path id="Vector 166" d="M1431.57 217.5H1421.56V234.923H1431.57V217.5Z" fill="#47B0C8"/>
              <path id="Vector 167" d="M1435.58 498.447H1421.56V500.624H1435.58V498.447Z" fill="#47B0C8"/>
              <path id="Vector 168" d="M1421.56 132.563V136.918H1425.57V145.63H1421.56V149.985H1431.57V132.563H1421.56Z" fill="#47B0C8"/>
              <path id="Vector 169" d="M1421.56 160.874V165.231H1425.57V173.943H1421.56V178.298H1431.57V160.874H1421.56Z" fill="#47B0C8"/>
              <path id="Vector 170" d="M1421.56 189.187V193.544H1425.57V202.254H1421.56V206.611H1431.57V189.187H1421.56Z" fill="#47B0C8"/>
              <path id="Vector 171" d="M1431.57 274.124H1421.56V291.548H1431.57V274.124Z" fill="#47B0C8"/>
              <path id="Vector 172" d="M1421.56 245.813V250.168H1425.57V258.88H1421.56V263.235H1431.57V245.813H1421.56Z" fill="#47B0C8"/>
              <path id="Vector 173" d="M1431.57 330.75H1421.56V348.172H1431.57V330.75Z" fill="#47B0C8"/>
              <path id="Vector 174" d="M1421.56 302.437V306.792H1425.57V315.504H1421.56V319.861H1431.57V302.437H1421.56Z" fill="#47B0C8"/>
              <path id="Vector 175" d="M1431.57 387.374H1421.56V404.798H1431.57V387.374Z" fill="#47B0C8"/>
              <path id="Vector 176" d="M1421.56 359.061V363.418H1425.57V372.13H1421.56V376.485H1431.57V359.061H1421.56Z" fill="#47B0C8"/>
              <path id="Vector 177" d="M1431.57 444H1421.56V461.422H1431.57V444Z" fill="#47B0C8"/>
              <path id="Vector 178" d="M1431.57 518.048H1421.56V535.47H1431.57V518.048Z" fill="#47B0C8"/>
              <path id="Vector 179" d="M1421.56 415.687V420.042H1425.57V428.754H1421.56V433.111H1431.57V415.687H1421.56Z" fill="#47B0C8"/>
              <path id="Vector 180" d="M1421.56 548.538V552.893H1425.57V561.605H1421.56V565.96H1431.57V548.538H1421.56Z" fill="#47B0C8"/>
              <path id="Vector 181" d="M1479.62 80.2932H1469.61V97.7162H1479.62V80.2932Z" fill="#47B0C8"/>
              <path id="Vector 182" d="M1479.62 217.5H1469.61V234.923H1479.62V217.5Z" fill="#47B0C8"/>
              <path id="Vector 183" d="M1483.62 498.447H1469.61V500.624H1483.62V498.447Z" fill="#47B0C8"/>
              <path id="Vector 184" d="M1469.61 132.563V136.918H1473.61V145.63H1469.61V149.985H1479.62V132.563H1469.61Z" fill="#47B0C8"/>
              <path id="Vector 185" d="M1469.61 160.874V165.231H1473.61V173.943H1469.61V178.298H1479.62V160.874H1469.61Z" fill="#47B0C8"/>
              <path id="Vector 186" d="M1469.61 189.187V193.544H1473.61V202.254H1469.61V206.611H1479.62V189.187H1469.61Z" fill="#47B0C8"/>
              <path id="Vector 187" d="M1479.62 274.124H1469.61V291.548H1479.62V274.124Z" fill="#47B0C8"/>
              <path id="Vector 188" d="M1469.61 245.813V250.168H1473.61V258.88H1469.61V263.235H1479.62V245.813H1469.61Z" fill="#47B0C8"/>
              <path id="Vector 189" d="M1479.62 330.75H1469.61V348.172H1479.62V330.75Z" fill="#47B0C8"/>
              <path id="Vector 190" d="M1469.61 302.437V306.792H1473.61V315.504H1469.61V319.861H1479.62V302.437H1469.61Z" fill="#47B0C8"/>
              <path id="Vector 191" d="M1479.62 387.374H1469.61V404.798H1479.62V387.374Z" fill="#47B0C8"/>
              <path id="Vector 192" d="M1469.61 359.061V363.418H1473.61V372.13H1469.61V376.485H1479.62V359.061H1469.61Z" fill="#47B0C8"/>
              <path id="Vector 193" d="M1479.62 444H1469.61V461.422H1479.62V444Z" fill="#47B0C8"/>
              <path id="Vector 194" d="M1479.62 518.048H1469.61V535.47H1479.62V518.048Z" fill="#47B0C8"/>
              <path id="Vector 195" d="M1469.61 415.687V420.042H1473.61V428.754H1469.61V433.111H1479.62V415.687H1469.61Z" fill="#47B0C8"/>
              <path id="Vector 196" d="M1469.61 548.538V552.893H1473.61V561.605H1469.61V565.96H1479.62V548.538H1469.61Z" fill="#47B0C8"/>
              <path id="Vector 197" d="M1329.48 518.048V522.403H1333.48V531.115H1329.48V535.47H1339.49V518.048H1329.48Z" fill="#47B0C8"/>
              <path id="Vector 198" d="M1329.48 546.361V550.716H1333.48V559.427H1329.48V563.783H1339.49V546.361H1329.48Z" fill="#47B0C8"/>
              <path id="Vector 199" d="M1277.43 217.5V221.855H1281.43V230.567H1277.43V234.923H1287.44V217.5H1277.43Z" fill="#47B0C8"/>
              <path id="Vector 200" d="M1277.43 328.572V332.928H1281.43V341.639H1277.43V345.994H1287.44V328.572H1277.43Z" fill="#47B0C8"/>
              <path id="Vector 201" d="M1277.43 356.884V361.24H1281.43V369.952H1277.43V374.307H1287.44V356.884H1277.43Z" fill="#47B0C8"/>
              <path id="Vector 202" d="M1277.43 413.51V417.865H1281.43V426.576H1277.43V430.932H1287.44V413.51H1277.43Z" fill="#47B0C8"/>
              <path id="Vector 203" d="M1277.43 494.09V498.447H1281.43V507.158H1277.43V511.514H1287.44V494.09H1277.43Z" fill="#47B0C8"/>
              <path id="Vector 204" d="M1277.43 518.048V522.403H1281.43V531.115H1277.43V535.47H1287.44V518.048H1277.43Z" fill="#47B0C8"/>
              <path id="Vector 205" d="M1391.54 84.6489H1381.53V102.072H1391.54V84.6489Z" fill="#47B0C8"/>
              <path id="Vector 206" d="M1391.54 112.961H1381.53V130.384H1391.54V112.961Z" fill="#47B0C8"/>
              <path id="Vector 207" d="M1391.54 143.452H1377.52V145.63H1391.54V143.452Z" fill="#47B0C8"/>
              <path id="Vector 208" d="M1391.54 282.836H1377.52V285.014H1391.54V282.836Z" fill="#47B0C8"/>
              <path id="Vector 209" d="M1391.54 306.792H1377.52V308.971H1391.54V306.792Z" fill="#47B0C8"/>
              <path id="Vector 210" d="M1381.53 163.053V167.408H1385.53V176.12H1381.53V180.475H1391.54V163.053H1381.53Z" fill="#47B0C8"/>
              <path id="Vector 211" d="M1381.53 217.5V221.855H1385.53V230.567H1381.53V234.923H1391.54V217.5H1381.53Z" fill="#47B0C8"/>
              <path id="Vector 212" d="M1381.53 328.572V332.928H1385.53V341.639H1381.53V345.994H1391.54V328.572H1381.53Z" fill="#47B0C8"/>
              <path id="Vector 213" d="M1505.64 274.124H1495.63V291.548H1505.64V274.124Z" fill="#47B0C8"/>
              <path id="Vector 214" d="M1505.64 302.437H1495.63V319.861H1505.64V302.437Z" fill="#47B0C8"/>
              <path id="Vector 215" d="M1505.64 332.928H1491.63V335.105H1505.64V332.928Z" fill="#47B0C8"/>
              <path id="Vector 216" d="M1505.64 472.311H1491.63V474.49H1505.64V472.311Z" fill="#47B0C8"/>
              <path id="Vector 217" d="M1505.64 496.269H1491.63V498.447H1505.64V496.269Z" fill="#47B0C8"/>
              <path id="Vector 218" d="M1495.63 352.529V356.884H1499.64V365.596H1495.63V369.952H1505.64V352.529H1495.63Z" fill="#47B0C8"/>
              <path id="Vector 219" d="M1495.63 406.975V411.332H1499.64V420.042H1495.63V424.399H1505.64V406.975H1495.63Z" fill="#47B0C8"/>
              <path id="Vector 220" d="M1495.63 518.048V522.403H1499.64V531.115H1495.63V535.47H1505.64V518.048H1495.63Z" fill="#47B0C8"/>
              <path id="Vector 221" d="M1537.67 84.6489H1527.66V102.072H1537.67V84.6489Z" fill="#47B0C8"/>
              <path id="Vector 231" d="M1537.67 112.961H1527.66V130.384H1537.67V112.961Z" fill="#47B0C8"/>
              <path id="Vector 232" d="M1537.67 385.197H1527.66V402.62H1537.67V385.197Z" fill="#47B0C8"/>
              <path id="Vector 233" d="M1537.67 441.821H1527.66V459.244H1537.67V441.821Z" fill="#47B0C8"/>
              <path id="Vector 234" d="M1537.67 470.134H1527.66V487.557H1537.67V470.134Z" fill="#47B0C8"/>
              <path id="Vector 235" d="M1537.67 143.452H1523.66V145.63H1537.67V143.452Z" fill="#47B0C8"/>
              <path id="Vector 237" d="M1537.67 282.836H1523.66V285.014H1537.67V282.836Z" fill="#47B0C8"/>
              <path id="Vector 238" d="M1537.67 306.792H1523.66V308.971H1537.67V306.792Z" fill="#47B0C8"/>
              <path id="Vector 241" d="M1527.66 163.053V167.408H1531.67V176.12H1527.66V180.475H1537.67V163.053H1527.66Z" fill="#47B0C8"/>
              <path id="Vector 309" d="M1527.66 217.5V221.855H1531.67V230.567H1527.66V234.923H1537.67V217.5H1527.66Z" fill="#47B0C8"/>
              <path id="Vector 310" d="M1527.66 328.572V332.928H1531.67V341.639H1527.66V345.994H1537.67V328.572H1527.66Z" fill="#47B0C8"/>
              <path id="Vector 311" d="M1527.66 356.884V361.24H1531.67V369.952H1527.66V374.307H1537.67V356.884H1527.66Z" fill="#47B0C8"/>
              <path id="Vector 312" d="M1527.66 413.51V417.865H1531.67V426.576H1527.66V430.932H1537.67V413.51H1527.66Z" fill="#47B0C8"/>
              <path id="Vector 313" d="M1527.66 494.09V498.447H1531.67V507.158H1527.66V511.514H1537.67V494.09H1527.66Z" fill="#47B0C8"/>
              <path id="Vector 314" d="M1527.66 518.048V522.403H1531.67V531.115H1527.66V535.47H1537.67V518.048H1527.66Z" fill="#47B0C8"/>
              <path id="Vector 331" d="M1444.67 315.366C1446.81 315.366 1448.56 313.469 1448.56 311.132C1448.56 308.793 1446.81 306.898 1444.67 306.898C1442.52 306.898 1440.77 308.793 1440.77 311.132C1440.77 313.469 1442.52 315.366 1444.67 315.366Z" fill="#F2F2F2"/>
              </g>
              </g>
              <g id="meee">
                <path id="Vector_2" d="M814.364 256.711C814.364 256.711 732.46 233.94 708.235 344.378C684.01 454.816 702.467 510.604 702.467 510.604L885.308 489.541C885.308 489.541 937.219 290.298 814.364 256.711Z" fill="#5A372A"/>
                <path id="Vector_3" d="M798.429 432.666C831.428 432.666 858.179 405.906 858.179 372.897C858.179 339.887 831.428 313.128 798.429 313.128C765.43 313.128 738.678 339.887 738.678 372.897C738.678 405.906 765.43 432.666 798.429 432.666Z" fill="#FEB88C"/>
                <path id="Vector_4" d="M778.895 417.723C778.895 417.723 785.789 459.102 760.51 470.596L735.231 482.09L834.049 557.951L868.52 463.7C868.52 463.7 834.049 456.803 836.347 408.528L778.895 417.723Z" fill="#FEB88C"/>
                <path id="Vector_5" d="M821.79 290.463C821.79 290.463 799.072 350.685 743.413 375.683L734.326 322.278L821.79 290.463Z" fill="#5A372A"/>
                <path id="Vector_6" d="M859.328 378.644C863.559 378.644 866.988 373.498 866.988 367.15C866.988 360.802 863.559 355.656 859.328 355.656C855.097 355.656 851.668 360.802 851.668 367.15C851.668 373.498 855.097 378.644 859.328 378.644Z" fill="#FEB88C"/>
                <path id="Vector_7" d="M1521.09 680.902C1515.98 694.389 1509.68 707.329 1502.29 719.55C1498.82 725.378 1495.01 730.969 1490.9 736.291H217.458C218.604 735.335 225.331 729.519 235.793 719.55C243.298 712.411 252.717 703.128 263.294 691.96L397.512 662.324C399.246 661.942 401.012 661.749 402.783 661.749L545.87 661.528H546.019L616.892 661.43H617.053L676.868 661.357H716.023H756.129L920.473 661.112H920.736H933.467H955.835H983.76H991.185L1019.41 660.769H1028.74L1110.83 660.646H1137.05H1149.65L1244.47 660.512H1272.71L1362.52 660.377L1438.33 660.279C1440.45 660.28 1442.55 660.548 1444.6 661.075L1521.09 680.902Z" fill="#68A4B0"/>
                <path id="Vector_8" d="M743.84 644.243L865.954 671.231V700.468L743.84 704.966C743.84 704.966 730.756 653.239 743.84 644.243Z" fill="#FEB88C"/>
                <path id="Vector_9" d="M742.362 486.989L718.375 475.744C718.375 475.744 690.027 482.491 687.847 507.23C685.666 531.969 644.234 691.649 676.944 698.396C709.653 705.143 753.265 705.143 753.265 705.143C753.265 705.143 724.917 664.661 759.807 642.17L733.639 628.676C733.639 628.676 707.472 567.953 724.917 536.467C742.362 504.981 742.362 486.989 742.362 486.989Z" fill="black"/>
                <path id="Vector_10" d="M898.362 464.634H917.987C917.987 464.634 939.793 489.373 935.432 511.863C931.071 534.353 917.987 640.057 917.987 640.057C917.987 640.057 852.569 703.029 819.86 669.294C787.15 635.559 811.137 604.072 811.137 604.072C811.137 604.072 854.749 640.057 878.736 592.827L898.362 464.634Z" fill="black"/>
                <path id="Vector_11" opacity="0.4" d="M237.588 719.531H1504.08C1500.61 725.359 1496.81 730.95 1492.69 736.272H219.254C220.377 735.255 227.103 729.439 237.588 719.531Z" fill="black"/>
                <path id="Vector_12" d="M1056.36 698.329L891.197 721.683L882.935 722.846L802.184 676.752V665.963L1054.53 636.548L1056.36 698.329Z" fill="#9C9CA1"/>
                <g id="arms">
                <g id="Vector_13" filter="url(#filter1_dd)">
                <path d="M910.149 591.575L938.662 453.186C938.662 453.186 934.843 358.731 965.985 366.565C997.127 374.399 972.636 457.056 972.636 457.056L978.221 620.441C978.221 620.441 940.679 636.89 910.149 591.575Z" fill="#FEC29C"/>
              </g>
              </g>
              <path id="Vector_14" d="M848.982 681.65L1027.91 659.105L1026.08 694.411L886.705 705.334L848.982 681.65Z" fill="#939498"/>
              <path id="Vector_15" opacity="0.4" d="M891.196 710.086V721.671L882.935 722.895L802.172 676.752V665.963L879.256 710.049C879.256 710.049 889.363 711.065 891.196 710.086Z" fill="#213C42"/>
              <path id="Vector_16" d="M922.903 526.211L885.822 709.963C885.448 711.803 885.494 713.712 885.956 715.529C886.418 717.345 887.282 719.016 888.475 720.401C889.669 721.786 891.156 722.843 892.813 723.484C894.469 724.125 896.245 724.33 897.991 724.083L1132.59 690.896C1134.63 690.608 1136.56 689.711 1138.15 688.308C1139.74 686.905 1140.92 685.051 1141.57 682.961L1192.19 519.843C1192.75 518.033 1192.89 516.105 1192.59 514.225C1192.3 512.344 1191.58 510.569 1190.5 509.05C1189.43 507.532 1188.02 506.316 1186.4 505.508C1184.79 504.7 1183.01 504.324 1181.23 504.413L933.124 517.002C930.711 517.124 928.402 518.092 926.554 519.756C924.707 521.421 923.424 523.689 922.903 526.211Z" fill="#69B3C2"/>
              <path id="Vector_17" d="M1051.81 594C1052.39 588.149 1050 583.084 1046.48 582.689C1042.96 582.294 1039.64 586.717 1039.07 592.569C1038.49 598.421 1040.88 603.485 1044.4 603.881C1047.92 604.276 1051.23 599.852 1051.81 594Z" fill="white"/>
              </g>
              <path id="Vector_18" d="M802.057 526.109C802.057 526.109 828.797 504.862 854.664 457.444L908.931 464.643L893.071 590.061C893.071 590.061 879.949 644.623 855.891 646.182C855.891 646.182 844.955 657.095 827.459 657.095C809.962 657.095 774.969 647.741 774.969 647.741C774.969 647.741 724.666 643.064 709.356 644.623C694.047 646.182 628.435 653.977 691.86 608.768C691.86 608.768 724.666 593.179 720.292 588.502C715.918 583.825 709.356 563.559 709.356 563.559L717.333 475.718L762.187 469.073L802.057 526.109Z" fill="black"/>
              </g>
              <defs>
                <filter id="filter0_d" x="-4.20652" y="0" width="1540.64" height="755.684" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                  <feOffset dy="4.43003"/>
                  <feGaussianBlur stdDeviation="2.21502"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter1_dd" x="871.542" y="362.188" width="184.566" height="277.014" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                  <feOffset dy="4.43003"/>
                  <feGaussianBlur stdDeviation="2.21502"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                  <feOffset dy="4.43003"/>
                  <feGaussianBlur stdDeviation="2.21502"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                </filter>
                  <clipPath id="clip0">
                    <rect width="1531.78" height="746.824" fill="white" transform="translate(0.223511)"/>
                  </clipPath>
              </defs>
            </svg>


            <a className='secondary' href='https://drive.google.com/file/d/1eRvBVFV7W_lkRQf252E3gQTbHFwreue3/view?usp=sharing'>
              Resume
            </a>
            <a href='#about'><div className='arrow'></div></a> 
            </div> 
          </section>
          {/* ////////////////// */}
          <section id='about' className="section">
            <h1 id='descrip'>A little bit about me..</h1>
              <div  className='allstacks'>
                <h1 className='m-s'>My Skills</h1>
                <div className='ul'>
                  <p className='p'>JavaScript</p>
                  <p className='p'>Ruby</p>
                  <p className='p'>HTML</p>
                  <p className='p'>CSS</p>
                  <p className='p'>React</p>
                  <p className='p'>JSON</p>
                  <p className='p'>SQL</p>
                  <p className='p'>PostgreSQL</p>
                  <p className='p'>Bootstrap</p>
                  <p className='p'>Git</p>
                  <p className='p'>RESTful APIs</p>
                  <p className='p'>Ruby on Rails</p>
                  <p className='p'>React Hooks</p>
                </div>
              </div>

              <div className='para'>
                <p  data-aos='fade-up'className='my-info'>
                  I'm a software engineer based in New York.
                  I am passionate about building and creating anything that could make lives a bit more simpler.
                  I love coming up with an idea and love bringing those ideas to life with code. Also enjoy learning new technologies, feel free to take a 
                  look around and <a href='#contact' className='con'>Contact</a> me !
                </p>
              </div>
            <img alt='pic' className='profile-pic'id="meee" src={require('../imgs/uno.jpg')}/> 
          </section>

        {/* /////////////// */}
        <section id='projects' className="section">  
          <div className='presentation'>
            <h2 className="title2">Projects</h2>
            <CardDeck className='column'  >
              {this.state.project.map((info,index)=> 
              <Card key={index}className='card' >
                {/* data-aos="fade-right" */}
                <a href={info.deploy?info.deploy:info.youtube}>
                  <Card.Img  className='picturep'variant="top"  alt='pic' src={info.main} />
                </a> {/* data-aos="fade-left" */}
                <Card.Body className='body'>
                  <div >
                  <Card.Title><h2>{info.name}</h2></Card.Title>
                  <Card.Text >{info.description}</Card.Text>
                  <ListGroup className="list-group-flush">
                  {info.tools.split(',').map((line,index) => <ListGroupItem key={index}className='list'> {line}</ListGroupItem> )}  </ListGroup>
                  </div>
                  <div className='external-l'>
                  <a className='e-l'href={info.gitLink}><AiFillGithub size={20}/></a>
                  <a className='e-l'href={info.youtube}><RiYoutubeLine size={20}/></a>
                  { info.deploy?<a className='e-l'href={info.deploy}><HiExternalLink size={20}/></a>:''}
                  </div>
                </Card.Body>
              </Card>  
              )}
            </CardDeck>
          </div>
        </section>
        <section id='contact' className="section">
          {/* data-aos="zoom-in" */}
          <form  onSubmit={this.handleSubmit}>
            <svg id ='env' width="1035" height="832" viewBox="0 0 1035 832" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="undraw_envelope_n8lc 1" clipPath="url(#clip0)">
              <path id="Vector" opacity="0.1" d="M601.31 95.07C534.96 93.16 471.77 75.32 411.47 55.8C351.17 36.28 291.31 14.69 226.55 4.34998C184.9 -2.30002 137.27 -3.24002 103.71 15.35C71.41 33.24 60.98 64.13 55.37 92.8C51.14 114.36 48.66 137.06 60.23 157.24C68.23 171.24 82.52 183.03 92.38 196.45C126.68 243.16 102.44 300.75 65.26 346.35C47.82 367.74 27.59 388.15 14.13 410.92C0.670005 433.69 -5.53 459.8 6.22 483C17.89 506 45.7 523.31 75.83 535.48C137.02 560.18 209.13 567.25 279.44 571.26C435.08 580.12 591.56 576.26 747.62 572.44C805.37 571.02 863.38 569.58 920.2 562.14C951.75 558.01 984.32 551.46 1007.2 535.64C1036.28 515.56 1043.48 481.55 1024 456.37C991.32 414.13 901 403.64 878.11 358.31C865.53 333.36 878.45 305.56 896.72 282.42C935.92 232.78 1001.63 189.23 1005.09 132.49C1007.46 93.49 975.88 54.49 927.04 36.05C875.85 16.72 804.86 19.15 767.04 51.15C728.23 84.09 659.89 96.8 601.31 95.07Z" fill="#409DB1"/>
              <path id="Vector_2" opacity="0.1" d="M435.45 831.61C596.027 831.61 726.2 818.483 726.2 802.29C726.2 786.097 596.027 772.97 435.45 772.97C274.873 772.97 144.7 786.097 144.7 802.29C144.7 818.483 274.873 831.61 435.45 831.61Z" fill="#358597"/>
              <path id="Vector_3" d="M169.47 799.11C169.47 799.11 156.57 726.02 108.69 689.8C88.6 674.6 73.9 653.93 67.48 630.39C64.4587 619.236 62.523 607.816 61.7 596.29" stroke="#535461" strokeWidth="2" strokeMiterlimit="10"/>
              <path id="Vector_4" d="M31.68 573.29C35.68 581.12 62.41 596.97 62.41 596.97C62.41 596.97 65.77 567.36 61.74 559.52C57.71 551.68 47.74 548.41 39.42 552.21C31.1 556.01 27.65 565.45 31.68 573.29Z" fill="#358597"/>
              <path id="Vector_5" d="M29.13 628.08C37.03 632.59 68.57 632.19 68.57 632.19C68.57 632.19 54.34 605.61 46.47 601.1C38.6 596.59 28.31 598.97 23.53 606.42C18.75 613.87 21.24 623.57 29.13 628.08Z" fill="#358597"/>
              <path id="Vector_6" d="M68.34 701.8C77.56 701.93 104.57 686.55 104.57 686.55C104.57 686.55 78.08 670.39 68.85 670.25C59.62 670.11 52.03 677.07 51.85 685.78C51.67 694.49 59.11 701.64 68.34 701.8Z" fill="#358597"/>
              <path id="Vector_7" d="M111.3 751.23C120.36 752.84 149.74 741.98 149.74 741.98C149.74 741.98 126.52 721.8 117.47 720.22C108.42 718.64 99.67 724.22 97.97 732.82C96.27 741.42 102.23 749.63 111.3 751.23Z" fill="#358597"/>
              <path id="Vector_8" d="M100.91 619.25C97.76 627.44 72.91 645.8 72.91 645.8C72.91 645.8 66.33 616.68 69.48 608.49C72.63 600.3 82.22 596.07 90.89 599.04C99.56 602.01 104.06 611.07 100.91 619.25Z" fill="#358597"/>
              <path id="Vector_9" d="M150.38 677.69C144.78 684.62 115.26 695.12 115.26 695.12C115.26 695.12 118.26 665.47 123.82 658.55C126.629 655.193 130.601 653.019 134.942 652.462C139.284 651.906 143.676 653.009 147.24 655.55C148.97 656.742 150.435 658.281 151.54 660.067C152.646 661.854 153.369 663.851 153.664 665.931C153.959 668.012 153.82 670.131 153.255 672.155C152.689 674.179 151.71 676.064 150.38 677.69Z" fill="#358597"/>
              <path id="Vector_10" d="M190.2 740.72C185.92 748.44 158.71 763.5 158.71 763.5C158.71 763.5 156.32 733.81 160.6 726.09C164.88 718.37 174.97 715.39 183.15 719.43C191.33 723.47 194.47 733 190.2 740.72Z" fill="#358597"/>
              <path id="Vector_11" opacity="0.25" d="M31.68 573.29C35.68 581.12 62.41 596.97 62.41 596.97C62.41 596.97 65.77 567.36 61.74 559.52C57.71 551.68 47.74 548.41 39.42 552.21C31.1 556.01 27.65 565.45 31.68 573.29Z" fill="black"/>
              <path id="Vector_12" opacity="0.25" d="M29.13 628.08C37.03 632.59 68.57 632.19 68.57 632.19C68.57 632.19 54.34 605.61 46.47 601.1C38.6 596.59 28.31 598.97 23.53 606.42C18.75 613.87 21.24 623.57 29.13 628.08Z" fill="black"/>
              <path id="Vector_13" opacity="0.25" d="M68.34 701.8C77.56 701.93 104.57 686.55 104.57 686.55C104.57 686.55 78.08 670.39 68.85 670.25C59.62 670.11 52.03 677.07 51.85 685.78C51.67 694.49 59.11 701.64 68.34 701.8Z" fill="black"/>
              <path id="Vector_14" opacity="0.25" d="M111.3 751.23C120.36 752.84 149.74 741.98 149.74 741.98C149.74 741.98 126.52 721.8 117.47 720.22C108.42 718.64 99.67 724.22 97.97 732.82C96.27 741.42 102.23 749.63 111.3 751.23Z" fill="black"/>
              <path id="Vector_15" opacity="0.25" d="M100.91 619.25C97.76 627.44 72.91 645.8 72.91 645.8C72.91 645.8 66.33 616.68 69.48 608.49C72.63 600.3 82.22 596.07 90.89 599.04C99.56 602.01 104.06 611.07 100.91 619.25Z" fill="black"/>
              <path id="Vector_16" opacity="0.25" d="M150.38 677.69C144.78 684.62 115.26 695.12 115.26 695.12C115.26 695.12 118.26 665.47 123.82 658.55C126.629 655.193 130.601 653.019 134.942 652.462C139.284 651.906 143.676 653.009 147.24 655.55C148.97 656.742 150.435 658.281 151.54 660.067C152.646 661.854 153.369 663.851 153.664 665.931C153.959 668.012 153.82 670.131 153.255 672.155C152.689 674.179 151.71 676.064 150.38 677.69Z" fill="black"/>
              <path id="Vector_17" opacity="0.25" d="M190.155 741.092C185.875 748.812 158.665 763.872 158.665 763.872C158.665 763.872 156.275 734.182 160.555 726.462C164.835 718.742 174.925 715.762 183.105 719.802C191.285 723.842 194.425 733.372 190.155 741.092Z" fill="black"/>
              <path id="Vector_18" d="M167.85 797.19C167.85 797.19 187.42 725.43 159.2 673.99C147.36 652.41 142.79 627.89 147.03 603.91C149.066 592.508 152.197 581.33 156.38 570.53" stroke="#535461" strokeWidth="2" strokeMiterlimit="10"/>
              <path id="Vector_19" d="M138.8 538.02C139.12 546.72 156.73 571.43 156.73 571.43C156.73 571.43 172.51 545.64 172.19 536.93C171.87 528.22 164.14 521.41 154.92 521.71C145.7 522.01 138.47 529.31 138.8 538.02Z" fill="#358597"/>
              <path id="Vector_20" d="M112.96 587.14C118.24 594.28 147.24 605.98 147.24 605.98C147.24 605.98 145.64 576.24 140.36 569.09C137.689 565.627 133.809 563.3 129.497 562.575C125.184 561.85 120.756 562.78 117.1 565.18C115.323 566.296 113.796 567.767 112.615 569.501C111.433 571.235 110.622 573.194 110.234 575.256C109.845 577.318 109.887 579.438 110.356 581.483C110.825 583.528 111.711 585.454 112.96 587.14Z" fill="#358597"/>
              <path id="Vector_21" d="M117.16 669.51C125.54 673.16 156.84 669.44 156.84 669.44C156.84 669.44 139.55 644.52 131.17 640.87C122.79 637.22 112.87 640.67 109 648.58C105.13 656.49 108.79 665.86 117.16 669.51Z" fill="#358597"/>
              <path id="Vector_22" d="M135.21 731.16C142.82 736.1 174.33 737.41 174.33 737.41C174.33 737.41 161.75 710.1 154.15 705.17C150.487 702.784 146.058 701.87 141.75 702.612C137.442 703.354 133.574 705.696 130.92 709.17C129.673 710.866 128.792 712.803 128.331 714.857C127.87 716.912 127.841 719.039 128.244 721.106C128.647 723.172 129.474 725.132 130.673 726.863C131.872 728.593 133.417 730.057 135.21 731.16Z" fill="#358597"/>
              <path id="Vector_23" d="M182.37 606.53C175.97 612.81 145.37 620.1 145.37 620.1C145.37 620.1 151.86 590.95 158.25 584.67C161.412 581.639 165.6 579.911 169.979 579.83C174.358 579.748 178.607 581.319 181.88 584.23C183.453 585.616 184.721 587.312 185.605 589.213C186.489 591.114 186.969 593.177 187.015 595.272C187.061 597.368 186.672 599.451 185.873 601.388C185.073 603.326 183.88 605.077 182.37 606.53Z" fill="#358597"/>
              <path id="Vector_24" d="M202.47 678.88C194.38 683.07 162.89 681.38 162.89 681.38C162.89 681.38 178.32 655.38 186.41 651.22C194.5 647.06 204.66 649.83 209.09 657.47C213.52 665.11 210.6 674.69 202.47 678.88Z" fill="#358597"/>
              <path id="Vector_25" d="M211.86 751.74C204.63 757.16 173.29 760.52 173.29 760.52C173.29 760.52 183.85 732.45 191.08 727.03C194.594 724.422 198.964 723.236 203.314 723.709C207.665 724.181 211.678 726.278 214.55 729.58C215.908 731.178 216.921 733.039 217.524 735.047C218.128 737.056 218.309 739.167 218.056 741.249C217.803 743.33 217.122 745.337 216.056 747.143C214.99 748.948 213.561 750.514 211.86 751.74Z" fill="#358597"/>
              <path id="Vector_26" opacity="0.1" d="M789.89 309.04C789.89 309.04 796.4 312.04 797.89 316.14C799.38 320.24 789.89 309.04 789.89 309.04Z" fill="black"/>
              <g id="Group" opacity="0.1">
              <path id="Vector_27" opacity="0.1" d="M824.79 223.15C825.87 220.37 823.03 217.65 822.66 214.67C822.284 215.511 822.122 216.432 822.19 217.35C822.38 219.59 824.03 221.68 824.47 223.76C824.594 223.566 824.701 223.362 824.79 223.15Z" fill="black"/>
              <path id="Vector_28" opacity="0.1" d="M873.89 255.01C872.83 250.35 873.14 245.41 872.06 240.74C870.98 236.07 867.65 231.19 863.12 231.11C861.12 231.11 858.88 231.83 857.47 230.37C856.61 229.49 856.47 228.09 855.8 227.02C852.56 221.77 842.7 224.43 838.66 227.12C832.66 231.12 824.3 239.55 816.54 237.65C816.17 238.54 815.83 239.45 815.54 240.38C823.45 242.86 832.02 234.13 838.22 230C842.22 227.32 852.12 224.66 855.36 229.91C856 230.98 856.17 232.37 857.02 233.25C858.43 234.72 860.72 233.96 862.67 234C867.21 234.08 870.52 238.88 871.62 243.63C872.72 248.38 872.36 253.41 873.49 258.15C873.417 257.087 873.553 256.02 873.89 255.01Z" fill="black"/>
              <path id="Vector_29" opacity="0.1" d="M896.13 249.47C895.33 251.81 893.22 253.97 890.94 253.47C888.66 252.97 887.55 250.4 885.85 248.77C884.795 247.781 883.459 247.144 882.026 246.945C880.594 246.746 879.135 246.996 877.85 247.66C876.616 248.395 875.602 249.447 874.911 250.705C874.22 251.964 873.878 253.385 873.92 254.82C874.519 253.014 875.761 251.49 877.41 250.54C878.693 249.867 880.155 249.613 881.59 249.814C883.025 250.015 884.361 250.66 885.41 251.66C887.12 253.28 888.28 255.88 890.51 256.35C892.74 256.82 894.89 254.68 895.7 252.35C896.121 250.966 896.393 249.542 896.51 248.1C896.413 248.564 896.286 249.022 896.13 249.47Z" fill="black"/>
              <path id="Vector_30" opacity="0.1" d="M903.09 229.31C901.43 233.7 898.41 237.48 897.41 242.1C897.21 243.03 897.09 243.98 896.98 244.94C897.98 240.34 900.98 236.57 902.65 232.19C903.387 230.22 903.848 228.157 904.02 226.06C903.792 227.165 903.481 228.252 903.09 229.31Z" fill="black"/>
              </g>
              <path id="Vector_31" d="M689.3 336.43C689.499 336.43 689.66 336.269 689.66 336.07C689.66 335.871 689.499 335.71 689.3 335.71C689.101 335.71 688.94 335.871 688.94 336.07C688.94 336.269 689.101 336.43 689.3 336.43Z" fill="#E6E8EC"/>
              <path id="Vector_32" d="M499.55 214.39L238.04 384.05L408.7 691.85C409.497 693.289 410.584 694.548 411.892 695.546C413.201 696.544 414.701 697.261 416.3 697.65L570.93 735.37C573.58 736.011 576.369 735.724 578.833 734.558C581.297 733.391 583.286 731.416 584.47 728.96L661.17 569.61L745.23 457.24L545.75 221.24C540.199 214.676 532.446 210.359 523.942 209.099C515.439 207.838 506.767 209.719 499.55 214.39Z" fill="#409DB1"/>
              <path id="Vector_33" d="M716.39 345.9L706.9 411.9L698.2 472.34L695.77 489.2L694.38 525.2L687.04 716.11C686.97 717.855 686.518 719.564 685.716 721.115C684.914 722.666 683.781 724.022 682.397 725.088C681.013 726.153 679.412 726.902 677.707 727.28C676.002 727.659 674.235 727.659 672.53 727.28L593.75 709.69L393.86 665.08L280.3 639.72L282.9 464.95L283.66 413.76L284.55 353.88L285.46 292.29C304.24 291.4 335.14 293.41 372.03 297.12C454.63 305.41 567.23 322.18 640.85 333.73C685.93 340.8 716.39 345.9 716.39 345.9Z" fill="#C1E3EA"/>
              <path id="Vector_34" d="M238.04 384.05L220.21 689.38C220.045 692.206 220.891 694.998 222.597 697.258C224.303 699.517 226.757 701.095 229.52 701.71L703.04 806.86C704.7 807.224 706.419 807.228 708.081 806.873C709.743 806.517 711.31 805.811 712.677 804.8C714.043 803.79 715.178 802.499 716.005 801.014C716.832 799.529 717.331 797.884 717.47 796.19L745.22 457.24L482.47 586.11L238.04 384.05Z" fill="#409DB1"/>
              <path id="Vector_35" opacity="0.1" d="M223.47 696.37L469.47 544.6C473.113 542.391 477.419 541.541 481.627 542.2C485.836 542.858 489.677 544.984 492.47 548.2L712.65 804.99C713.45 805.91 713.84 805.25 712.65 804.99L223.47 696.37C222.07 696.06 222.25 697.1 223.47 696.37Z" fill="#BC96D7"/>
              <path id="Vector_36" d="M225.23 696.12L468.69 549.05C472.539 546.725 477.085 545.834 481.527 546.533C485.968 547.231 490.021 549.476 492.97 552.87L711.16 803.8C711.521 804.218 711.742 804.738 711.791 805.288C711.839 805.838 711.714 806.39 711.432 806.864C711.149 807.339 710.725 807.713 710.219 807.933C709.712 808.153 709.149 808.208 708.61 808.09L226.02 700.93C225.506 700.819 225.038 700.556 224.675 700.175C224.313 699.794 224.074 699.313 223.988 698.794C223.903 698.275 223.976 697.743 224.197 697.266C224.419 696.789 224.779 696.39 225.23 696.12Z" fill="#358597"/>
              </g>
              <defs>
                <clipPath id="clip0">
                <rect width="1034.95" height="831.61" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            {/* envolope */}
            <h2 className="title3">Contact</h2><br></br>
              <div className="form-group">
              {/* <label htmlFor="exampleFormControlInput1">Name</label> */}
              <input 
              required
              onChange={this.handleChange}
              value={this.state.name}
              name='name'
              type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
            </div>
            <div className="form-group">
              {/* <label htmlFor="exampleFormControlInput2">Email address</label> */}
              <input 
                required
                onChange={this.handleChange}
                value={this.state.email}
                name='email'
                type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email@example.com"
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="exampleFormControlTextarea1">Message</label> */}
              <textarea
                placeholder='Message...'
                name='feedback'
                className="form-control message"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={this.handleChange}
                value={this.state.feedback}
                required
              >
              </textarea>
            </div>
            <button className="btn btn--submit"  >Send</button>
          </form>
          
          <div className='social'>
            <a href='https://medium.com/@dianaponce2341'><FaMedium  className='soc'size={50} /></a>
            <a href='https://www.linkedin.com/in/diana-ponce-1718821a2/'>< FaLinkedin className='soc'size={50}/></a>
            <a href='https://www.instagram.com/diana.poncee/'>< FaInstagramSquare className='soc'size={50}/></a>
            <a href="https://github.com/diana2341">< FaGithubSquare className='soc'size={50}/></a>
          </div> 
        </section>
      </>
    )
  }
}