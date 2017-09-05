document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
var buttons = Array.from(document.getElementsByClassName('modal-button'));

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  var target = document.querySelector(button.dataset.target);
  
  button.addEventListener("click", function(e) {
    target.classList.toggle('is-active');
  }, false);
}
;


