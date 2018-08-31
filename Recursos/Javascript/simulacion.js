/* 
	Funciones de control de las simulaciones de SAMSA
*/

function init(){
	grosor();
	altura();
	anchura();
	groAn();
	anAl();
	tamaño();

	transfigura();
	giro();
	reorga();
	posicion();
}

//Grosor

function grosor(){
	var lien = d3.select('#i1');
	var h=parseInt(lien.style('height'));
	for (var i = 9; i >= 0; i--) {
		lien.append("rect")
		.attr("x",120*i+28)
		.attr("y",h-114)
		.attr("width", 100)
		.attr("height",100)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",10)
		.attr("id",'_'+i);
	}
	
}
function cambiaGrosor(e){
	var lien = d3.select('#i1');
	var h=parseInt(lien.style('height'));
	var w=parseInt(lien.style('width'));
	var x=parseInt(e.clientX);
	var dis=[0,0,0,0,0,0,0,0,0,0];
	for (var i = 9; i >= 0; i--) {
		dis[i]=	Math.sqrt((lien.select('#_'+i).attr('x')-x)*(lien.select('#_'+i).attr('x')-x));
		var n_width = ((w-dis[i])*40/w);
		lien.select("#_"+i).attr("stroke-width",n_width+10)
			.attr("x",120*i+28+n_width/2)
			.attr('y',h-119+n_width/2)
			.attr('height',100-n_width)
			.attr('width',100-n_width);
	}
}

//Altura

function altura(){
	var lien = d3.select('#i2');
	var h=parseInt(lien.style('height'));
	lien.append("rect")
		.attr("x",28)
		.attr("y",h-124)
		.attr("width", 100)
		.attr("height",100)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",20)
		.attr("id",'_'+10);
}
function cambiaAltura(e){
	var lien = d3.select('#i2');
	var h=parseInt(lien.style('height'));
	var y=parseInt(e.offsetY);
	dis = Math.sqrt((h-y)*(h-y));
	lien.select("#_"+10).attr('height',100+h*dis/800).attr('y',h-124-(h*dis/800));
}

//Anchura

function anchura(){
	var lien = d3.select('#i3');
	var h=parseInt(lien.style('height'));
	lien.append("rect")
		.attr("x",28)
		.attr("y",h-224)
		.attr("width", 100)
		.attr("height",200)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",20)
		.attr("id",'_'+20);
		lien.append("rect")
		.attr("x",128+28)
		.attr("y",h-224)
		.attr("width", 200)
		.attr("height",200)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",20)
		.attr("id",'_'+21);
		lien.append("rect")
		.attr("x",356+28)
		.attr("y",h-224)
		.attr("width", 400)
		.attr("height",200)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",20)
		.attr("id",'_'+22);
}
function cambiaAnchura(e){
	var lien = d3.select('#i3');
	var w=parseInt(lien.style('width'));
	var x=parseInt(e.offsetX);
	dis = Math.sqrt((x)*(x));
	lien.select("#_"+20).attr('width',100+0.1*dis);
	lien.select("#_"+21).attr('width',200+0.2*dis).attr("x",128+28+0.1*dis);
	lien.select("#_"+22).attr('width',400+0.3*dis).attr("x",356+28+0.1*dis+0.2*dis);
}
//Grosor-anchura
function groAn(){
	var lien = d3.select('#i4');
	var h=parseInt(lien.style('height'));
	var w=parseInt(lien.style('width'));
	for (var i = 5; i >= 0; i--) {
		var sumj=0;
		for (var j = 0; j <= 4; j++) {
			sumj=sumj+j;
			lien.append("rect")
			.attr("x",20*j+40*sumj+28)
			.attr("y",h-104-94*i)
			.attr("width", 40*(j+1))
			.attr("height",80)
			.attr('fill', 'rgba(0,0,0,0)')
			.attr("stroke","black")
			.attr("stroke-width",10)
			.attr("id",'_'+200+10*i+j);
		}
	}
}
function cambiaGroAn(e){
	var lien = d3.select('#i4');
	var h=parseInt(lien.style('height'));
	var y=parseInt(e.offsetY);
	dis = Math.sqrt((h-y)*(h-y));
	var w=parseInt(lien.style('width'));
	var x=parseInt(e.offsetX);
	dis2 = Math.sqrt((x)*(x));

	var dis3=[0,0,0,0,0,0,0,0,0,0];

	for (var i = 5; i >= 0; i--) {
		dis3[i]=	Math.sqrt((lien.select('#_'+200+10*i+1).attr('y')-y)*(lien.select('#_'+200+10*i+1).attr('y')-y));
		var n_width = ((w-dis3[i])*15/w);
		var sumj=0;
		for (var j = 0; j <= 4; j++) {
			sumj=sumj+j;
			lien.select('#_'+200+10*i+j).attr("stroke-width",n_width+10).attr('width',40*(j+1)-n_width+(j+1)*dis2/10).attr("x",20*j+40*sumj+28+(n_width/2)+(sumj)*dis2/10)
			.attr('y',h-104-94*i+n_width/2)
			.attr('height',80-n_width);
		}
	}
}


