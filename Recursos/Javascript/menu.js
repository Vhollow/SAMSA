/* 
	Funciones de control comunes a todas las paginas.
*/

function extenderMenu() {
	document.getElementById('menu').style.height='100%';
	document.getElementById('botMenu').setAttribute('onclick','ocultarMenu()');
}

function ocultarMenu() {
	document.getElementById('menu').style.height='0';
	document.getElementById('botMenu').setAttribute('onclick','extenderMenu()');
}

function extenderMenu2() {
	document.getElementById('menu2').style.height='50%';
	document.getElementById('botMenu2').setAttribute('onclick','ocultarMenu2()');
}

function ocultarMenu2() {
	document.getElementById('menu2').style.height='0';
	document.getElementById('botMenu2').setAttribute('onclick','extenderMenu2()');
}
