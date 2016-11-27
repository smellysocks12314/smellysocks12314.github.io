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

});
