function f(x, y, z) {
	if (arguments.length != 3) {
		throw new Error("функция f вызвана с " + arguments.length + " аргументами, а требуется 3, исправьте! ");
	}
}

f(2, 2, 3, 4)


//call() - методы, выполняющий косвенный вызов функции
//apply() - методы, выполняющий косвенный вызов функции
