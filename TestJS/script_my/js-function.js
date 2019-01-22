var sum = function (x, y) {
	return x + y
};
var succ = sum.bind(null, 1);
succ(2)

console.log(succ(2));

function f(y, z) {
	return this.x + y + z
};

var g = f.bind({
	x: 1
}, 2);
g(3)

console.log(g(3));


//a.call() - методы, выполняющий косвенный вызов функции
//a.apply() - методы, выполняющий косвенный вызов функции
//a.bind() - связать (bind) функцию с объектом
