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