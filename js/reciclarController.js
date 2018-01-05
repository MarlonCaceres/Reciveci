console.log('Cargando Controlador');

var ocultar= function(){
	var x= document.getElementById('categorias');
	//console.log(x);

	document.getElementById('categorias').style.display='none';
	document.getElementById('content_categoria').style.display='none';
	
}

var reciclable= function(){
	//animacion giro
	document.getElementById("imgr").style.WebkitAnimationDuration = "3s";
	document.getElementById("imgr").style.animationDuration="3s;";	

	document.getElementById("imgnr").style.WebkitAnimationDuration = "10s";
	document.getElementById("imgnr").style.animationDuration="10s;";	

	document.getElementById("imgp").style.WebkitAnimationDuration = "10s";
	document.getElementById("imgp").style.animationDuration="10s;";		
	
	//borde bottom 
	document.getElementById("div-reciclable").style.borderBottom="2px solid #99C93C";
	document.getElementById("div-reciclable").style.paddingBottom="10px";

	document.getElementById("div-peligrosos").style.borderBottom="none";
	document.getElementById("div-no-reciclable").style.borderBottom="none";

	//bordes
	document.getElementById("img-reciclable").style.border="3px solid #99C93C";
	//document.getElementById("img-reciclable").style.paddingBottom="10px";
	
	document.getElementById("img-no-reciclable").style.border="1px solid #F7931D";
	//document.getElementById("img-no-reciclable").style.paddingBottom="10px";

	document.getElementById("img-peligrosos").style.border="1px solid #FF5733";
	//document.getElementById("img-peligrosos").style.paddingBottom="10px";

	var x = document.getElementById('plastico');
	//console.log(x);
	document.getElementById('categorias').style.display='inline';
	if (x.style.display==='none') {
		document.getElementById("plastico").style.display = "inline";
		document.getElementById("papel").style.display = "inline";
		document.getElementById("chatarra").style.display = "inline";
		document.getElementById("vidrio").style.display = "inline";
		//document.getElementById("reciclable6").style.display = "inline";
		document.getElementById("compuesto").style.display = "inline";
		document.getElementById("tech").style.display = "none";
		document.getElementById("organico").style.display = "none";
		document.getElementById("peligroso").style.display = "none";
		document.getElementById("especiales").style.display = "none";

	}else{
		//document.getElementById("compuesto").style.display = "none";
		document.getElementById("tech").style.display = "none";
		document.getElementById("organico").style.display = "none";
		document.getElementById("peligroso").style.display = "none";		
		document.getElementById("especiales").style.display = "none";
	}
	limpiar();
	limpiarcategorias();
	
}

var no_reciclable= function(){
	//animacion giro
	document.getElementById("imgr").style.WebkitAnimationDuration = "10s";
	document.getElementById("imgr").style.animationDuration="10s;";	

	document.getElementById("imgnr").style.WebkitAnimationDuration = "3s";
	document.getElementById("imgnr").style.animationDuration="3s;";	

	document.getElementById("imgp").style.WebkitAnimationDuration = "10s";
	document.getElementById("imgp").style.animationDuration="10s;";

	//borde bottom 
	document.getElementById("div-no-reciclable").style.borderBottom="2px solid #F7931D";
	document.getElementById("div-no-reciclable").style.paddingBottom="10px";

	document.getElementById("div-peligrosos").style.borderBottom="none";
	document.getElementById("div-reciclable").style.borderBottom="none";

	//bordes
	document.getElementById("img-reciclable").style.border="1px solid #99C93C";
	//document.getElementById("img-reciclable").style.paddingBottom="10px";
	
	document.getElementById("img-no-reciclable").style.border="3px solid #F7931D";
	//document.getElementById("img-no-reciclable").style.paddingBottom="10px";

	document.getElementById("img-peligrosos").style.border="1px solid #FF5733";
	//document.getElementById("img-peligrosos").style.paddingBottom="10px";

	var x = document.getElementById('organico');
	//console.log(x);
	document.getElementById('categorias').style.display='inline';
	if (x.style.display==='none') {
		document.getElementById("compuesto").style.display = "none";
		document.getElementById("organico").style.display = "inline";
		document.getElementById("peligroso").style.display = "none";
		document.getElementById("especiales").style.display = "none";
		document.getElementById("plastico").style.display = "none";
		document.getElementById("papel").style.display = "none";
		document.getElementById("chatarra").style.display = "none";
		document.getElementById("tech").style.display = "none";
		document.getElementById("vidrio").style.display = "none";
		//document.getElementById("reciclable6").style.display = "none";
	}else{
		document.getElementById("compuesto").style.display = "none";
		document.getElementById("plastico").style.display = "none";
		document.getElementById("papel").style.display = "none";
		document.getElementById("chatarra").style.display = "none";
		document.getElementById("tech").style.display = "none";
		document.getElementById("vidrio").style.display = "none";
		document.getElementById("peligroso").style.display = "none";
		document.getElementById("especiales").style.display = "none";
		//document.getElementById("reciclable6").style.display = "none";
	}
	limpiar();
	limpiarcategorias();
}

