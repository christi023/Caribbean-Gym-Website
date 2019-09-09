// Button Color Changes

let button = document.querySelector('.home-btn');

button.onclick = function() {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);

  this.style.backgroundColor = 'rgba(' + red + ',' + green + ',' + blue + ')';
};

// Math.floor(Math.random() * 256) [0-255]
// rgb(255,255,255)

// Smooth Scroll Effect
$(document).ready(
  (function() {
    var scrollLink = $('.scroll');
  })('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear',
    );
  }),
);
