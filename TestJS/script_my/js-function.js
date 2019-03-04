window.onload = function () {
    var elt = document.getElementById("shipping_addres");
    elt.onsubmit = function () {
        return validate(this);
    }
}
