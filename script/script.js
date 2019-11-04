$(function() {

    var $wrap = $("#wrap");
    var $main = $wrap.parents("#main");
    var $nav = $main.siblings("#nav");
    var $odyssey = $main.next("#odyssey");
    var $model = $main.siblings("#model");

    // 메인
    $wrap.children("img").eq(0).css({
        "transform": "rotate( -44deg )",
        "top": "10px",
        "left": "67px"
    });

    window.setTimeout(function() {
        $("html, body").css("overflow", "visible");
    }, 3490); // 4900

    window.setTimeout(function() {
        $main.css({
            "transition": "0.8s",
            "background-color": "#fff"
        });

        $("html").animate({ scrollTop: $(window).height() }, 1000, function() {
            $(this).scrollTop = 0;
            $main.css("display", "none");
        });
    }, 3500); // 1000, 5000

    // 스크롤
    $(window).on("scroll", function(event) {
        var top = $("html").scrollTop();

        // if (top == 0)
        //     return false;

        if (top > $odyssey.offset().top - 100 && top < $odyssey.offset().top + 300) {
            $odyssey.children(".new_hover").css("left", "-300px").addClass("new_on")
            .children("img").css("padding-left", 0).fadeOut(100).siblings(".info").css({
                "opacity": "1",
                "padding-right": "220px"
            }).end().end().siblings(".new_nonehover").css("left", 0);
        }

        else if (top <= $odyssey.offset().top - 100 || top >= $odyssey.offset().top + 300) {
            $odyssey.children(".new_hover").removeClass("new_on").css("left", "0")
            .children("img").fadeIn(100).css("padding-left", "120px").siblings(".info").css({
                "opacity": "0",
                "padding-right": "0"
            }).end().end().siblings(".new_nonehover").css("left", "-100%");
        }

        if (top > $model.offset().top - 200 && top < $model.offset().top + 200) {
            $model.children(".new_hover").css("right", "-300px").addClass("new_on")
            .children("img").css("padding-right", 0).fadeOut(100).siblings(".info").css({
                "opacity": "1",
                "padding-left": "230px"
            }).end().end().siblings(".new_nonehover").css("right", 0);
        }

        else if (top <= $model.offset().top - 200 || top >= $model.offset().top + 200) {
            $model.children(".new_hover").css("right", "0").removeClass("new_on")
            .children("img").fadeIn(100).css("padding-right", "100px").siblings(".info").css({
                "opacity": "0",
                "padding-left": "0"
            }).end().end().siblings(".new_nonehover").css("right", "-100%");
        }

        // console.log("scrollTop: " + top);
        // console.log("odyssey: " + $odyssey.offset().top); 120
        // console.log("model: " + $model.offset().top); 878

    }); // window.onscroll

    // 메뉴
    $nav.children("#sub_logo").on("click", function() {
        if ($("html").scrollTop == 0)
            return false;

        $("html").animate({ scrollTop: 0 }, 400);
    });

    $(window).on("wheel", function(event) {

        console.log(event.originalEvent.deltaY);
        // up: -100, down: 100 
        
        // wheeled up
        if (event.originalEvent.deltaY < 0) {
            if ($nav.is(":visible"))
                false;

            $nav.css("display", "block");
            // console.log("up");
        }
        
        // wheeled down
        else {
            if ($nav.is(":hidden"))
                false;

            $nav.css("display", "none");
            // console.log("down");
        }
    });

})