const menu = document.querySelector('nav');
const menuBtn = document.querySelector('#menu-btn');


menuBtn.addEventListener('click', function() {
  menu.classList.add('transform');

});

var links = document.querySelectorAll('.link');

$('.link').on('click', function(e){
  if(this.hash !== ''){
    e.preventDefault();
    
    menu.classList.remove('transform');
    links.forEach(function(el){
      el.classList.remove('active');
      e.target.classList.add('active');
    })
    
    const link = this.hash;
    
    $('html, body').animate({
      scrollTop: $(link).offset().top - 50
    }, 1000, 'swing');
  }
  
});