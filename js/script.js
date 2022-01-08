const menu = document.querySelector('nav');
const menuBtn = document.querySelector('#menu-btn');
const closeMenu = document.querySelector('#close-menu');
//const closeBtn = document.querySelector('.close-menu');
const contactBtn = document.querySelector('.contactBtn');
const contact = document.querySelector('#contact');

menuBtn.addEventListener('click', function() {
  menu.classList.add('transform');
  //closeBtn.classList.add('show');
});

closeMenu.addEventListener('click', function() {
  menu.classList.remove('transform');
  //closeBtn.classList.remove('show');
});

contactBtn.addEventListener('click', function() {
  contact.classList.toggle('show');
});


$('.link').on('click', function(e){
  if(this.hash !== ''){
    e.preventDefault();
    
    menu.classList.remove('transform');
    
    const link = this.hash;
    
    $('html, body').animate({
      scrollTop: $(link).offset().top - 70
    }, 1000, 'swing');
  }
  
});