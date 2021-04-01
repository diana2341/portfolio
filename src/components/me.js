import React, { Component } from 'react'
import Pdf from '../Documents/resume.pdf';

 class me extends Component {
    onResumeClick() {
        window.open(Pdf);
      }
    render() {
        return (
                
        <div>
          <h1 id='descrip'>A little bit about me..</h1>
          <div  className='allstacks'>
            <h1 className='m-s'>My Skills</h1>
            <div className='ul'>
              <span>
                <p className='p'>JavaScript</p>
                <p className='p'>Ruby</p>
                <p className='p'>HTML</p>   
              </span>
              <span>
                <p className='p'>CSS</p>
                <p className='p'>React</p>
                <p className='p'>Redux</p>
              </span>
              <span>
                <p className='p'>SQL</p>
                <p className='p'>PostgreSQL</p>
                <p className='p'>Bootstrap</p>   
                <p className='p'>Git</p>
              </span>
              <span>
                <p className='p'>JSON</p>   
                <p className='p'>RESTful APIs</p>
                <p className='p'>Ruby on Rails</p> 
                <p className='p'>React Hooks</p> 
              </span>
            </div>
          </div>
          {/* <div className='para'> */}
          <p className='my-info'>
            I'm a software engineer based in New York.
            I am passionate about building and creating anything that could make lives a bit more simpler.
            I love coming up with an idea and love bringing those ideas to life with code. Also enjoy learning new technologies, feel free to take a 
            look around and <a href='/contact' className='con'>Contact</a> me !
          </p>
          {/* </div> */}
          {/* <img alt='pic' id="meee" src={require('../imgs/me2.JPG')}/>  */}
          <img alt='pic' className='profile-pic'id="meee" src={require('../imgs/uno.jpg')}/> 
        </div>
          
        )
    }
}
export default me
