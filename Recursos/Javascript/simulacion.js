/* 
	Funciones de control de las simulaciones de SAMSA
*/

function init(){
	grosor();
	altura();
	anchura();

	anAl();
	tamaño();

	transfigura();
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
		.attr("x",70*i+28)
		.attr("y",h-114)
		.attr("width", 50)
		.attr("height",50)
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
		console.log(n_width);
		lien.select("#_"+60+i).attr('rx',40*n_width).attr('ry',40*n_width);
	}
}
