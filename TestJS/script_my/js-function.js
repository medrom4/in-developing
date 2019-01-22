function check(args) {
	var actual = args.length;
	var expected = args.callee.length;
	if (actual !== expected)
		throw new Error("ожидается: " + expected + "; получено: " + actual);
}

function f(x, y, z) {
	check(arguments);
	return x + y + z;
}


//call() - методы, выполняющий косвенный вызов функции
//apply() - методы, выполняющий косвенный вызов функции
