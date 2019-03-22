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


// Удалить все обработчики событий mouseover и mouseout во всех элементах <a>
$('a').unbind("mouseover mouseout");
