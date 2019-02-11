function getViewportSize(w) {
	w = w || window;
	if (w.innerWidth != null)
		console.log('Ширина: ' + w.innerWidth + ', Высота: ' + w.innerHeight);
}

getViewportSize();
