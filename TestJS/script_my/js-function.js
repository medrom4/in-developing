var methods = document.forms.shipping.elements.method;
var shipping_method;
for (var i = 0; i < methods.length; i++)
	if (methods[i].checked) shipping_method = methods[i].value;
