import React from 'react'
export default class Nav extends React.Component{
    render(){
        return(
            <div>
                <div className='nav'>
                    <div className='tags'>
                    <a href='/'>Home</a>
                    <a href='/about-me'>About</a>
                    <a href='/projects'>Projects</a>
                    <a href='/contact'>Contact</a>
                    </div>
                </div>

                <div id="mySidenav" className='sidenav'>
                    <div className="box-nav"> 
                        <a href='/'>Home</a>
                        <img alt='pic' className='icon home'src={require('../imgs/home.png')}/>
                        <a href='/about-me'>About</a>
                        <img alt='pic' className='icon woman'src={require('../imgs/woman.png')}/>
                        <a href='/projects'>Projects</a>
                        <img alt='pic' className='icon computer'src={require('../imgs/computer.png')}/> 
                        <a href='/contact'>Contact</a>
                        <img alt='pic' className='icon contact'src={require('../imgs/contact.png')}/>
                    </div> 
                </div>
            </div> 
        )
    }
}