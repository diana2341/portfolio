import React, { Component } from 'react'
import info from './Info';
import Me from './me';


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
      this.setState({project:info})
              let options = {
                  
              
              }
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



      // 
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
   
  
   
render(){

   

   
   
    return(
        <>

        <div id="mySidenav" className='sidenav'>
        <img alt='pic' className="me" src={require('../imgs/me2.JPG')}/> 

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
 <svg id="meee"width="1390" height="1172" viewBox="0 0 1390 1172" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="undraw_visualization_c2ps 1" clip-path="url(#clip0)" filter="url(#filter0_d)">
<g >
<path id="Vector" d="M677.15 250.749C677.15 250.749 604.33 230.23 582.792 329.748C561.253 429.266 577.664 479.538 577.664 479.538L740.227 460.558C740.227 460.558 786.381 281.015 677.15 250.749Z" fill="#5A372A"/>
<path id="Vector_2" d="M661.722 409.627C691.517 409.627 715.672 385.465 715.672 355.66C715.672 325.855 691.517 301.693 661.722 301.693C631.926 301.693 607.771 325.855 607.771 355.66C607.771 385.465 631.926 409.627 661.722 409.627Z" fill="#FEB88C"/>
<path id="Vector_3" d="M644.084 396.135C644.084 396.135 650.309 433.497 627.484 443.876L604.659 454.254L693.884 522.75L725.009 437.649C725.009 437.649 693.884 431.422 695.959 387.833L644.084 396.135Z" fill="#FEB88C"/>
<g id="Vector_4">
<path id="Vector_5" d="M638.172 446.409C638.172 446.409 692.783 455.62 714.847 433.419L764.558 437.963L750.734 551.978C750.734 551.978 752.709 613.913 730.987 615.32C709.264 616.728 717.163 602.652 717.163 602.652C717.163 602.652 707.289 612.505 691.491 612.505C675.693 612.505 644.097 604.06 644.097 604.06C644.097 604.06 598.677 599.837 584.853 601.244C571.03 602.652 511.787 609.69 569.055 568.87C569.055 568.87 598.677 554.794 594.727 550.571C590.778 546.348 584.853 528.049 584.853 528.049L586.828 449.224L630.544 442.354L638.172 446.409Z" fill="#575A89"/>
</g>
<path id="Vector_6" d="M682.815 281.229C682.815 281.229 662.303 335.604 612.046 358.176L603.841 309.956L682.815 281.229Z" fill="#5A372A"/>
<path id="Vector_7" d="M716.709 360.849C720.529 360.849 723.626 356.203 723.626 350.471C723.626 344.739 720.529 340.093 716.709 340.093C712.889 340.093 709.792 344.739 709.792 350.471C709.792 356.203 712.889 360.849 716.709 360.849Z" fill="#FEB88C"/>
<path id="Vector_8" d="M1314.23 633.766C1309.61 645.944 1303.93 657.629 1297.25 668.663C1294.12 673.925 1290.69 678.973 1286.97 683.779H137.147C138.182 682.916 144.255 677.664 153.702 668.663C160.479 662.217 168.984 653.835 178.534 643.751L299.723 616.992C301.289 616.647 302.883 616.473 304.482 616.473L433.679 616.274H433.814L497.807 616.185H497.952L551.961 616.119H587.315H623.528L771.918 615.898H772.156H783.651H803.848H829.062H835.767L861.25 615.588H869.672L943.795 615.477H967.468H978.849L1064.47 615.356H1089.96L1171.06 615.234L1239.51 615.146C1241.42 615.147 1243.32 615.388 1245.17 615.864L1314.23 633.766Z" fill="#454B69"/>
<path id="Vector_9" d="M612.432 600.666L722.692 625.035V651.434L612.432 655.495C612.432 655.495 600.618 608.789 612.432 600.666Z" fill="#FEB88C"/>
<path id="Vector_10" d="M611.097 458.677L589.439 448.524C589.439 448.524 563.843 454.616 561.874 476.953C559.905 499.291 522.495 643.47 552.029 649.562C581.563 655.654 620.942 655.654 620.942 655.654C620.942 655.654 595.346 619.102 626.849 598.795L603.221 586.611C603.221 586.611 579.594 531.782 595.346 503.352C611.097 474.923 611.097 458.677 611.097 458.677Z" fill="#575A89"/>
<path id="Vector_11" d="M751.954 438.492H769.674C769.674 438.492 789.363 460.83 785.426 481.137C781.488 501.444 769.674 596.886 769.674 596.886C769.674 596.886 710.606 653.746 681.072 623.285C651.538 592.825 673.196 564.395 673.196 564.395C673.196 564.395 712.575 596.886 734.233 554.242L751.954 438.492Z" fill="#575A89"/>
<path id="Vector_12" opacity="0.4" d="M155.323 668.646H1298.87C1295.74 673.908 1292.31 678.956 1288.59 683.762H138.768C139.782 682.844 145.856 677.592 155.323 668.646Z" fill="black"/>
<path id="Vector_13" d="M894.619 649.502L745.484 670.589L738.024 671.639L665.112 630.019V620.278L892.964 593.718L894.619 649.502Z" fill="#9C9CA1"/>
<g id="arms">
<g id="Vector_14" filter="url(#filter1_dd)">
<path d="M762.597 553.111L788.342 428.156C788.342 428.156 784.894 342.869 813.012 349.943C841.131 357.017 819.018 431.65 819.018 431.65L824.061 579.175C824.061 579.175 790.163 594.027 762.597 553.111Z" fill="#FEC29C"/>
</g>
</g>
<path id="Vector_15" d="M707.367 634.442L868.929 614.086L867.273 645.964L741.428 655.827L707.367 634.442Z" fill="#939498"/>
<path id="Vector_16" opacity="0.4" d="M745.484 660.118V670.578L738.024 671.684L665.102 630.019V620.278L734.703 660.084C734.703 660.084 743.828 661.002 745.484 660.118Z" fill="black"/>
<path id="Vector_17" d="M774.113 494.092L740.631 660.007C740.294 661.668 740.335 663.392 740.752 665.032C741.169 666.672 741.949 668.181 743.027 669.432C744.104 670.682 745.448 671.637 746.943 672.215C748.439 672.794 750.043 672.979 751.619 672.756L963.444 642.791C965.289 642.531 967.029 641.721 968.463 640.454C969.898 639.187 970.97 637.513 971.556 635.626L1017.26 488.342C1017.76 486.708 1017.89 484.967 1017.62 483.269C1017.36 481.571 1016.71 479.968 1015.74 478.597C1014.76 477.226 1013.49 476.128 1012.03 475.399C1010.58 474.669 1008.97 474.33 1007.37 474.409L783.342 485.776C781.163 485.887 779.078 486.761 777.41 488.264C775.742 489.767 774.583 491.815 774.113 494.092Z" fill="#3F3D56"/>
<path id="Vector_18" d="M890.506 555.301C891.026 550.017 888.872 545.444 885.695 545.087C882.519 544.731 879.522 548.725 879.003 554.009C878.483 559.292 880.637 563.865 883.814 564.222C886.99 564.579 889.987 560.585 890.506 555.301Z" fill="white"/>
</g>
<path id="Vector_19" opacity="0.1" d="M1313.04 638.997C1308.43 649.913 1302.76 660.387 1296.11 670.278C1292.98 674.994 1289.56 679.519 1285.85 683.827C1285.82 683.871 1285.78 683.911 1285.74 683.946H139L139.155 683.827C140.187 683.054 146.244 678.346 155.664 670.278C162.423 664.499 170.905 656.986 180.428 647.947C258.322 574.354 407.949 400.158 283.334 240.581C167.489 92.2349 292.218 65.315 374.497 62.1731C406.109 60.9835 437.646 65.9358 467.218 76.7332C505.231 90.6094 574.705 111.88 665.218 121.633C668.19 121.95 671.182 122.267 674.216 122.554C722.136 127.241 770.38 128.083 818.446 125.072C819.86 124.993 821.284 124.893 822.718 124.794C870.267 121.587 917.456 114.575 963.791 103.831C966.794 103.128 969.755 102.464 972.706 101.8C1127.1 67.4857 1269.43 184.432 1233.84 316.593C1220.69 365.477 1224.03 417.582 1267.9 459.736C1339.71 528.542 1331.01 596.308 1313.04 638.997Z" fill="#6C63FF"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="1394" height="1180" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_dd" x="727.737" y="345.991" width="166.65" height="250.123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<clipPath id="clip0">
<rect width="1386" height="1172" fill="white" transform="translate(4)"/>
</clipPath>
</defs>
</svg>

</section>

{/* /////////////// */}
<section id='projects' className="section">
	<h2 className="title2">Projects</h2>
   <br></br>
   <br></br>
   

<CardDeck className='column'>
    {this.state.project.map((info,index)=> 


      <Card key={index}className='card' >

      <Card.Img variant="top"  alt='pic' src={info.main} />
   
      <Card.Body>
 <div  >
 <Card.Title><h2>{info.name}</h2></Card.Title>
 <Card.Text>{info.description}</Card.Text>
 <ListGroup className="list-group-flush">
{info.tools.split(',').map((line,index) => <ListGroupItem key={index}className='list'> {line}</ListGroupItem> )}  </ListGroup>

 
 </div>
 
   
      </Card.Body>


   
 </Card>

   
)}
</CardDeck>




</section>
<section id='contact' className="section">
	<h2 className="title3">Contact</h2><br></br>
   <form onSubmit={this.handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Name</label>
    <input 
    required
     onChange={this.handleChange}
     value={this.state.name}
     name='name'
    type="name" className="form-control" id="exampleFormControlInput1" placeholder="First, last name"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput2">Email address</label>
    <input 
    required
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
    required

       ></textarea>
  </div>
  <button className="btn btn--submit"  >submit</button>

</form>

</section>
</>
    )
}
}