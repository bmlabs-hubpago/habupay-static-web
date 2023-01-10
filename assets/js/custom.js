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
  let body = {  
    nombre: document.getElementById("nombre").value,  
    email: document.getElementById("email").value,  
    fono: document.getElementById("fono").value,  
    mensaje: document.getElementById("mensaje").value
  };

  $.ajax({
    type: "POST",
    url : "https://api.hubpago.com/app-admin/api-public-admin/api/v1/Empresa/Contacto",
    data : JSON.stringify(body),
    processData: false,
    beforeSend: function(request) {
      request.setRequestHeader("ApiKey", 'f432b39d-42be-4c93-8faf-458c87bb22bb');
      request.setRequestHeader("Content-Type", 'application/json; charset=utf-8');
    },
    success: function(data, textStatus, jqXHR) {
      debugger;
      if (data == true) {
        $('#sidebar-contact').toggleClass('active');
        $('#sidebar-contact-result').toggleClass('active');
      } else {
        sideBarContactToggle();
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      sideBarContactToggle();
    }
  });
}

function sideBarContactToggle() {
  $('#sidebar-contact-alert').toggleClass('active');
  setTimeout(() => {
    $('#sidebar-contact-alert').toggleClass('active');
  }, 5000);
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
          contactar(form);
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();