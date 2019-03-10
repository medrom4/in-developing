// Функция конструктор

function Keymap(bindings) {
    this.map = {
        if (bindings) {
            for (name in bindings) this.bind(name, bindings[name]);
        }
    }

    // Связывает указанный идентификатор клавиши с указанной функ цией-обработчиком
    Keymap.prototype.bind = function(key, func) {
        this.map[Keymap.normalize(key)] = func;
    };

    // Удаляет привязку для указанного идентификатора клавиши
    Keymap.prototype.unbind = function(key) {
        delete this.map[Keymap.normalize(key)];
    };
    
    
    
}
