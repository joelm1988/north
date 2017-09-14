$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#toggle-menu").fadeToggle();
  $(".north-logo").fadeToggle();
  $(".nav").toggleClass("on");
  $("html, body").toggleClass("no-scroll");
});


$('#footer').footerReveal();


/*
$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > $(window).height()*1) {
         $(".nav").addClass('show');
      }
      if ($(this).scrollTop() < $(window).height()*0.5) {
         $(".nav").removeClass('show');
      }
   });
});
*/
