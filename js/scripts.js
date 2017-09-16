$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#toggle-menu").fadeToggle();
  $(".north-logo").fadeToggle();
  $(".nav").toggleClass("on");
  $("html, body").toggleClass("no-scroll");
});


$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > $(window).height()*0.5) {
				 $("#sydney").addClass('show');
      }
      if ($(this).scrollTop() < $(window).height()*0.5) {
         $("#sydney").removeClass('show');
      }
   });
});


$('#footer').footerReveal();
