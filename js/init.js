

(function($){
    $(function(){
  
      $('.sidenav').sidenav();
      $('.parallax').parallax();
   
    }); 
  })(jQuery); 
  
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
   
      hoverEnabled: false
    });
  });
  
  

  
  
  let navbar = document.querySelector('nav');
  
  document.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    if(scrollPosition > 100){
        navbar.classList.add('transparentChange');
        navbar.classList.remove('transparent');
     
    }else{
      
      navbar.classList.add('transparent');
      navbar.classList.remove('transparentChange');
     
    }
  
  
  })
