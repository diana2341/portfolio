import React, { Component } from 'react'
export default class Page extends Component{
render(){
  
    return(
        <>
        <div id="mySidenav" className='sidenav'>
            
        <img alt='pic' className="me" src={require('../imgs/me2.JPG')}/> 

        {/* <a href="" className="closebtn" onClick={()=>closeNav()}>&times;</a> */}
     <div className="box-nav"> 
             <a href='#home'>Home</a>
                <img alt='pic' className='icon home'src={require('../imgs/home.png')}/>
               <a href='#about'>About</a>
               <img alt='pic' className='icon woman'src={require('../imgs/woman.png')}/>

                <a href='#contact'>Contact</a>
                <img alt='pic' className='icon contact'src={require('../imgs/contact.png')}/>

                <a href='#projects'>Projects</a>
                <img alt='pic' className='icon computer'src={require('../imgs/computer.png')}/> 
     </div>
           
          

        </div>
        {/* <span className="open "onClick={()=>openNav()}>&#9776; </span> */}
        <section id='home'className="section">
            <div className="box">
               <h2 className="title">Hi, My name is Diana Ponce</h2>
    <img alt='pic'id='me' src={require('../imgs/me.png')}/> 
            </div>
	
</section>
<section id='about' className="section">
	<h2 className="title1">About</h2>
</section>
<section id='projects' className="section">
	<h2 className="title2">Projects</h2>
</section>
<section id='contact' className="section">
	<h2 className="title3">Contact</h2>
</section>
</>
    )
}
}