$(function () {
    $(".liclas").mouseover(function () {
        $(this).children("div").show();
    }).mouseout(function () {
        $(this).children("div").hide();
    })
})