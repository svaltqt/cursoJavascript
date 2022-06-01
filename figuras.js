console.log("Hello World");

// codigo Cuadrado
console.group("Cuadrados")
/*const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado);
*/
function perimetroCuadrado(lado){
    
    return lado *4;
}
//console.log("El perimetro del Cuadrado es " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    
    return lado * lado;
}
//console.log("El Area del Cuadrado es " + areaCuadrado + "cm^2");

console.groupEnd();


//codigo del Triangulo
console.group("Triangulos")

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log("Los lados del triangulo miden: "
 + ladoTriangulo1 + "cm,  "
 + ladoTriangulo2 + "cm, "
 + baseTriangulo + "cm");
*/
 //const alturaTriangulo = 5.5;

 function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
 }
 
 function areaTriangulo(base,altura){
     return (base * altura) /2;
 }
 
 console.groupEnd();


//codigo del Circulo
console.group("Cuadrados")

// Radio
 /*const radioCirculo = 4;
 console.log("El radio del circulo es: " + radioCirculo + "cm");
*/

// Diametro
function diametroCirculo(radio){
return radio*2;    
}

// PI
const PI = Math.PI;

// Circunferencia 
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio){
    return (radio* radio)*PI;
}


console.groupEnd();

// Aqui van las funciones de HTML

function calcularPerimetroCuadrado(){

    const input =  document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input =  document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}
