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
  })