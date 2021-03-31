import endangered from '../imgs/endangered.png'
import illucid from '../imgs/illucid.png'
import cupcake from '../imgs/cupcakes.png'
import travel from '../imgs/travel.png'
import shopmart from '../imgs/shopmart.png'
import taco from '../imgs/taco-haven.png'




const info = [
    {
        id:6,
        class:'taco-Haven',
        main:taco,
        name: 'Taco-Haven',
        tools:'Boostrap, CSS,HTML,React',
        description:'Mexican Restaurant example site ',
        gitLink:'https://github.com/diana2341/tac-p',
        deploy:'https://taco-haven-restaurant.netlify.app/'

    },
    {
        id:5,
        class:'shopmart',
        main:shopmart,
        name: 'Shop-mart',
        tools:'Ruby Rails, CSS,HTML,React,Redux',
        description:'A  ecommerce site for clothing powered with  React + Redux ',
        gitLink:'https://github.com/diana2341/shopMart-front',
        deploy:'https://shop-mart-us.netlify.app/'

    },
    {
      id:1,
      main:endangered,
      class:'endangered',
      name: 'Endangered Lives',
      tools:'React.js, Ruby Rails API, CSS,HTML',
      libraries:'React slide-show-image, React Simple Maps',
      video:"https://www.youtube.com/embed/xTjHOjz2xGA",
      description:"An educational site  that raises awareness about several animal species endangered due to poaching. Reasons for poaching are explained to the user. They can also view recent news about the animal and are able to join a community to discuss  the topic with others.",
      gitLink:'https://github.com/diana2341/why-poaching-front',
      youtube:'https://www.youtube.com/watch?v=xTjHOjz2xGA&t=13s',      
    },
    {
        id:4,
        class:'travel',
        main:travel,
        name: 'Travel Rails',
        tools:'Ruby Rails, CSS,HTML,Bulma.io',
        video:"https://streamable.com/e/ai4u1c",
        description:'A site for hosting homes as stays for people on vacation and where homes, apartments, or rooms can be booked by people traveling. Users can become hosts and post their homes or find a home.',
        gitLink:'https://github.com/diana2341/My_Travel_rails',
        youtube:'https://streamable.com/ai4u1c',
    },
    {
        id:2,
        class:'illucid',
        main:illucid,
        name: 'Illucid Beats',
        tools:'Vanilla Javascript, CSS, HTML, Ruby Rails API',
        video:"https://www.youtube.com/embed/pOq3eoo0Mjs",
        description:'A sound machine used to reduce stress, increase concentration or enable the ability to sleep better with ambient noises. Users can make a mix of ambient noises and listen to others creations.',
        gitLink:'https://github.com/diana2341/illucid-beats-front',
        youtube:'https://www.youtube.com/watch?v=pOq3eoo0Mjs',
        deploy:'https://illucid-beats.netlify.app/'
    },
    {
        id:3,
        class:'sugar',
        main:cupcake,
        name: 'Sugar Lips',
        tools:'React.js, Ruby Rails API, CSS,HTML',
        video:"https://www.youtube.com/embed/J1_E9mqnAM8",
        description:'An ecommerce site for a bakery that sells cupcakes, where  users can order any amount of these treats to be delivered to their homes!',
        gitLink:'https://github.com/diana2341/mod4-sugarlips_cupcakes-client',
        youtube:'https://www.youtube.com/watch?v=J1_E9mqnAM8&t=2s',
    }

  ];
  
  export default info;