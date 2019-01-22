var scope = "global scope";

function checkscope() {
	var scope = "local scope";
	console.log(scope);

	function f() {
		return scope;
		console.log(scope);
	}

	return f();
}

checkscope();





//call() - методы, выполняющий косвенный вызов функции
//apply() - методы, выполняющий косвенный вызов функции
