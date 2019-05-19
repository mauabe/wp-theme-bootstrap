// Paralax Effect
// https://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
$(function(){
  const $window = $(window);
  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this);
    $window.scroll(function(){
      //scroll the background at var speed
      //scroll y position as a negative value beacuse it is scrolling up
      const yPos = -($window.scrollTop() / $bgobj.data('speed'));

      const coords = '50%' + yPos + 'px';

      //move background
      $bgobj.css({ backgroundPosition: coords })
    });
  });
});