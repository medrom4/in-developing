(function() {
    $("p").click(function() {
        $(this).css("background-color", "gray");
    });
})();



(function() {
    $("img").click(function() {
        $(this).css("opacity", "30%");
    });
})();

(function() {
    // Удалить все обработчики событий mouseover и mouseout во всех элементах <a>
    $('a').unbind("mouseover mouseout");
})();



(function() {
    $("#imgTop").click(function() {
        $.event.trigger("logoff");
        window.location = "logoff.php";
    });
})();






// bind()
// rigger()
