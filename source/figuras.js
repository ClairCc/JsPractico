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
function calcularPerimetroOAreaTriangulo() {
  const base = document.getElementById("baseTriangulo");
  const lado1Triangulo = document.getElementById("lado1Triangulo");
  const lado2Triangulo = document.getElementById("lado2Triangulo");
  const baseValor = Number(base.value);
  const lado1TrianguloValor = Number(lado1Triangulo.value);
  const lado2TrianguloValor = Number(lado2Triangulo.value);
  const trianguloReturn = document.getElementById("trianguloReturn");
  const perimetro = lado1TrianguloValor + lado2TrianguloValor + baseValor;
  const area = Math.sqrt((baseValor / 2) ** 2 + lado1TrianguloValor ** 2);
  if (perimetro && area !== 0) {
    trianguloReturn.innerText = `El area del triangulo es: ${area} y su perimetro: ${perimetro}`;
  }
}
console.groupEnd();

//Codigo del Circulo

console.group("Circulo");

const pi = Math.PI;

function perimetrOAreaCirculo() {
  const input = document.getElementById("radio");
  const valor = input.value;
  const perimetro = 2 * pi * valor;
  const area = valor ** 2 * pi;
  const perimetroCirculo = document.getElementById("perimetroCirculo");
  const areaCirculo = document.getElementById("areaCirculo");
  if (perimetro !== 0 && area !== 0) {
    perimetroCirculo.innerText = `El perimetro del circulo es ${perimetro} y `;
    areaCirculo.innerText = `el area del circulo es ${area}`;
  }
}

console.groupEnd();

function calcularAreaOCuadrado() {
  const input = document.getElementById("ladoCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  const area = areaCuadrado(value);
  const perimetroCuadradoResultado =
    document.getElementById("perimetroCuadrado");
  const areaCuadradoResultado = document.getElementById("areaCuadrado");
  if (perimetro !== 0 && area !== 0) {
    perimetroCuadradoResultado.innerText = `El perimetro del cuadrado es ${perimetro} y `;
    areaCuadradoResultado.innerText = `el area del cuadrado es ${area}`;
  }
}

function hola() {
  const seleccion = document.getElementById("seleccion");
  const valor = seleccion.value;
  const Circulo = document.getElementById("seleccionCirculo");
  const Cuadrado = document.getElementById("seleccionCuadrado");
  const Triangulo = document.getElementById("seleccionTriangulo");
  console.log(valor);
  if (valor === "Circulo") {
    Circulo.style.display = "block";
    Cuadrado.style.display = "none";
    Triangulo.style.display = "none";
  } else if (valor === "Cuadrado") {
    Cuadrado.style.display = "block";
    Circulo.style.display = "none";
    Triangulo.style.display = "none";
    calcularPerimetroCuadrado();
  } else if (valor === "Triangulo") {
    Circulo.style.display = "none";
    Cuadrado.style.display = "none";
    Triangulo.style.display = "block";
  }
}

function funcion() {
  const seleccion = document.getElementById("figuritas");
  const value = seleccion.value;
  const Circulo = document.getElementById("seleccionCirculo");
  const Cuadrado = document.getElementById("seleccionCuadrado");
  const Triangulo = document.getElementById("seleccionTriangulo");
  console.log(value);
  if (value === "selecciona") {
    Circulo.style.display = "none";
    Cuadrado.style.display = "none";
    Triangulo.style.display = "none";
  } else if (value === "Carro") {
    Circulo.style.display = "block";
    Cuadrado.style.display = "none";
    Triangulo.style.display = "none";
  }
}
