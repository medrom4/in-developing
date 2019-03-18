window.onload = function() {
    var nick = prompt("Введите ваше имя");
    var input = document.getElementById("input");
    input.focus();

    var chat = new EventSource("/chat");
    chat.onmessage = function(event) {
        var msg = event.data;
        var node = document.createTextNode(msg);
        var div = document.createElement("div");
        div.appendChild(node);
        document.body.insertBefore(div, input);
        input.scrollIntoView();
    }

    input.onchange = function() {
        var msg = nick + ": " + input.value;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/chat");
        xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        xhr.send(msg);
        input.value = "";
    }
};
