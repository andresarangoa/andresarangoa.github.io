function cualImagen( fila, col ){
	var imagenes = [ 
		"1.png",
		"2.png",
		"3.png",
		"4.png",
		"5.png",
		"6.png",
		"7.png",
		"8.png",
		"9.png",
		"10.png"
	];
	var pos = (fila+1)*5 + col;
	return "img/" + imagenes[ pos % 10 ];
}

function htmlCarta( fila, col ){
	return '<div class="recuadro" onclick="func(this)" ><img src="' + cualImagen(fila,col) + '" /></div>';
}

function repartir(){
	var cartas="";
	for( var fila = 0; fila < 4; fila++){
		for( col = 0; col < 5; col++){
			cartas += htmlCarta( fila, col );
		}
	}
	
	tab = document.getElementById("tablero");
	tab.innerHTML = cartas;


}	

//document.getElementById("recuadro").addEventListener("click",func(this));

function func(e) {
	var c = e.childNodes;
	c[0].style.visibility = "visible";
	console.log(c[0])
}