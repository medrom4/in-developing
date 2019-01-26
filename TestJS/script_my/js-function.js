String.prototype.trim = String.prototype.trim || function() {
    if (!this) returnthis;
    return this.replace(/^\s+|\s+$/g, "");
};

Function.prototype.getName = function() {
    return this.name || this.toString().match(/function\s*([^(]*)\(/)[1];
};




//a.call() - методы, выполняющий косвенный вызов функции
//a.apply() - методы, выполняющий косвенный вызов функции
//a.bind() - связать (bind) функцию с объектом