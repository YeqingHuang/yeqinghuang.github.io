/**
 * Template Name: iPortfolio - v1.4.0
 * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
    "use strict";

    // typing animation
    if ($(".typed").length) {
        var typed_strings = $(".typed").data("typed-items");
        typed_strings = typed_strings.split(",");
        new Typed(".typed", {
            strings: typed_strings,
            loop: true,
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 1000,
        });
    }

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on("click", ".nav-menu a, .scrollto", function (e) {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {
                var scrollto = target.offset().top;

                $("html, body").animate(
                    {
                        scrollTop: scrollto,
                    },
                    1500,
                    "easeInOutExpo"
                );

                if ($(this).parents(".nav-menu, .mobile-nav").length) {
                    $(".nav-menu .active, .mobile-nav .active").removeClass(
                        "active"
                    );
                    $(this).closest("li").addClass("active");
                }

                if ($("body").hasClass("mobile-nav-active")) {
                    $("body").removeClass("mobile-nav-active");
                    $(".mobile-nav-toggle i").toggleClass(
                        "icofont-navigation-menu icofont-close"
                    );
                }
                return false;
            }
        }
    });

    $(document).on("click", ".mobile-nav-toggle", function (e) {
        $("body").toggleClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
        );
    });

    $(document).click(function (e) {
        var container = $(".mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($("body").hasClass("mobile-nav-active")) {
                $("body").removeClass("mobile-nav-active");
                $(".mobile-nav-toggle i").toggleClass("bx-menu");
            }
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });

    $(".back-to-top").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            1500,
            "easeInOutExpo"
        );
        return false;
    });
})(jQuery);

/* Header section */
// ask user to confirm when clicking on email link in portfolio
let sendMail = function (e) {
    window.location.href =
        "mailto:yeqingh22@gmail.com?body=Hi,%20I%20found%20you%20from%20your%20website";
};

let emailButton = document.getElementsByClassName("send-email")[0];
emailButton.addEventListener("click", sendMail);
