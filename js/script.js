"use strict";

var links = document.querySelectorAll('.link');

$('.link').on('click', function(e) {
  if (this.hash !== '') {
    e.preventDefault();
    //menu.classList.remove('transform');
    links.forEach(function(el) {
      el.classList.remove('active');
      e.target.classList.add('active');
    })

    const link = this.hash;
    
    $('html, body').animate({
      scrollTop: $(link).offset().top - 50
    }, 1000, 'easeInOutExpo');
  }

});

if (window.innerWidth <= 5600) {
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();

    // skill box
    if (scroll > $('#skill').offset().top - 200) {
      $('#skill .skill-box').each(function(i) {
        setTimeout(() => {
          if (scroll > $('.skill-box').eq(i).offset().top - 500) {
            $('.skill-box').eq(i).addClass('muncul');

            $('.skill-box .progress-box').each(function(j) {
              console.log($('.progress-box'));

              /*
              setTimeout(()=>{
                if(scroll > $('.progress-box').eq(j).offset().top - 300){
                  $('.progress-box .progress').eq(j).style.width = $('.skill-box .progress-box .progress-num').textContent;
                }
              }, 300*(j+1));
              */

            });
          }
        },
          500 * (i + 1));

      });
    } else {
      $('.skill-box').removeClass('muncul');
    }

    // project box
  });
}

/*
$all('.skill-box').forEach(() => {
  $all('.progress').forEach((el) => {
    console.log($('.progress').width($('.progress-num').textContent))
  });
});
*/

const profile = document.querySelector('.profile').getAttribute('alt');