/* INITAL PAGE LOAD */
$(document).ready(function() {
	$('.initialLoadOne').delay(500).fadeTo('slow', 1);
	$('.initialLoadTwo').delay(1250).fadeTo('slow', 1);
  $('.initialLoadThree').delay(2000).fadeTo('slow', 1);
});


/* HAMBURGER MENU */
$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#toggle-menu").fadeToggle();
  $(".north-logo").fadeToggle();
  $(".nav").toggleClass("on");
  $("html, body").toggleClass("no-scroll");
});


/* BACKGROUND PAGE TRANSITION */
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


/* FOOTER */
$('#footer').footerReveal();
