function scale(e, factor) {
	var size = parseInt(window.getComputedStyle(e, "").fontSize);
	e.style.fontSize = factor * sise + "px";
}
