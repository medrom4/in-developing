try {
    // здесь могут возбуждаться исключения нескольких типов
    throw 1;
}
catch (e
    if e instanceof ReferenceError) {
    // Здесь обрабатывается исключение обращения к неопределенному имени
}
catch (e
    if e === "quit") {
    // Обработка исключения, получаемое в результате возбуждения сроки "quit"
}
catch (e
    if typeof e === "string") {
    // Здесь обрабатываются все остальные строковые исключения
}
catch (e) {
    // Здесь обрабатываются любые другие исключения
}
finally {
    // Блок finally действует как обычно
}



//var zipcode = new RegExp("\\d{5}", "g");

// .replace() - замена
// .search() - поиск
// Классы символов регулярных выражений/////////////
////////////////////////////////////////////////////
//	[...] 	- Любой из символов, указанных в скобках
//	[^...] 	- Любой из символов, не указанных в скобках
//	. 		- Любой символ, кроме перевода строки или другого разделителя Unicode-строки
//	\w		- Любой текстовый ASCII-символ. Эквивалентно [a-zA-Z0-9_]
//	\W		- Любой символ, не являющийся текстовым ASCII-символом. Эквивалентно [^a-zA-Z0-9_]
//	\s		- Любой пробельный символ из набора Unicode
//	\S		- Любой непробельный символ из набора Unicode
//	\d		- Любые ASCII-цифры. Эквивалентно [0-9]
//	\D		- Любой символ, отличный от ASCII-цифр. Эквивалентно [^0-9]
//	[\b]	- Литерал символа «забой » (особый случай)
//	
//	Символы повторения в регулярных выражениях/////////
//	///////////////////////////////////////////////////
//	{n,m}	- Соответствует предшествующему шаблону, повторенному не менее n и не более m раз
//	{n,}	- Соответствует предшествующему шаблону, повторенному n или более раз
//	{n}		- Соответствует в точности n экземплярам предшествующего шаблона
//	?		- Соответствует нулю или одному экземпляру предшествующего шаблона; предшествующий шаблон 					является необязательным. Эквивалентно {0,1}
//	+		- Соответствует одному или более экземплярам предшествующего шаблона. Эквивалентно {1,}
//	*		- Соответствует нулю или более экземплярам предшествующего шаблона. Эквивалентно {0,}
//	|		- Альтернатива. Соответствует либо подвыражению слева, либо подвыражению справа.
//	(...)	- Группировка. Группирует элементы в единое целое
//	(?:...)	- Только группировка. Группирует элементы в единое целое, но не запоминает символы, 						соответствующие этой группе
//	\n		- Соответствует тем же символам, которые найдены при сопоставлении с группой с номером n.
//	
//	Якорные символы регулярных выражений/////////////////
//  /////////////////////////////////////////////////////
//	^		- Соответствует началу строкового выражения или началу строки при многострочном поиске
//	$		- Соответствует концу строкового выражения или концу строки при многострочном поиске
//	\b		- Соответствует границе слова, т. е. соответствует позиции между символом \w и символом \W 					или между символом \w и началом или концом строки
//	\B		- Соответствует позиции, не являющейся границей слов
//	(?=p)	- Позитивная опережающая проверка на последующие символы. Требует, чтобы последующие символы 				соответствовали шаблону p, но не включает эти символы в найденную строку.
//	(?!p)	- Негативная опережающая проверка на последующие символы. Требует, чтобы следующие символы не 				 соответствовали шаблону p.
//	
//	Флаги регулярных выражений////////////////////////////
//	//////////////////////////////////////////////////////
//	i		- Выполняет поиск, нечувствительный к регистру
//	g		- Выполняет глобальный поиск, т. е. находит все соответствия, а не останавливается после 					первого из них
//	m		- Многострочный режим. ^ соответствует началу строки или началу всего строкового выражения, а 				$ – концу строки или всего выражения
//	
//	/s$/  - ищет любые строки, заканчивающиеся символом «s».





// a.call() - методы, выполняющий косвенный вызов функции
// a.apply() - методы, выполняющий косвенный вызов функции
// a.bind() - связать (bind) функцию с объектом
