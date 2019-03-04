var b = document.getElementById("mybutton");

b.onclick = function() {
    alert("Спасибо, я запомнил.");
};

b.addEventListener("click", function() {
    alert("Ещё раз выскачило");
}, false);
