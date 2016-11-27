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

    $(".outreach").click(function() {
     $("#modal-container").show();
     });

    // IMPLEMENT "HIDE MODAL" WHEN "CLICK ON CANCEL BUTTON FROM MODAL BOX" HERE
    $(".children").click(function() {
     $("#modal-container").hide();
        $("#modal-container-overseas").hide();
    $("#modal-container-stargazing").hide()
     });

    // Question 5
    // IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
    $("#modal-overlay").click(function() {
     $("#modal-container").hide();
     $("#modal-container-overseas").hide();
      $("#modal-container-stargazing").hide()
     });

     $(".overseastrip").click(function() {
      $("#modal-container-overseas").show();
      });

      $(".stargazing").click(function() {
       $("#modal-container-stargazing").show();
       });


});
