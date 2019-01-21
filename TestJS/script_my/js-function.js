function f(x) {
	console.log(x);
	arguments[0] = null;
	console.log(x);
}

f(12);




//call() - методы, выполняющий косвенный вызов функции
//apply() - методы, выполняющий косвенный вызов функции
