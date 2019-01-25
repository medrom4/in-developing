function compose(f, g) {
    return function() {
        return f.call(this, g.apply(this, arguments));
    };
}

var square = function(x) {
    return x * x;};
var sum = function(x, y) {
    return x + y;
};
var squareofsum = compose(square, sum);
console.log(squareofsum(2, 3));


//a.call() - методы, выполняющий косвенный вызов функции
//a.apply() - методы, выполняющий косвенный вызов функции
//a.bind() - связать (bind) функцию с объектом