var especiales= function(){
	//animacion giro
	document.getElementById("imgr").style.WebkitAnimationDuration = "10s";
	document.getElementById("imgr").style.animationDuration="10s;";	

	document.getElementById("imgnr").style.WebkitAnimationDuration = "10s";
	document.getElementById("imgnr").style.animationDuration="10s;";	

	document.getElementById("imgp").style.WebkitAnimationDuration = "3s";
	document.getElementById("imgp").style.animationDuration="3s;";

	//borde bottom 
	document.getElementById("div-peligrosos").style.borderBottom="2px solid #FF5733";
	document.getElementById("div-peligrosos").style.paddingBottom="10px";

	document.getElementById("div-no-reciclable").style.borderBottom="none";
	document.getElementById("div-reciclable").style.borderBottom="none";

	//bordes imagen
	document.getElementById("img-reciclable").style.border="1px solid #99C93C";
	//document.getElementById("img-reciclable").style.paddingBottom="10px";
	
	document.getElementById("img-no-reciclable").style.border="1px solid #F7931D";
	//document.getElementById("img-no-reciclable").style.paddingBottom="10px";

	document.getElementById("img-peligrosos").style.border="3px solid #FF5733";
	//document.getElementById("img-peligrosos").style.paddingBottom="10px";

	//contenido
	var x = document.getElementById('peligroso');
	//console.log(x);
	document.getElementById('categorias').style.display='inline';
	if (x.style.display==='none') {
		document.getElementById("compuesto").style.display = "none";
		document.getElementById("organico").style.display = "none";
		document.getElementById("peligroso").style.display = "inline";
		document.getElementById("especiales").style.display = "inline";
		document.getElementById("plastico").style.display = "none";
		document.getElementById("papel").style.display = "none";
		document.getElementById("chatarra").style.display = "none";
		document.getElementById("tech").style.display = "none";
		document.getElementById("vidrio").style.display = "none";
		//document.getElementById("reciclable6").style.display = "none";

	}else{
		document.getElementById("plastico").style.display = "none";
		document.getElementById("papel").style.display = "none";
		document.getElementById("chatarra").style.display = "none";
		document.getElementById("tech").style.display = "none";
		document.getElementById("vidrio").style.display = "none";
		document.getElementById("compuesto").style.display = "none";
		document.getElementById("organico").style.display = "none";
		//document.getElementById("reciclable6").style.display = "none";
	}
	limpiar();
	limpiarcategorias();
}

var activo= function($valor) {
	limpiar();
	document.getElementById($valor).style.borderBottom="2px solid #F7931D";
	document.getElementById($valor).style.paddingBottom="10px";
	//console.log($valor);
	contenido($valor+'-content');
}

function limpiar(){
	document.getElementById('plastico').style.borderBottom="none";
	document.getElementById('papel').style.borderBottom="none";
	document.getElementById('chatarra').style.borderBottom="none";
	document.getElementById('compuesto').style.borderBottom="none";
	document.getElementById('organico').style.borderBottom="none";
	document.getElementById('peligroso').style.borderBottom="none";
	document.getElementById('tech').style.borderBottom="none";
	document.getElementById('vidrio').style.borderBottom="none";
	document.getElementById('especiales').style.borderBottom="none";
}

function contenido($categoria){
	limpiarcategorias();
	//console.log($categoria);
	document.getElementById('content_categoria').style.display='inline';
	document.getElementById($categoria).style.display='inline';
}

function limpiarcategorias(){
	document.getElementById('plastico-content').style.display="none";
	document.getElementById('papel-content').style.display="none";
	document.getElementById('chatarra-content').style.display="none";
	document.getElementById('compuesto-content').style.display="none";
	document.getElementById('organico-content').style.display="none";
	document.getElementById('peligroso-content').style.display="none";
	document.getElementById('tech-content').style.display="none";
	document.getElementById('vidrio-content').style.display="none";	
	document.getElementById('especiales-content').style.display="none";	
	//console.log('limpiando categorias');
}

ocultar();

