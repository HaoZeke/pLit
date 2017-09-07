// var buttons = Array.from(document.getElementsByClassName('modal-button'));

// for (var i = 0; i < buttons.length; i++) {
//   var button = buttons[i];
//   var target = document.querySelector(button.dataset.target);
  
//   button.addEventListener("click", function(e) {
//     target.classList.toggle('is-active');
//   }, false);
// }

/*u('.modal-button').on('click',function(e) {
u(this).toggleClass('is-active')})

u('.modal-button').on('click',function(e) {
u('[data-target]')
u(this).toggleClass('meeee')}).array()
*/


u('.modal-button').on('click',function(e) {
var temp=u(this).data('target')
u(temp).toggleClass('is-active')})
