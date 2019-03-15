// Имитация конструктора XMLHttpRequest() в IE5 и IE6
if (window.XMLHttpRequest === undefined) {
    window.XMLHttpRequest = function() {
        try {

            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        }
        catch (e1) {
            try {

                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            }
            catch (e2) {

                throw new Error("XMLHttpRequest не поддерживается");
            }
        }
    };
}



function postMessage(msg) {
    var request = new XMLHttpRequest();
    request.open("POST", "/log.php");

    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");

    request.send(msg);
}



// Выполняет запрос HTTP GET содержимого указанного URL-адреса.
// После успешного получения ответа проверяет, содержит ли он простой текст,
// и передает его указанной функции обратного вызова

function getText(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getAllResponseHeaders("Content-Type");
            if (type.match(/^text/))
                callback(request.responseText);
        }
    };
    request.send(null);
}



// Выполняет запрос HTTP GET на получение содержимого по указанному URL-адресу. 
// При получении ответа он передается функции обратного вызова
// как разобранный объект XML-документа, объект JSON или строка.

function get(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getAllResponseHeaders("Content-Type");
            if (type.indexOf("xml") !== -1 && request.responseXML)
                callback(request.responseXML);
            else if (type === "application/json")
                callback(JSON.parse(request.responseText));
            else
                callback(request.responseText);
        }
    };
    request.send(null);
}



/*
 * Представляет свойства объекта, как если бы они были парами имя/значение
 * HTML-формы, с использованием формата application/x-www-form-urlencoded
 */

function encodeFormData(data) {
    if (!data) return "";
    var pairs = [];
    for (var name in data) {
        if (!data.hasOwnProperty(name)) continue;
        if (typeof data[name] === "function") continue;
        var value = data[name].toString();
        name = encodeURIComponent(name.replace("%20", "+"));
        value = encodeURIComponent(value.replace("%20", "+"));
        pairs.push(name + "=" + value);
    }
    return pairs.join('&');
}



// Выполнение запроса HTTP POST с данными в формате JSON

function get(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && callback)
            callback(request);
    };
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
}



// Выполнение запроса HTTP POST с XML-документом в качестве тела

function postQuery(url, what, where, radius, callback) {
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && callback) callback(request);
    };

    // Создать XML-документ с корневым элементом <query> 

    var doc = document.implementation.createDocument("", "query", null);
    var query = doc.documentElement;
    var find = doc.createElement("find");
    query.appendChild(find);
    find.setAttribute("zipcode", where);
    find.setAttribute("radius", radius);
    find.appendChild(doc.createTextNode(what));

    request.send(doc);
}



// Выгрузка файла посредством запроса HTTP POST

(function() {
    var elts = document.getElementsByTagName("input");
    for (var i = 0; i < elts.length; i++) {
        var input = elts[i];
        if (input.type !== "file") continue;

        var url = input.getAttribute("data-uploadto");
        if (!url) continue;

        input.addEventListener("change", function() {
            var file = this.files[0];
            if (!file) return;
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.send(file);
        }, false);
    }
})();




// Отправка запроса с данными в формате multipart/form-data

function postFormData(url, data, callback) {
    if (typeof FormData === "undefined")
        throw new Error("Объект FormData не реализован");

    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && callback)
            callback(request);
    };

    var formdata = new FormData();
    for (var name in data) {
        if (!data.hasOwnProperty(name)) continue;
        var value = data[name];
        if (typeof value === "function") continue;
        formdata.append(name, value);
    }

    request.onprogress = function(e) {
        if (e.lengthComputable)
            progress.innerHTML = Math.round(100 * e.loaded / e.total) + "% Выполнено";
    }
    request.send(formdata);
};




// Мониторинг хода выполнения операции выгрузки

(function() {
    var elts = document.getElementsByClassName("fileDropTarget");
    for (var i = 0; i < elts.length; i++) {
        var target = elts[i];
        var url = target.getAttribute("data-uploadto");
        if (!url) continue;
        createFileUploadDropTarget(target, url);
    }

    function createFileUploadDropTarget(target, url) {
        var uploading = false;
        console.log("target, url");

        target.ondragenter = function(e) {
            console.log("dragenter");
            if (uploading) return;

            var types = e.dataTransfer.types;
            if (types &&
                ((types.contains && types.contains("Files")) ||
                    (types.indexOf && types.indexOf("Files") !== -1))) {
                target.classList.add("wantdrop");
                return false;
            }
        };

        target.ondragover = function(e) { if (!uploading) return false; };
        target.ondragleave = function(e) {
            if (!uploading) target.classList.remove("wantdrop");
        };

        target.ondrop = function(e) {
            if (uploading) return false;
            var files = e.dataTransfer.files;
            if (files && files.length) {
                uploading = true;
                var message = "Выгружаются файлы:<ul>";
                for (var i = 0; i < files.length; i++)
                    message += "<li>" + files[i].name + "</li>";
                message += "</ul>";
                target.innerHTML = message;
                target.classList.remove("wantdrop");
                target.classList.add("uploading");
                var xhr = new XMLHttpRequest();
                xhr.open("POST", url);
                var body = new FormData();
                for (var i = 0; i < files.length; i++) body.append(i, files[i]);
                xhr.upload.onprogress = function(e) {
                    if (e.lengthComputable) {
                        target.innerHTML = message +
                            Math.round(e.loaded / e.total * 100) +
                            "% Завершено";
                    }
                };
                xhr.upload.onload = function(e) {
                    uploading = false;
                    target.classList.remove("uploading");
                    target.innerHTML = "Отбуксируйте сюда файл для выгрузки ";
                };

                xhr.send(body);
                return false;
            }

            target.classList.remove("wantdrop");
        }
    }

})();
