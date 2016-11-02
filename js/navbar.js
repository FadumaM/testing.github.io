$(document).ready(function() {

  //MOBILE TWO
  $(".mobile-two .menu-toggle").click(function() {
    $(this).toggleClass('open');
    $(this).parent().next(".mobile-nav").toggle(0, "display");
  });
});
