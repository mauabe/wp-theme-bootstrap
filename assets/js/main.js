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

/*

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


const modalBtn = document.querySelector('button[data-toggle="modal"]');

const modal = document.querySelector('.modal');
console.log('modal div',  modal);

const showModal = function() {
  // console.log('you clicked the button'); //works
  // console.log('modalButton', modalBtn);  //works
    modal.classList.add('in', 'show', 'modal-open');
};
// const hideModal = function(){
//   let popup = document.getElementById('modal');
//   popup.classList.remove('show');
// };


$(document).ready(function(){
  // console.log('jquery here');
  $("modalBtn").click(function(){
    $("#myModal").modal();
  });
});

modalBtn.addEventListener('click', showModal)
*/

