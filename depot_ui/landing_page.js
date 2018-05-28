$(document).ready(function () {

    var breakpoints = [
        $("#about_us").offset().top,
        $("#services").offset().top,
        $("#services1").offset().top,
        $("#services2").offset().top,
        $("#services3").offset().top,
    ];
    var breakpoint = 0;

    $('.hi-icon').click(function () {
        $('html, body').animate({
            scrollTop: (breakpoints[breakpoint])
        }, 600);

        breakpoint += 1;
        if (breakpoint >= 5) {
            breakpoint = 0
        }
    });

    $(document).on('scroll', function () {
        var toTop = $(document).scrollTop();
        for (brkpoint in breakpoints) {
            if (toTop <= breakpoints[0] -20) {
                breakpoint = 0;
                break;
            }
            if (toTop <= breakpoints[brkpoint] - 20) {
                breakpoint = brkpoint;
                console.log(breakpoint);
                console.log(brkpoint);
                break;
            }
        }
    });
});

