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



// (function() {
//     $("#imgTop").fadeIn(1800);
//     $("#imgTop").fadeOut(1800);
// })();



// (function() {
//     $("#imgTop2").fadeOut(1800).show(1800).slideUp(1800).slideToggle(1800);
// })();



// $("h1").animate({
//     opacity: .25,
//     fontSize: 10
// }, {
//     duration: 2500,
//     complete: function() {
//         this.text("До свидания");
//     }
// });


// $("#imgTop2").animate({ "width": "+=500" }, 500, "linear");

$("#imgTop2").bind({
    mouseover: function() { $(this).stop().fadeTo(300, 1.0); },
    mouseout: function() { $(this).stop().fadeTo(300, 0.5); }
});




$("#message").fadeIn().delay(200).queue(function(next) {
            $(this).text("Привет, Мир!");
                next();
            }).animate({ borderWidth: "+=10px;" });










        // bind()
        // rigger()
        // delegate() и undelegate()


        // АНИМАЦИОННЫЕ ЭФФЕКТЫ
        // fadeIn(), fadeOut(), fadeTo()
        // show(), hide(), toggle()
        // slideDown(), slideUp(скрывает выбранные элементы в объекте jQuery, постепенно уменьшая их высоту до 0), slideToggle(выполняет противоположные действия)
        // 
        //  
        // 
        // 
        // 
        // 
        // 
        // 
        // 
        // 
        //
