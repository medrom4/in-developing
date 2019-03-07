var clock = document.getElementById("clock");
var icon = new Image();
icon.src = "clock-icon.png";

function displayTime() {
    var now = new Date();
    var hrs = now.getHours(),
        mins = now.getMinutes();
    if (mins < 10) mins = "0" + mins;
    clock.innerHTML = hrs + ":" + mins;
    setTimeout(displayTime, 60000);
}
displayTime();

clock.draggable = true;

clock.ondragstart = function(event) {
    var event = event || window.event;
    var dt = event.dataTransfer;

    dt.setData("Text", Date() + "\n");

    if (dt.setDragImage) dt.setDragImage(icon, 0, 0);
}
