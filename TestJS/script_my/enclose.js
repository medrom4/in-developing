function enclose(content, framewidth, frameheight, contentX, contentY) {
    framewidth = Math.max(framewidth, 50);
    frameheight = Math.max(frameheight, 50);
    contentX = Math.min(contentX, 0) || 0;
    contentY = Math.min(contentY, 0) || 0;

    var frame = document.createElement("div");
    frame.className = "enclosure";

    frame.style.width = framewidth + "px";
    frame.style.height = frameheight + "px";
    frame.style.overflow = "hidden";
    frame.style.boxSizing = "border-box";
    frame.style.webkitBoxSizing = "border-box";
    frame.style.MozBoxSizing = "border-box";

    content.parentNode.insertBefore(frame, content);
    frame.appendChild(content);

    content.style.position = "relative";
    content.style.left = contentX + "px";
    content.style.top = contentY + "px";

    var isMacWebkit = (navigator.userAgent.indexOf("Macintosh") !== -1 &&
        navigator.userAgent.indexOf("WebKit") !== -1);
    var isFirefox = (navigator.userAgent.indexOf("Gecko") !== -1);

    frame.onwheel = wheelHandler;
    frame.onmousewheel = wheelHandler;
    if (isFirefox)
        frame.addEventListener("DOMMouseScroll", wheelHandler, false);


    function wheelHandler(event) {
        var e = event || window.event;
        var deltaX = e.deltaX * -30 || e.wheelDeltaX / 4 || 0;
        var deltaY = e.deltaY * -30 || e.wheelDeltaY / 4 || (e.wheelDeltaY === undefined && e.wheelDelta / 4) || e.detail * -10 || 0;

        if (isMacWebkit) {
            deltaX /= 30;
            deltaY /= 30;
        }

        if (isFirefox && e.type !== "DOMMouseScroll")
            frame.removeEventListener("DOMMouseScroll", wheelHandler, false);

        var contentbox = content.getBoundingClientRect();
        var contentwidth = contentbox.right - contentbox.left;
        var contentheight = contentbox.bottom - contentbox.top;

        if (e.altKey) {
            if (deltaX) {
                framewidth -= deltaX;
                framewidth = Math.min(framwidth, contentwidth);
                framewidth = Math.max(framewidth, 50);
                frame.style.width = framewidth + "px";
                50
            }
            if (deltaY) {
                frameheight -= deltaY;
                frameheight = Math.min(frameheight, contentheight);
                frameheight = Math.max(frameheight - deltaY, 50);
                frame.style.height = frameheight + "px";
            }
        }

        else {
            if (deltaX) {
                var minoffset = Math.min(framewidth - contentwidth, 0);
                contentX = Math.max(contentX + deltaX, minoffset);
                contentX = Math.min(contentX, 0);
                content.style.left = contentX + "px";
            }
            if (deltaY) {
                var minoffset = Math.min(frameheight - contentheight, 0);
                contentY = Math.max(contentY + deltaY, minoffset);
                contentY = Math.min(contentY, 0);
                content.style.top = contentY + "px";
            }
        }

        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
    }
}






//a.toLowerCase() - в нижний регистр
//**************
//***МАССИВЫ****
//**************
// .length - длинна массива
// a.push() - добавление элементов в конец массива
// a.unshift() - добавление элемента в начало массива, всё смещается
// a.pop() - уменьшает длинну массива на 1, возвращает значение удаленного элемента
//a.shift() - удаляет элемент в начале массива
//a.forEach() - берем каждый элемент массива
//a.join() - преобразует все элементы массива в строки, объединяет их и возвращает строку
//a.reverse() - меняет порядок следования элементов в массиве на обратный
//a.sort() - сортирует элементы в исходном массиве и возвращает отсортированный массив
//a.concat() - возвращает новый массив, содержащий элементы исходного массива
//a.slice() - возвращает фрагмент, или подмассив, указанного массива
//a.splice() - удаляет элементы из массива, вставляет или выполняет обе операции одновременно
//a.push() - добавляет один или несколько новых элементов в конец массива
//a.pop() - удаляет последний элемент массива
//a.unshift() - добавляет элемент или элементы в начало массива
//a.shift() - удаляет и возвращает первый элемент массива
//a.toString() - преобразует каждый его элемент в строку
//a.map() - передает указанной функции каждый элемент массива
//a.filter() - возвращает массив, содержащий подмножество элементов исходного массива
//a.every() - ответ true, если переданная вами функция- предикат вернула true для всех элементов массива
//a.some() - true, если в массиве имеется хотя бы один элемент, для которого функция- предикат вернет true
//a.reduce() - объединяют элементы массива, используя указанную вами функцию, и возвращают единственное значение
//a.educeRight() - тоже самое, только в обратном порядке
//a.indexOf() - выполняет поиск от начала массива к концу
//a.lastIndexOf() - выполняет поиск от конца массива к началу
//
//
//
//
//
//
//
//
//
//
//
//
