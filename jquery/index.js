$("h1").append("<span>teste</span>");
$("h1").prepend("<span>teste</span>");
$("h1").before("<span>teste</span>");
$("h1").after("<span>teste</span>");
$("h1").click(function (e) {

});
$("h1").on("click", function (e) {

});
$("h1").html("<span>teste</span>");
$("h1").text("teste");
$("h1").css("color", "blue");
$("h1").attr("id", "fodase");
$("h1").attr("id");
$("h1").data("some-value");
$("h1").data("some-id");

$("h1").fadeIn();
$("h1").fadeOut();
$("h1").fadeToggle();
$("h1").hide();
$("h1").show();
$("h1").toggle();

$("h1").animate({opacity: 0.5});

$("h1").slideUp().slideDown().animate(opacity: 0.5);

$(selector).focus(function (e) { 
    e.preventDefault();
});

$(selector).slideDown();

$(selector).slideDown(duration, function () {
    
});

$.ajax({
    type: "post",
    url: "url",
    data: "data",
    dataType: "json",
    success: function (response) {

    },
    error: function (request, status, error) {
        alert(request.responseText);
    }
});

$.post("url", data,
    function (data, textStatus, jqXHR) {

    },
    "dataType"
);

$.post("ajax/test.html", function (data) {
    $(".result").html(data);
});

$.get("url", data,
    function (data, textStatus, jqXHR) {

    },
    "dataType"
);

$.getJSON("url", data,
    function (data, textStatus, jqXHR) {

    }
);
