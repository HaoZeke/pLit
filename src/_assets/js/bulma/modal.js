var buttons = Array.from(document.getElementsByClassName('modal-button'));

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  var target = document.querySelector(button.dataset.target);
  
  button.addEventListener("click", function(e) {
    target.classList.toggle('is-active');
  }, false);
}