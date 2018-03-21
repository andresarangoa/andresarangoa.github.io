var clicks = 0;
var images= [];
//
function cualImagen(pos){
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
	//var pos = (fila+1)*5 + col;
	return "img/" +imagenes[pos]; // + imagenes[ pos % 10 ];
}

//
function htmlCarta( fila, col ){
	return '<div class="recuadro" onclick="func(this)" ><img src="' + cualImagen(fila,col) + '" /></div>';
}

//
function repartir(){
	var cartas="";
	var arreglo =	Imgdesorden();
	var contador =0;
	for( var fila = 0; fila < 4; fila++){
		for( col = 0; col < 5; col++){
			cartas += htmlCarta(arreglo[contador]);
			contador++;
		}
		if(contador >= 9){
			contador =0;
		}
	}
	
	tab = document.getElementById("tablero");
	tab.innerHTML = cartas;


}	

//
function func(e) {
	var c = e.childNodes;
	c[0].style.visibility = "visible";	
	images.push(c[0]);
	clicks++;
	if(clicks >= 2){
		console.log(clicks,images[0], images[1])
		if(!(images[0].getAttribute("src") == images[1].getAttribute("src"))){		
			images[0].style.visibility = "hidden";	
			images[1].style.visibility = "hidden";			
		}
		clicks =0;
		images = [];
	}

}

//
function sameImg(img1, img2){
	return img1 == img2;
}

//Genera un arreglo desordenado para la posicion de las imagenes
function Imgdesorden(){
	var myArray = ['0','1','2','3','4','5','6','7','8','9'];
    var i,j,k;
    for (i = myArray.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray[i - 1];
        myArray[i - 1] = myArray[j];
        myArray[j] = k;
	}
	console.log(myArray)
	return myArray;
}