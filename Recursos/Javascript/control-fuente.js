/* 
	Funciones de control comunes a todas las paginas.
*/

function cambiaAnch() {
	var F = document.getElementById('fuente');
	var wdth = document.getElementById('wdth');
	F.setAttribute('style','font-variation-settings: "altu" 100,"gros" 500,"anch" '+ wdht.value);
}

function color(col,bg) {
	var F = document.querySelector('#fuente');
	if(col!=''){
		F.style.color = col;
	}
	if(bg!=''){
		F.style.backgroundColor = bg;
	}
}
window.onload=()=>{
// var col = document.querySelector('#coltex')
// col.addEventListener('change', function(){
// 	color(col.value,'');		
// });




var body = document.querySelector('body');
body.addEventListener('mousemove',function(e){
	var mPos  = { X:e.clientX, Y:window.innerHeight-e.clientY };

	var F = document.querySelector('#fuente');	
	F.setAttribute('style','font-variation-settings: "altu" 0'+ mPos.Y+' ,"gros" 500,"anch" 0'+ mPos.X);
});


}
