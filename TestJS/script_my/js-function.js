function Set() {
    this.value = {};
    this.n = 0;
    this.add.apply(this, arguments);
}

//Добавляет все аргументы в множество.
Set.prototype.add = function () {
    for (var i = 0; i < arguments.length; i++) {
        var val = arguments[i];
        var str = Set._v2s(val);
        if (!this.values.hasOwnProperty(str)) {
            this.values[str] = val;
            this.n++;
        }
    }
    return this;
}


//Удаляет все аргументы из множества.
Set.prototype.remove = function () {
    for (var i = 0; i < arguments.length; i++) {
        var str = Set._v2s(arguments[i]);
        if (this.values.hasOwnProperty(str)) {
            delete this.values[str];
            this.n--;
        }
    }
    return this;
}

//Возвращает true, если множество содержит value; иначе возвращает false.
Set.prototype.contains = function (value) {
    return this.values.hasOwnProperty(Set._v2s(value));
};


// Возвращает размер множества
Set.prototype.size = function () {
    return this.n;
};


Set.prototype.foreach = function (f, context) {
    for (var s in this.values)
        if (this.values.hasOwnProperty(s))
            f.call(context, this.values[s]);
}


Set._v2s = function (val) {
    switch (val) {
        case undefined:
            return 'u';
        case null:
            return 'n';
        case true:
            return 't';
        case false:
            return 'f';
        default:
            switch (typeof val) {
                case 'number':
                    return '#' + val;
                case 'string':
                    return '"' + val;
                default:
                    return '@' + objectId(val);
            }
    }

    function objectId(o) {
        var prop = "|**objectid**|";
        if (!o.hasOwnProperty(prop))
            o[prop] = Set._v2s.next++;
        return o[prop];
    }

};

Set._v2s.next = 100;





// a.call() - методы, выполняющий косвенный вызов функции
// a.apply() - методы, выполняющий косвенный вызов функции
// a.bind() - связать (bind) функцию с объектом