//Altura anchura
function anAl(){
	var lien = d3.select('#i5');
	var h=parseInt(lien.style('height'));
	lien.append("rect")
		.attr("x",28)
		.attr("y",h-124)
		.attr("width", 100)
		.attr("height",100)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",20)
		.attr("id",'_'+40);
}
function cambiaAnAl(e){
	var lien = d3.select('#i5');
	var h=parseInt(lien.style('height'));
	var y=parseInt(e.offsetY);
	dis = Math.sqrt((h-y)*(h-y));
	var w=parseInt(lien.style('width'));
	var x=parseInt(e.offsetX);
	dis2 = Math.sqrt((x)*(x));
	lien.select("#_"+40).attr('height',100+h*dis/800).attr('y',h-124-(h*dis/800)).attr('width',100+0.8*dis2);;
}
//Function tamaño
function tamaño(){
	var lien = d3.select('#i6');
	var h=parseInt(lien.style('height'));
	lien.append("rect")
		.attr("x",28)
		.attr("y",h-224)
		.attr("width", 200)
		.attr("height",200)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",20)
		.attr("id",'_'+50);
		lien.append("rect")
		.attr("x",228+28)
		.attr("y",h-224)
		.attr("width", 200)
		.attr("height",200)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",20)
		.attr("id",'_'+51);
		lien.append("rect")
		.attr("x",456+28)
		.attr("y",h-224)
		.attr("width", 200)
		.attr("height",200)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",20)
		.attr("id",'_'+52);
}
function cambiaTamaño(e){
	var lien = d3.select('#i6');
	var w=parseInt(lien.style('width'));
	var h=parseInt(lien.style('height'));
	var x=parseInt(e.offsetX);
	var dis = Math.sqrt((x)*(x));
	var n_width = ((dis)*400/w);
	lien.select("#_"+50).attr('width',200+0.1*(dis-n_width)).attr("x",28+0.1*n_width/2).attr('height',200+0.1*(dis-n_width)).attr('y',h-224-(0.1*dis)+0.1*n_width/2).attr("stroke-width",0.1*n_width+20);
	lien.select("#_"+51).attr('width',200+0.2*(dis-n_width)).attr("x",228+28+0.1*dis+0.2*n_width/2).attr('height',200+0.2*(dis-n_width)).attr('y',h-224-(0.2*dis)+0.2*n_width/2).attr("stroke-width",0.2*n_width+20);
	lien.select("#_"+52).attr('width',200+0.3*(dis-n_width)).attr("x",456+28+0.1*dis+0.2*dis+0.3*n_width/2).attr('height',200+0.3*(dis-n_width)).attr('y',h-224-(0.3*dis)+0.3*n_width/2).attr("stroke-width",0.3*n_width+20);
}

//Italica

//Transfiguración
function transfigura(){
	var lien = d3.select('#i8');
	var h=parseInt(lien.style('height'));
	for (var i = 9; i >= 0; i--) {
		lien.append("rect")
		.attr("x",90*i+28)
		.attr("y",h-114)
		.attr("width", 70)
		.attr("height",70)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",10)
		.attr("id",'_'+60+i);
	}
	
}
function cambiaTransfigura(e){
	var lien = d3.select('#i8');
	var h=parseInt(lien.style('height'));
	var w=parseInt(lien.style('width'));
	var x=parseInt(e.clientX);
	var dis=[0,0,0,0,0,0,0,0,0,0];
	for (var i = 9; i >= 0; i--) {
		dis[i]=	Math.sqrt((lien.select('#_'+60+i).attr('x')-x+25)*(lien.select('#_'+60+i).attr('x')-x+25));
		var n_width = ((dis[i])/w);
		lien.select("#_"+60+i).attr('rx',40*n_width).attr('ry',40*n_width);
	}
}

