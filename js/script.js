//----------------------------------------------------------------------------------------------------
//-- IIFE (Immediately Invoked Function Expression)
//----------------------------------------------------------------------------------------------------
(() => {

  //-- STARTING Constants & Variables --------------------------------------------------------------------------------
  const body = document.body
  const header = document.getElementById('header')
  const navBar = document.getElementById('navbar')
  //-- ENDING Constants & Variables --------------------------------------------------------------------------------


  //-- STARTING Events --------------------------------------------------------------------------------
  
  //----------------------------------------------------------------------------------------------------
  //-- Navbar Events
  //----------------------------------------------------------------------------------------------------
  
  // Opens navbar on small devices
  document.getElementById('nav_open_btn')
  .addEventListener('click', e => {    
    navBar.style.display = 'block'
    navBar.style.animation = 'SlideInFromRight .4s ease-in-out forwards'
    // body.scrollTop = 0
    // document.documentElement.scrollTop = 0
  })
  
  // Closes navbar
  document.getElementById('nav_close_btn')
  .addEventListener('click', e => {
    navBar.style.animation = 'SlideOutToRight .4s ease-in-out forwards'
    
    // setTimeout(() => {
    //   // navBar.style.display = 'none'
    // }, 400) // Timeout should be equal to the animation time

  })

  // Shows/hides header background on scrolling
  document.addEventListener('scroll', e => {
    
    if(scrollY >= 10) {
      header.style.background = 'rgba(0, 0, 0, .4)'
      header.style.boxShadow = '0 0 10px #000'
      header.style.backdropFilter = 'blur(10px)'
    }

    if(scrollY < 10) {
      header.style.background = 'rgba(255, 255, 255, 0)' 
      header.style.boxShadow = '0 0 0 #000'
      header.style.backdropFilter = 'blur(0)'
    }

  })

  //-- ENDING Events --------------------------------------------------------------------------------

  //-- STARTING Type Writer Script --------------------------------------------------------------------------------
  new Typewriter(
    document.getElementById('type_writer_div'),
    {
      autoStart: true,
      loop: true,
      delay: 50,
      deleteSpeed: 40,
      pauseFor: 4000,
      cursor: '_',
      strings: ['Web Developer', 'Gamer'],
    }
  )
  //-- ENDING Type Writer Script --------------------------------------------------------------------------------

})()