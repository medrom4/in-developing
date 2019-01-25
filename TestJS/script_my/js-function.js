function inherit(p) {
	if (p == null) throw TypeError();
	if (Object.create)
		return Object.create(p);
	var t = typeof p;
	if (t !== "object" && t !== "function") throw TypeError();

	function f() {};
	f.prototype = p;
	return new f();
}

function Range(from, to) {
	this.from = from;
	this.to = to;
}

Range.prototype = {
	includes: function (x) {
		return this.from <= x && x <= this.to;
	},

	foreach: function (f) {
		for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
	},

	toString: function () {
		return "(" + this.from + "..." + this.to + ")";
	}
}

var r = new Range(1,3);
var otvet1 = r.includes(2);
console.log(otvet1);

r.foreach(console.log);

console.log(r);


//a.call() - методы, выполняющий косвенный вызов функции
//a.apply() - методы, выполняющий косвенный вызов функции
//a.bind() - связать (bind) функцию с объектом
