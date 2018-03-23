var clicks = 0;
var images= [];
var posImg = {};
var puntaje = 0;
//Funcion que retorna una imagen respecto a una posición recibida por parametro 
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

//Funcion encargada de agregar los div hijos al tablero
function htmlCarta( fila, col ){
	return '<div class="recuadro" onclick="func(this)" ><img src="' + cualImagen(fila,col) + '" /></div>';
}

//Función  que reparte las fichas de manera aleatoria 
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
			arreglo =	Imgdesorden();
			contador =0;
		}
	}
	
	tab = document.getElementById("tablero");
	tab.innerHTML = cartas;


}	

//Función que maneja los eventos de los clicks 
function func(e) {
	
	var c = e.childNodes;
	var content; 
	c[0].style.visibility = "visible";	
	images.push(c[0]);
	clicks++;

	if(clicks >= 3){	
		if(!(images[0].getAttribute("src") == images[1].getAttribute("src"))){		
			images[0].style.visibility = "hidden";	
			images[1].style.visibility = "hidden";		
			content = images[2];		
			clicks = 1;
			images = [];
			images[0] = content;
		}else{
		
			content = images[2];		
			clicks = 1;
			images = [];
			images[0] = content;
	
		}
	}
	if(clicks >= 2){
		if((images[0].getAttribute("src") == images[1].getAttribute("src"))){
			puntaje++;
			document.getElementById("ph").innerHTML = "Puntaje: "+ puntaje;
		}
	}
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

