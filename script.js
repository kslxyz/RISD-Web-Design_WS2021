$(document).ready(function() {
    $("html,body").animate({scrollTop: 0}, 100);
    if (window.matchMedia('(min-width: 768px)').matches) {
        $(".sec").css("margin-top", $("nav").outerHeight()+10);

        $(".left").css({
            "height": $(".right").height()-5,
            "width": $(".right").height()-5
        });

        $(".syl-head").hover(function() {
            $(this).find(".left").toggle();
        })
    }

    if (window.matchMedia('(max-width: 768px)').matches) {
        $(".menu").click(function() {
            if($("nav").hasClass("open")) {
                $("nav").removeClass("open");
                $(".menu h1").text("Menu +");
            } else {
                $("nav").addClass("open");
                $(".menu h1").text("Menu —");
            }

        })

        $("nav a").click(function() {
            $("nav").removeClass("open");
            $(".menu h1").text("Menu +");
        });
    }

    $(".sec").hide();
    $("#syllabus").show();


    $("nav a").click(function() {
        $("html,body").animate({scrollTop: 0}, 100);
        $("nav div").removeClass("active");
        let thisLink = $(this).attr("href");
        $(".sec").hide();
        $(thisLink).show();

        $(this).closest("div").addClass("active");

        $(".syl-text").hide();
    })



    $(".syl-head").click(function() {
        $(this).closest(".syl-sec").find(".syl-text").slideToggle();
    })

})

$(window).resize(function() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        $(".menu").click(function() {
            if($("nav").hasClass("open")) {
                $("nav").removeClass("open");
                $(".menu h1").text("Menu +");
            } else {
                $("nav").addClass("open");
                $(".menu h1").text("Menu —");
            }

        })

        $("nav a").click(function() {
            $("nav").removeClass("open");
            $(".menu h1").text("Menu +");
        });
    }
})