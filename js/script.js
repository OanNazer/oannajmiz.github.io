var links = document.querySelectorAll('.link');

$('.link').on('click', function(e){
  if(this.hash !== ''){
    e.preventDefault();
    //menu.classList.remove('transform');
    links.forEach(function(el){
      el.classList.remove('active');
      e.target.classList.add('active');
    })
    
    const link = this.hash;
    console.log(link)
    $('html, body').animate({
      scrollTop: $(link).offset().top - 50
    }, 1000, 'easeInOutExpo');
  }
  
});
