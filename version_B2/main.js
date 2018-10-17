let moved = 0;
$(document).ready(function() {
    $("header").hide();
    $("nav").hide();
    $("#about").hide();
    $("#links").hide();
    $("#contact").hide();
    $("#courses").hide();
    $("#specialbar").hide();
    $("#scrollbar").hide();
    $("#Responsive").hide();
    //fadeIn for elements
    $("header").fadeIn(2000);
    $("nav:not(#specialbar)").fadeIn(3000);
    $("#about").fadeIn(3500);
    $("#courses").fadeIn(3500);
    $("#links").fadeIn(4000);
    $("#contact").fadeIn(4000);
    $("#Responsive").fadeIn(4000);

    //specialbar hide and show
    $("#special").click(function() {
        if ($("#specialbar").is(":hidden")) {
            $("#specialbar").show();
        } else {
            $("#specialbar").hide();
        }
    });

    $("#task1").click(function() {
        if ($(".header").hasClass('text-center')) {
            $(".header").attr('class', 'text-left header');
        } else if ($(".header").hasClass('text-left')) {
            $(".header").attr('class', 'text-right header');
        } else {
            $(".header").attr('class', 'text-center header');
        }
    });

    $("#task2").click(function() {
        var hobby = prompt("Want to add a new hobby!", "For example: Table Tennis");
        var card = '<div class="card bg-primary mx-2 mb-2" style=" width: 100px"><div class="card-body p-1 "><h5 class="card-title text-center " style="font-size: 14px">' + hobby + '</h5></div><img class="card-img-bottom " src="img/new.png " alt="' + hobby + '"></div>';
        if (hobby != null) {
            $(".d-flex").last().append(card);
        }
    });

    $("#task3").click(function() {
        if ($("#scrollbar").is(":hidden")) {
            $("#scrollbar").show();
            var st = $(window).scrollTop();
            var wh = $(document).height() - $(window).height();
            console.log($(window).scrollTop(), $(window).height(), $(document).height());
            var percentage = Math.ceil((st * 100) / wh);
            percentage = percentage + "%";
            var width = 'width: ' + percentage;
            $("#scrollbar_body").attr('style', width);
            $("#scrollbar_body").text(percentage);
        } else {
            $("#scrollbar").hide();
        }
    });

    var $w = $(window).scroll(function() {
        var st = $w.scrollTop();
        var wh = $(document).height() - $(window).height();
        var percentage = Math.ceil((st * 100) / wh);
        percentage = percentage + "%";
        var width = 'width: ' + percentage;
        console.log($(window).scrollTop(), $(window).height(), $(document).height());
        $("#scrollbar_body").attr('style', width);
        $("#scrollbar_body").text(percentage);
        if ($w.scrollTop() == $(document).height()) {
            var width1 = 'width: 100%';
            $("#scrollbar_body").attr('style', width);
            $("#scrollbar_body").text('100%');
        } else if ($w.scrollTop() == 0) {
            var width2 = 'width: 0%';
            $("#scrollbar_body").attr('style', width);
            $("#scrollbar_body").text('0%');
        }
    });


    $("#task4").click(function() {
        alert("A special Easter egg is hidden on the footer, click it to try!(The section part will move left and move back when you click the footer)");
    });

    $("#footer").click(function() {
        if (moved == 0) {
            $("section").animate({ "left": "+=50px" }, "slow");
            moved = 1;
        } else if (moved == 1) {
            $("section").animate({ "left": "-=50px" }, "slow");
            moved = 0;
        }
    });

});