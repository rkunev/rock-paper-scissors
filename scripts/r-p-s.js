$(document).ready(function() {
    var state = true;
    $("img").click(function() {
        if (state) {
            // resets all img changes
            $("img").css("width", "175");
            $("img").removeClass("userChoice");

            // animates clicked img
            $(this).animate({ 
              width: 200
            }, 100);
            $(this).toggleClass("userChoice");
        }
        else {
            $(this).animate({
              width: 175
            }, 100);

            $(this).toggleClass("userChoice");
        }
        state = !state;
    });
});

