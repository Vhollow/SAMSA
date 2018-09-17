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
	italica();
	transfigura();
	giro();
	reorga();
	posicion();
	formacion();
	asoDiso();
	textura();
	giro2();
	formacion2();
}

const margin = 10
const squareNumber = 8
//Grosor
function grosor(){
	var lien = d3.select('#i1');
	var h=parseInt(lien.style('height'));
	var w=parseInt(lien.style('width'));
	var x=0;
	var squareSide = (w-margin)/squareNumber
	var dis=0;
	
	for (var i = 0; i < squareNumber; i++) {
		var n_width = ((w-dis)*20/w)+5;
		lien.append("rect")
		.attr("x",(squareSide)*i+n_width/2)
		.attr('y', h/2-squareSide/2+n_width/2)
		.attr('height',squareSide-n_width-margin)
		.attr('width',squareSide-n_width-margin)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",n_width)
		.attr("id",'_'+i);
	}
	
}
function cambiaGrosor(e){
	var lien = d3.select('#i1');
	var h=parseInt(lien.style('height'));
	var w=parseInt(lien.style('width'));
	var x=parseInt(e.offsetX);
	var squareSide = (w-margin)/squareNumber
	var dis=0;
	for (var i = 0; i < squareNumber; i++) {
		var loopElem = lien.select('#_'+i)
		var lienX = loopElem.attr('x')

		dis=Math.sqrt((lienX-x)*(lienX-x));
		var n_width = ((w-dis)*20/w)+5;
		
		loopElem.attr("stroke-width",n_width)
			.attr("x",(squareSide)*i+n_width/2)
			.attr('y', h/2-squareSide/2+n_width/2)
			.attr('height',squareSide-n_width-margin)
			.attr('width',squareSide-n_width-margin);
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
	lien.select("#_"+10).attr('height',100+h*dis/850).attr('y',h-124-(h*dis/850));
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
	lien.select("#_"+40).attr('height',100+h*dis/850).attr('y',h-124-(h*dis/850)).attr('width',100+0.8*dis2);;
}
//Function tamaño
function tamaño(){
	var lien = d3.select('#i6');
	var h=parseInt(lien.style('height'));
	lien.append("rect")
		.attr("x",28)
		.attr("y",h-124)
		.attr("width", 100)
		.attr("height",100)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",10)
		.attr("id",'_'+50);
		lien.append("rect")
		.attr("x",128+28)
		.attr("y",h-124)
		.attr("width", 100)
		.attr("height",100)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",10)
		.attr("id",'_'+51);
		lien.append("rect")
		.attr("x",256+28)
		.attr("y",h-124)
		.attr("width", 100)
		.attr("height",100)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",10)
		.attr("id",'_'+52);
		lien.append("rect")
		.attr("x",384+28)
		.attr("y",h-124)
		.attr("width", 100)
		.attr("height",100)
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",10)
		.attr("id",'_'+53);
}
function cambiaTamaño(e){
	var lien = d3.select('#i6');
	var w=parseInt(lien.style('width'));
	var h=parseInt(lien.style('height'));
	var x=parseInt(e.offsetX);
	var dis = Math.sqrt((x)*(x));
	var n_width = ((dis)*400/w);
	lien.select("#_"+50).attr('width',100+0.1*(dis-n_width)-0.01*(dis-n_width)).attr("x",28+0.005*(dis-n_width)).attr('height',100+0.1*(dis-n_width)-0.01*(dis-n_width)).attr('y',h-124-0.1*(dis-n_width)+0.005*(dis-n_width)).attr("stroke-width",0.01*(dis-n_width)+10);
	lien.select("#_"+51).attr('width',100+0.2*(dis-n_width)-0.02*(dis-n_width)).attr("x",128+28+0.1*(dis-n_width)+0.015*(dis-n_width)).attr('height',100+0.2*(dis-n_width)-0.02*(dis-n_width)).attr('y',h-124-0.2*(dis-n_width)+0.01*(dis-n_width)).attr("stroke-width",0.02*(dis-n_width)+10);
	lien.select("#_"+52).attr('width',100+0.3*(dis-n_width)-0.03*(dis-n_width)).attr("x",256+28+0.1*(dis-n_width)+0.2*(dis-n_width)+0.03*(dis-n_width)).attr('height',100+0.3*(dis-n_width)-0.03*(dis-n_width)).attr('y',h-124-0.3*(dis-n_width)+0.015*(dis-n_width)).attr("stroke-width",0.03*(dis-n_width)+10);
	lien.select("#_"+53).attr('width',100+0.4*(dis-n_width)-0.04*(dis-n_width)).attr("x",384+28+0.1*(dis-n_width)+0.2*(dis-n_width)+0.3*(dis-n_width)+0.05*(dis-n_width)).attr('height',100+0.4*(dis-n_width)-0.04*(dis-n_width)).attr('y',h-124-0.4*(dis-n_width)+0.02*(dis-n_width)).attr("stroke-width",0.04*(dis-n_width)+10);
}

//Italica

function italica(){
	var lien = d3.select('#i7');
	var h=parseInt(lien.style('height'));
	var puntos = [28,h-40,
					128, h-40,
					128,40,
					28,40];
	var puntos2 = [156,h-40,
					256, h-40,
					256,40,
					156,40];
	var puntos3 = [284,h-40,
					384, h-40,
					384,40,
					284,40];
	lien.append('polygon')
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",20)
		.attr('points',puntos)
		.attr("id",'_'+54);
		lien.append('polygon')
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",20)
		.attr('points',puntos2)
		.attr("id",'_'+55);
		lien.append('polygon')
		.attr('fill', 'rgba(0,0,0,0)')
		.attr("stroke","black")
		.attr("stroke-width",20)
		.attr('points',puntos3)
		.attr("id",'_'+56);

}
function cambiaItalica(e){
	var lien = d3.select('#i7');
	var w=parseInt(lien.style('width'));
	var h=parseInt(lien.style('height'));
	var x=parseInt(e.offsetX);
	var dis = Math.sqrt((x)*(x));
	var camb = 0.3* dis;
	var puntos = [28,h-40,
					128, h-40,
					128+camb,40,
					28+camb,40];
	var puntos2 = [156,h-40,
					256, h-40,
					256+camb,40,
					156+camb,40];
	var puntos3 = [284,h-40,
					384, h-40,
					384+camb,40,
					284+camb,40];

	lien.select("#_"+54).attr('points',puntos);
	lien.select("#_"+55).attr('points',puntos2);
	lien.select("#_"+56).attr('points',puntos3);
}

//Transfiguración
function transfigura(){
	var lien = d3.select('#i8');
	var h=parseInt(lien.style('height'));
	for (var i = 7; i >= 0; i--) {
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
	for (var i = 7; i >= 0; i--) {
		dis[i]=	Math.sqrt((lien.select('#_'+60+i).attr('x')-x+25)*(lien.select('#_'+60+i).attr('x')-x+25));
		var n_width = ((dis[i])/w);
		if(n_width<0.05) n_width=0;
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
	var w=parseInt(lien.style('width'));
	var h=parseInt(lien.style('height'));
	var margen = (w - 940)/2;
	for (var i = 7; i >= 0; i--) {
		lien.append("rect")
		.attr("x",120*i+margen)
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
	for (var i = 7; i >= 0; i--) {
		dis[i]=	Math.sqrt((lien.select('#_'+80+i).attr('x')-x)*(lien.select('#_'+80+i).attr('x')-x));
		var n = 1-(Math.sqrt((dis[i])/w));
		if(n<0.6) n=0;
		else n=(n-0.6)/0.4;
		lien.select("#_"+80+i).attr('transform','translate(0,'+(-n)*(h-162)+')');
	}

}

//Formacion

function formacion(){
	var lien = d3.select('#i12');
	var w=parseInt(lien.style('width'));
	var h=parseInt(lien.style('height'));
	var margen = (w - 940)/2;
	for (var i = 7; i >= 0; i--) {
		var puntos=[78+120*i,h-40,28+120*i,h-40];
		lien.append('polyline').attr('stroke-width',10).attr('stroke','black').attr("id",'_l'+10*i).attr('points',puntos).attr('fill','none');
	}
}

function cambiaFormacion(e){
	var lien = d3.select('#i12');
	var h=parseInt(lien.style('height'));
	var w=parseInt(lien.style('width'));
	var x=parseInt(e.clientX);
	var dis=[0,0,0,0,0,0,0,0,0,0];
	for (var i = 7; i >= 0; i--) {
		dis[i]=	Math.sqrt((78+120*i-x)*(78+120*i-x));
		var n = 1-((dis[i])/w);
		var puntos=[78+120*i,h-40,28+120*i,h-40];
		if(n<0.125) {
			var puntos=[78+120*i,h-40,28+120*i,h-40];
		}
		else if(n<0.375) {
			n=(n-0.125)*4;
			var puntos=[78+120*i,h-40,28+120*i,h-40,28+120*i,h-40-100*n];
		}else if(n<0.625) {
			n=(n-0.375)*4;
			var puntos=[78+120*i,h-40,28+120*i,h-40,28+120*i,h-140,28+120*i+100*n,h-140];
		}else if(n<0.875) {
			n=(n-0.625)*4;
			var puntos=[78+120*i,h-40,28+120*i,h-40,28+120*i,h-140,28+120*i+100,h-140,28+120*i+100,h-140+100*n];
		}else if(n<0.9) {
			n=(n-0.875)*8;
			var puntos=[78+120*i,h-40,28+120*i,h-40,28+120*i,h-140,28+120*i+100,h-140,28+120*i+100,h-40,128+120*i-50*n,h-40];
		}else if(n<1) {
			n=(n-0.875)*8;
			var puntos=[78+120*i,h-40,28+120*i,h-40,28+120*i,h-140,28+120*i+100,h-140,28+120*i+100,h-40,128+120*i-50,h-40];
		}
		lien.select('#_l'+10*i).attr('points',puntos);	
	}
}

//Asocia-Disocia

function asoDiso(){
	var lien = d3.select('#i13');
	var w=parseInt(lien.style('width'));
	var h=parseInt(lien.style('height'));
	var puntos=[78,h-40,28,h-40,28,40,78,40];
	var puntos1=[78,h-40,128,h-40,128,40,78,40];
	lien.append('polyline').attr('stroke-width',10).attr('stroke','black').attr("id",'_l100').attr('points',puntos).attr('fill','none');
		lien.append('polyline').attr('stroke-width',10).attr('stroke','black').attr("id",'_l101').attr('points',puntos1).attr('fill','none');
}

function cambiaAsoDiso(e){
	var lien = d3.select('#i13');
	var w=parseInt(lien.style('width'));
	var x=parseInt(e.offsetX);
	var dis = Math.sqrt((x)*(x));
	dis-=40;
	if (dis<=0) dis=0;
	var n = ((dis)/w);
	lien.select('#_l101').attr('transform','translate('+(n)*(w-140)+',0)');
}

//Textura

function textura(){
	var lien = d3.select('#i14');
	var w=parseInt(lien.style('width'));
	var h=parseInt(lien.style('height'));
	var ancho_lin = (w-56)/11;
	var alt_grande = h - 80;
	var alt_peq = 2*(w-56)/11;
	for(var i = 10; i >= 0; i--){
		if(i>8||i<2) lien.append('line').attr("x1", 28+ancho_lin*(i+1/2)).attr("y1", 40).attr("x2", 28+ancho_lin*(i+1/2)).attr("y2", h-40).attr('stroke-width',ancho_lin+1).attr('stroke','black').attr("id",'_l'+(1000*i));
		else{
			lien.append('line').attr("x1", 28+ancho_lin*(i+1/2)).attr("y1", 40).attr("x2", 28+ancho_lin*(i+1/2)).attr("y2", 40+alt_peq).attr('stroke-width',ancho_lin+1).attr('stroke','black').attr("id",'_l'+(1+1000*i));
			lien.append('line').attr("x1", 28+ancho_lin*(i+1/2)).attr("y1", h-40-alt_peq).attr("x2", 28+ancho_lin*(i+1/2)).attr("y2", h-40).attr('stroke-width',ancho_lin+1).attr('stroke','black').attr("id",'_l'+(2+1000*i));
		}
	}
	
}
function cambiaTextura(e){
	var lien = d3.select('#i14');
	var w=parseInt(lien.style('width'));
	var ancho_lin = (w-56)/11;
	var x=parseInt(e.offsetX);
	var dis = Math.sqrt((x)*(x));
	var n = dis/w;
	for(var i = 10; i >= 0; i--){
		if(i>8||i<2) lien.select('#_l'+(1000*i)).attr('stroke-width',ancho_lin/2+2+n*ancho_lin/2);
		else{
			lien.select('#_l'+(1+1000*i)).attr('stroke-width',ancho_lin/2+2+n*ancho_lin/2);
			lien.select('#_l'+(2+1000*i)).attr('stroke-width',ancho_lin/2+2+n*ancho_lin/2);
		}
	}
}

function giro2(){
	var lien = d3.select('#i16');
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

function cambiaGiroXY(e){
	var lien = d3.select('#i16');
	var h=parseInt(lien.style('height'));
	var w=parseInt(lien.style('width'));
	var x=parseInt(e.offsetX);
	var y=parseInt(e.offsetY);
	var disx = Math.sqrt((x)*(x));
	var disy = Math.sqrt((y)*(y));
	var nx = ((disx)/w);
	var ny = ((disy)/w);
	if(y>165) y=165;
	if(y<50) y=50;

	lien.select("#_"+70).attr('transform','translate('+(w-156)*nx+','+(y-200)+')rotate('+(90*nx)+',78,'+(h-74)+')');
}

function formacion2(){
	var lien = d3.select('#i17');
	var w=parseInt(lien.style('width'));
	var h=parseInt(lien.style('height'));
	var margen = (w - 940)/2;
	for (var i = 7; i >= 0; i--) {
		var puntos=[78+120*i,h-40,28+120*i,h-40];
		lien.append('polyline').attr('stroke-width',10).attr('stroke','black').attr("id",'_l'+10*i).attr('points',puntos).attr('fill','none');
	}
}

function cambiaFormacion2(e){
	var lien = d3.select('#i17');
	var h=parseInt(lien.style('height'));
	var w=parseInt(lien.style('width'));
	var x=parseInt(e.clientX);
	var dis=[0,0,0,0,0,0,0,0,0,0];
	for (var i = 7; i >= 0; i--) {
		dis[i]=	Math.sqrt((78+120*i-x)*(78+120*i-x));
		var n = ((dis[i])/w/1.5);
		var puntos=[78+120*i,h-40,28+120*i,h-40];
		if(n<0.125) {
			var puntos=[78+120*i,h-40,28+120*i,h-40];
		}
		else if(n<0.375) {
			n=(n-0.125)*4;
			var puntos=[78+120*i,h-40,28+120*i,h-40,28+120*i,h-40-100*n];
		}else if(n<0.625) {
			n=(n-0.375)*4;
			var puntos=[78+120*i,h-40,28+120*i,h-40,28+120*i,h-140,28+120*i+100*n,h-140];
		}else if(n<0.875) {
			n=(n-0.625)*4;
			var puntos=[78+120*i,h-40,28+120*i,h-40,28+120*i,h-140,28+120*i+100,h-140,28+120*i+100,h-140+100*n];
		}else if(n<0.9) {
			n=(n-0.875)*8;
			var puntos=[78+120*i,h-40,28+120*i,h-40,28+120*i,h-140,28+120*i+100,h-140,28+120*i+100,h-40,128+120*i-50*n,h-40];
		}else if(n<1) {
			n=(n-0.875)*8;
			var puntos=[78+120*i,h-40,28+120*i,h-40,28+120*i,h-140,28+120*i+100,h-140,28+120*i+100,h-40,128+120*i-50,h-40];
		}
		lien.select('#_l'+10*i).attr('points',puntos);
		lien.select('#_l'+10*i).attr('stroke-width',x/100);
		lien.select('#_l'+10*i).attr('width',x/100);
	

		
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
