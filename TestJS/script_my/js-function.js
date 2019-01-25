var F = function() {}; // Это объект функции.
var p = F.prototype; // Это объект- прототип, связанный с ней.
var c = p.constructor; // Это функция, связанная с прототипом.

var otvet = c === F // => true: F.prototype.constructor === F для всех функций

console.log(otvet);
//a.call() - методы, выполняющий косвенный вызов функции
//a.apply() - методы, выполняющий косвенный вызов функции
//a.bind() - связать (bind) функцию с объектом
