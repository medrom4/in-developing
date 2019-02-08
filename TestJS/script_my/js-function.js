(function() {
    function sibling(e, n) {
        while (e && n !== 0) {
            if (n > 0) {
                if (e.nextElementSibling) e = e.nextElementSibling;
                else {
                    for (e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling)
                }
                n--;
            }
            else {
                if (e.previousElementSibing) e = e.previousElementSibling;
                else {
                    for (e = e.previousSibling; e && e.nodeType !== 1; e = e.previousSibling)
                }
                n++;
            }
        }
        return e;
    }
})();
