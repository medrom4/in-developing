(function() {
    var inputelts = document.getElementsByTagName("input");

    for (var i = 0; i < inputelts.length; i++) {
        var elt = inputelts[i];

        if (elt.type != "text" || !elt.getAttribute("data-allowed-chars"))
            continue;
    }
});
