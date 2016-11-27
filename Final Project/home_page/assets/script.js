$(document).ready(function() {
    function parallax() {
    	/* YOUR CODE HERE */
    	var scrolled = $(window).scrollTop();
    	$('.parallax').css('top', -(scrolled * 0.6) + 'px');
    }

    /* YOUR CODE HERE */
    $(window).scroll(function() {
        parallax();
    });

    $(".quote").hover(function() {
     $(".comic").fadeIn(1000);
     $(".quote").addClass("bold");
     });

     $(".comic").hover(function() {
      $(".comic").fadeOut(1000);
      $(".quote").removeClass("bold");
      });

});