//Giro

function giro(){
	var lien = d3.select('#i9');
	var h=parseInt(lien.style('height'));
	lien.append("rect")
		.attr("x",28)
		.attr("y",h-124)
		.attr("width", 100)
		.attr("height",100)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",20)
		.attr("id",'_'+70);
}
function cambiaGiro(e){
	var lien = d3.select('#i9');
	var h=parseInt(lien.style('height'));
	var w=parseInt(lien.style('width'));
	var x=parseInt(e.offsetX);
	var dis = Math.sqrt((x)*(x));
	var n = ((dis)/w);
	lien.select("#_"+70).attr('transform','translate('+(w-156)*n+', 0)rotate('+(90*n)+',78,'+(h-74)+')');
}

//Reorganizacion
function reorga(){
	var lien = d3.select('#i10');
	var h=parseInt(lien.style('height'));
	var w=parseInt(lien.style('width'));
	lien.append("line").attr("x1", 48).attr("y1", 28).attr("x2", 48).attr("y2", h-28).attr('stroke-width',40).attr('stroke','black').attr("id",'_l1');
	lien.append("line").attr("x1", w-48).attr("y1", 28).attr("x2", w-48).attr("y2", h-28).attr('stroke-width',40).attr('stroke','black').attr("id",'_l2');
	lien.append("line").attr("x1", 28).attr("y1", 48).attr("x2", w-28).attr("y2", 48).attr('stroke-width',40).attr('stroke','black').attr("id",'_l3');
	lien.append("line").attr("x1", 28).attr("y1", h-48).attr("x2", w-28).attr("y2", h-48).attr('stroke-width',40).attr('stroke','black').attr("id",'_l4');
}
function cambiaReorga(e){
	var lien = d3.select('#i10');
	var h=parseInt(lien.style('height'));
	var y=parseInt(e.offsetY);
	dis = Math.sqrt((h-y)*(h-y));
	var w=parseInt(lien.style('width'));
	var x=parseInt(e.offsetX);
	dis2 = Math.sqrt((x)*(x));
	var n1 = ((dis2)/w);
	var n2 = ((dis)/h);

	lien.select("#_l1").attr('transform','translate('+((dis2/2)-48)*n1+', 0)');
	lien.select("#_l2").attr('transform','translate('+(48-(dis2/2))*n1+', 0)');
	lien.select("#_l3").attr('transform','translate(0,'+((dis/2)-48)*n2+')');
	lien.select("#_l4").attr('transform','translate(0,'+(48-(dis/2))*n2+')');
}

//Posicion

function posicion(){
	var lien = d3.select('#i11');
	var h=parseInt(lien.style('height'));
	for (var i = 9; i >= 0; i--) {
		lien.append("rect")
		.attr("x",120*i+28)
		.attr("y",h-114)
		.attr("width", 100)
		.attr("height",100)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",10)
		.attr("id",'_'+80+i);
	}
}
function cambiaPosicion(e){
	var lien = d3.select('#i11');
	var h=parseInt(lien.style('height'));
	var w=parseInt(lien.style('width'));
	var x=parseInt(e.clientX);
	var dis=[0,0,0,0,0,0,0,0,0,0];
	for (var i = 9; i >= 0; i--) {
		dis[i]=	Math.sqrt((lien.select('#_'+80+i).attr('x')-x)*(lien.select('#_'+80+i).attr('x')-x));
		var n = 1-(Math.sqrt((dis[i])/w));
		lien.select("#_"+80+i).attr('transform','translate(0,'+(-n)*(h-162)+')');
	}

}



/*const container = document.getElementById('formcontainer');
function setStyles (property, value) {
	return document.documentElement.querySelector(".SAMSA").style.setProperty(property, value);
}
function updateInputElements(e) {
		// setting up the instances
		const rowContainer = e.target.parentNode;
		const slider = rowContainer.querySelector(".slider"); 
		const styleType = slider.getAttribute("id");
		const sliderValue = e.target.value;
		console.log(sliderValue);

		// setting values
		slider.value = sliderValue;


		// setting the style
		setStyles(`--${styleType}`, sliderValue);
}

container.addEventListener('input', updateInputElements);*/
