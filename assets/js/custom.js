/*==================================================================================
    Custom JS (Any custom js code you want to apply should be defined here).
====================================================================================*/

$(document).ready(function(){
  $('.toggle').click(function(){
    $('.sidebar-contact').toggleClass('active')
    $('.toggle').toggleClass('active')
  })

  $('.toggle-button').click(function(){
    $('.sidebar-contact').toggleClass('active')
    $('.toggle').toggleClass('active')
  })
});

function contactar() {
  $('#sidebar-contact').toggleClass('active');
  $('#sidebar-contact-result').toggleClass('active');
}

// prevent screen from moving when clicking on <a href=></a>
function removeEvent(evt) {
  evt.preventDefault();
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          event.stopPropagation();
          contactar();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();