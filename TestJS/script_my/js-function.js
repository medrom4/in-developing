var Coin = ({
    Penny: 1,
    Nickel: 5,
    Dime: 10,
    Quarter: 25
});
var c = Coin.Dime;

console.log(c instanceof Coin);
console.log(c.constructor == Coin);
console.log(Coin.Quarter + 3 * Coin.Nickel);
console.log(Coin.Dime == 10);
console.log(Coin.Dime > Coin.Nickel);
console.log(String(Coin.Dime) + ":" + Coin.Dime);


// a.call() - методы, выполняющий косвенный вызов функции
// a.apply() - методы, выполняющий косвенный вызов функции
// a.bind() - связать (bind) функцию с объектом
