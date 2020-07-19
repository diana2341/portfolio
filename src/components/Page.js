import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
export default class Page extends Component{
    constructor(props) {
      super(props);
      this.state = { feedback: '', name: 'Name', email: 'email@example.com' };

     }
     
     handleSubmit= (event)=>{
      const templateId = "template_OSnwlhmv";;
   
      this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
     }
     handleChange=(event) =>{
      this.setState({feedback: event.target.value})
    }
     sendFeedback= (templateId, variables) =>{
      window.emailjs.send(
        'gmail', templateId,
        variables
        ).then(res => {
          console.log('Email successfully sent!')
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
     }
   
   
render(){
  
    return(
        <>
        
        <div id="mySidenav" className='sidenav'>
        <img alt='pic' className="me" src={require('../imgs/me2.JPG')}/> 

        {/* <a href="" className="closebtn" onClick={()=>closeNav()}>&times;</a> */}
     <div className="box-nav"> 
                <p className='job'>Software Engineer</p> 

             <a href='#home'>Home</a>
                <img alt='pic' className='icon home'src={require('../imgs/home.png')}/>
               <a href='#about'>About</a>
               <img alt='pic' className='icon woman'src={require('../imgs/woman.png')}/>
             <a href='#projects'>Projects</a>
                 <img alt='pic' className='icon computer'src={require('../imgs/computer.png')}/> 
                <a href='#contact'>Contact</a>
                <img alt='pic' className='icon contact'src={require('../imgs/contact.png')}/>

      
            </div> 
               <div className='social'>
                <a href="https://github.com/diana2341"><img alt='pic' className='icon social'src={require('../imgs/git.png')}/></a>
                <a href='https://www.instagram.com/diana.poncee/'><img alt='pic' className='icon social'src={require('../imgs/instagram.png')}/></a>
                <a href='https://medium.com/@dianaponce2341'><img alt='pic' className='icon social'src={require('../imgs/medium.png')}/></a>
                <a href='https://www.linkedin.com/in/diana-ponce-1718821a2/'><img alt='pic' className='icon social'src={require('../imgs/linkedin.png')}/></a>
                </div>
     
           
          

        </div>
        {/* <span className="open "onClick={()=>openNav()}>&#9776; </span> */}
        <section id='home'className="section">
            <div className="box">
               <h2 className="title">Hi, My name is Diana Ponce</h2>
    {/* <img alt='pic'id='me' src={require('../imgs/me.png')}/>  */}
            </div>
	
</section>
<section id='about' className="section">
	{/* <h2 className="about-content">I'm a Full-Stack Developer based in Long Island, New York.
This is my way to express creativity. Thinking of an idea drawing it out and then seeing your work come to life is beautiful! 
 </h2> */}
{/* <Container fluid> */}

{/* <ul class="list-group flex-md-row"> */}

    {/* <p className='ls'>Here are a few technologies I've been working with recently:</p><br/> */}
    {/* <hr/> */}
    {/* <label className='label'>
       HTML
       </label> */}
       
      {/* <li class="list-group-item"> <img alt='pic'className='skills html' src={require('../imgs/html.png')}/> </li> */}
    {/* <label className='label'>Javascript       </label> */}

    {/* <li class="list-group-item"> <img alt='pic'className='skills' src={require('../imgs/javascript.png')}/> </li> */}
    {/* <label className='label'>CSS       </label> */}

    {/* <li class="list-group-item"> <img alt='pic'className='skills' src={require('../imgs/css.png')}/> </li> */}
    {/* <label className='label'>Ruby On Rails       </label> */}


    {/* <li class="list-group-item"> <img alt='pic'className='skills rails' src={require('../imgs/rails.png')}/> </li> */}
    {/* <label className='label'>Ruby       </label> */}


    {/* <li class="list-group-item"><img alt='pic'className='skills ruby' src={require('../imgs/ruby.png')}/> </li> */}
    {/* <label className='label'>PostgreSQL       </label> */}


    {/* <li class="list-group-item"> <img alt='pic'className='skills postgres' src={require('../imgs/postgres.png')}/> </li> */}
{/* <label className='label'>React       </label> */}


{/* <li class="list-group-item"> <img alt='pic'className='skills react' src={require('../imgs/react.png')}/> </li> */}

   
{/* </ul>
</Container> */}


</section>
<section id='projects' className="section">
	<h2 className="title2">Projects</h2>
</section>
<section id='contact' className="section">
	<h2 className="title3">Contact</h2><br></br>
   <form className="test-mailing">
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Post some lorem ipsum here"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
</section>
</>
    )
}
}