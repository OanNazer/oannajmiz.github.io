const menu = document.querySelector('nav');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', function() {
  menu.classList.add('transform');
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
