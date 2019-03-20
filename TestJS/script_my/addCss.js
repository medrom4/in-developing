(function() {
    $("div").addClass("hilite");
})();


(function() {
    var title = $("head title").text();
    var hedline = $("body h1").text();

    $("h1").text(function(n, current) {
        return "$" + (n + 1) + ": " + current
    });

    console.log(title);
    console.log();

    console.log(hedline);
    console.log();
})();


(function() {
    var elt = $(".clicktohide");
    var position = elt.offset();

    position.top += 250;
    elt.offset(position);

    $("h1").offset(function(index, curpos) {
        return {
            left: curpos.left + 125 * index,
            top: curpos.top
        };
    });
})();


(function() {
    var classSelP = $(".classP").data("x", 1);
    
    console.log(classSelP);
})();
