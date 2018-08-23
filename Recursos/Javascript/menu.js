/* 
	Funciones de control comunes a todas las paginas.
*/

function extenderMenu() {
	document.getElementById('menu').style.visibility='visible';
	document.getElementById('botMenu').setAttribute('onclick','ocultarMenu()');
}

function ocultarMenu() {
	document.getElementById('menu').style.visibility='hidden';
	document.getElementById('botMenu').setAttribute('onclick','extenderMenu()');
}
