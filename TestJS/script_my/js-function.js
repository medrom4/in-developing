var data = [1, 1, 3, 5, 5];
var total = 0;

for (i = 0; i < data.length; i++)
	total += data[i];

var mean = total / data.length;

total = 0;
for(var i = 0; i < data.length; i++) {
	var deviation = data[i] - mean;
	total += deviation * deviation;
}

var stddev = Math.sqrt(total/(data.length - 1));
console.log(stddev);


//a.call() - методы, выполняющий косвенный вызов функции
//a.apply() - методы, выполняющий косвенный вызов функции
//a.bind() - связать (bind) функцию с объектом
