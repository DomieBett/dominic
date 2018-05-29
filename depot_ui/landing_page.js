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
            if (toTop <= breakpoints[0] - 20) {
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

    // var slideshow = (function () {
    //     var counter = 0,
    //         i,
    //         j,
    //         slides = $(".description-cards"),
    //         slidesLen = slides.length - 1;
    //     for (i = 0, j = 9999; i < slides.length; i += 1, j -= 1) {
    //         $(slides[i]).css("z-index", j);
    //     }
    //     return {
    //         startSlideshow: function () {
    //             window.setInterval(function () {
    //                 if (counter === 0) {
    //                     slides.eq(counter).fadeOut();
    //                     counter += 1;
    //                 } else if (counter === slidesLen) {
    //                     counter = 0;
    //                     slides.eq(counter).fadeIn(function () {
    //                         slides.fadeIn();
    //                     });
    //                 } else {
    //                     slides.eq(counter).fadeOut();
    //                     counter += 1;
    //                 }
    //             }, 2000);
    //         }
    //     };
    // }());
    // slideshow.startSlideshow();

    $(".main-description > .description-cards:gt(0)").hide();

    setInterval(function () {
        $('.main-description > .description-cards:first')
            .fadeOut(0)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.main-description');
    }, 5000);
});

