$(document).ready(function () {
    const $header = $("header.header")
    let prevScroll
    let lastShowPos

    $(window).on("scroll", function () {
        const scrolled = $(window).scrollTop()

        if (scrolled > 50 && scrolled > prevScroll) {
            $header.addClass("header-out")
            lastShowPos = scrolled
        } else if (scrolled <= Math.max(lastShowPos - 50, 0)) {
            $header.removeClass("header-out")
        }
        prevScroll = scrolled
    })


    // show more
    $('.showmore').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.zvitsect').toggleClass('showall');
        $(this).find('span').toggle();
    });

    // to top
    $(function () {
        $('.totop').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        })

    });

    // header
    $("header.header ul").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 800);
    });

    $('.menu').click(function () {
        $('.menucol').addClass('open');
        $('body').addClass('hidden');
    });
    $('.closemenu').click(function () {
        $('.menucol').removeClass('open');
        $('body').removeClass('hidden');
    });

    if ($(window).width() < 992) {
        $('header.header .menucol nav ul li a').click(function () {
            $('body').removeClass('hidden');
            $('.menucol').removeClass('open');
        })
    }


})