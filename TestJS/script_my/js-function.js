do {
    var name = prompt('Введите Ваше имя!');
    var correct = confirm("Вы ввели ' " + name + " '. \n" + "Щелкните ОК, чтобы продолжить, " + "или Отмена, чтобы повторить ввод.")
} while (!correct)

alert("Привет, " + name);
