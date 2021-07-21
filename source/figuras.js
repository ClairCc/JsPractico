//Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}
perimetroCuadrado();

function areaCuadrado(lado) {
  return lado ** 2;
}
console.groupEnd();
//Codigo del triangulo
console.group("Triaungulos");

function perimetroTriangulo(lado1, lado2, ladoBase) {
  return lado1 + lado2 + ladoBase;
}

function areaTriangulo(ladoBase, lado) {
  const altura = Math.sqrt((ladoBase / 2) ** 2 + lado ** 2);
  return (ladoBase * altura) / 2;
}
console.groupEnd();

//Codigo del Circulo

console.group("Circulo");

function diametroCirculo(radioCirculo) {
  return radioCirculo * 2;
}

const pi = Math.PI;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * pi;
}
function areaCirculo(radio) {
  return radio ** 2 * pi;
}

console.groupEnd();

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}
