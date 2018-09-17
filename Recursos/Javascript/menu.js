/* 
	Funciones de control comunes a todas las paginas.
*/

function extenderMenu() {
	document.getElementById('menu').style.padding='3em 15px 0 15px';
	document.getElementById('menu').style.width='100%';
	document.getElementById('botMenu').setAttribute('onclick','ocultarMenu()');
}

function ocultarMenu() {
	document.getElementById('menu').style.width='0';
	document.getElementById('menu').style.padding='3em 0 0 0';
	document.getElementById('botMenu').setAttribute('onclick','extenderMenu()');
}

function extenderMenu2() {
	document.getElementById('menu2').style.maxHeight='200px';
	document.getElementById('botMenu2').setAttribute('onclick','ocultarMenu2()');
}

function ocultarMenu2() {
	document.getElementById('menu2').style.height='0';
	document.getElementById('botMenu2').setAttribute('onclick','extenderMenu2()');
}
function extenderMenu3() {
	document.getElementById('menu3').style.height='100%';
	document.getElementById('botMenu3').setAttribute('onclick','ocultarMenu3()');
}

function ocultarMenu3() {
	document.getElementById('menu3').style.height='0';
	document.getElementById('botMenu3').setAttribute('onclick','extenderMenu3()');
}