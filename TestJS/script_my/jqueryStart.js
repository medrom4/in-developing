(function() {
    $(".clicktohide").click(function() { $(this).slideUp("slow"); });
})();


(function() {
    var coll = $("button").length;
    console.log(coll);
})();

(function() {
    $("div").each(function(idx) {
        $(this).prepend(idx + ": ");
        if (this.id === "last") return false;
    });
})();
