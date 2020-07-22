import React, { Component } from 'react'
import info from './Info';
import Carousel from 'react-bootstrap/Carousel'
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
              let options = {
                  // threshold:1
                  //  rootMargin: "-150px"
              
              }
              let sections=document.querySelectorAll('.box1')
              let observer=  new IntersectionObserver(function(entries, observer){
                  entries.forEach(entry=>{
                      if(!entry.isIntersecting){
                          return
                      }
                      // console.log(entry.target);
                      entry.target.classList.toggle("lis");
                      observer.unobserve(entry.target)
      
                  })
              },options)
          
              sections.forEach(section=>{
                  observer.observe(section)
              })



      // 
          let sections2=document.querySelectorAll('.box2')
              let observer2=  new IntersectionObserver(function(entries, observer2){
                  entries.forEach(entry=>{
                      if(!entry.isIntersecting){
                          return
                      }
                      // console.log(entry.target);
                      entry.target.classList.toggle("another");
                      observer2.unobserve(entry.target)
      
                  })
              },options)
          
              sections2.forEach(section=>{
                  observer2.observe(section)
              })
   }
     
     handleSubmit= (event)=>{
      const templateId = "template_OSnwlhmv";;
      this.setState({name:'',feedback:'',email:''})
      this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
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
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
     }
   
  
   
render(){

   let openUp=(e) =>{
      if(e.target.id==='1'){
        this.setState({project:info.filter(info=>info.id===1? info:'')})

      }
      if(e.target.id==='2'){
         this.setState({project:info.filter(info=>info.id===2? info:'')})
 
       }
       if(e.target.id==='3'){
         this.setState({project:info.filter(info=>info.id===3? info:'')})
 
       }
       if(e.target.id==='4'){
         this.setState({project:info.filter(info=>info.id===4? info:'')})
 
       }
      document.getElementById("myModal").style.display = "block"; 

   }
   
   // When the user clicks on <span> (x), close the modal
   let close=(e)=> {
   document.getElementById("myModal").style.display = "none";


   }
   
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
     if (event.target === document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
     }}
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
]        <section id='home'className="section">
            <div className="box">
               <h2 className="title">Hi, My name is Diana Ponce</h2>
            </div>
	
</section>
{/* ////////////////// */}
<section id='about' className="section">
<p className='my-info'>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia 
animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
 Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>


</section>

{/* /////////////// */}
<section id='projects' className="section">
	<h2 className="title2">Projects</h2>
   <br></br>
   <br></br>
   <div id="myModal" className ="modal">
{this.state.project.map((info,index)=>
  
<div key={index}className="modal-content">
  <div className="modal-header">



    <span onClick={close} className="close">&times;</span>
    <h2>Modal Header</h2>
  </div>
  <div className="modal-body">
<h1 className='name-p'>{info.name}</h1>
<h2 className='tech'>Technologies used:</h2>
<p className='description'>{info.description}</p>
  </div>
<p className='tools'>{info.tools.split(',').map((line,index) => <li key={index} className="line">{line}</li> )}</p>


  <Carousel id='iframe' indicator="false">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={info.pic1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={info.pic2}
      alt="Third slide"
    />     
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={info.pic3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  {info.pic4?
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={info.pic4}
      alt="Third slide"
    />
   

    

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  :''}
  {info.pic5?
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={info.pic5}
      alt="Third slide"
    />
   

    

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  :''}
  {info.pic6?
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={info.pic6}
      alt="Third slide"
    />
   

    

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  :''}
  {info.pic7?
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={info.pic7}
      alt="Third slide"
    />
   

    

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  :''}
  {info.pic8?
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={info.pic8}
      alt="Third slide"
    />
   

    

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  :''}
</Carousel>
  <div className="modal-footer">
    <h3>Modal Footer</h3>
  </div>
</div>
 )}
 
</div>

  
   <div className="row flex">

			<div className="col-lg-4 col-sm-6">
         
  
  
  
				<div className="thumbnail lis  one box1">
					<img alt='pic' className='pic 'src={require('../imgs/endangered.png')}/>
      <div className="middle">
         <button id='1'onClick={openUp}className="text">Learn More</button>
  </div>
				</div>
            
			</div>
			<div className="col-lg-4 col-sm-6">
        
         
				<div className="thumbnail lis  two box1">
            <img alt='pic' className='pic ' src={require('../imgs/cupcakes.png')}/>
            <div className="middle">
         <button id='3' onClick={openUp}className="text">Learn More</button>
  </div>
				</div>
			</div>
         <div className="w-100"></div>

			<div  className="col-lg-4 col-sm-6">
         
				<div className="thumbnail another three box2">
            <img alt='pic' className='pic ' src={require('../imgs/illucid.png')}/>
            <div className="middle">
         <button id='2'onClick={openUp}className="text">Learn More</button>
  </div>
				</div>
			</div>
			<div className="col-lg-4 col-sm-6">
       
				<div className="thumbnail another four box2">
            <img alt='pic' className='pic ' src={require('../imgs/travel.png')}/>
              <div className="middle">
         <button id='4'onClick={openUp}className="text">Learn More</button>
  </div>
				</div>
			</div>
		</div>


</section>
<section id='contact' className="section">
	<h2 className="title3">Contact</h2><br></br>
   <form>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Name</label>
    <input 
     onChange={this.handleChange}
     value={this.state.name}
     name='name'
    type="name" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput2">Email address</label>
    <input 
    onChange={this.handleChange}
    value={this.state.email}
    name='email'
    type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
 
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">message</label>
    <textarea
    name='feedback'
     className="form-control"
      id="exampleFormControlTextarea1"
       rows="3"
       onChange={this.handleChange}
       value={this.state.feedback}

       ></textarea>
  </div>
  <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />

</form>
{/*  */}


   {/* <form className="test-mailing">
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
  	</form> */}
</section>
</>
    )
}
}