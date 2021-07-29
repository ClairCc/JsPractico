let lista = [100, 200, 500, 400000, 600, 1231321];
lista = lista.sort(function (a, b) {
  return a - b;
});
function calcularMedia(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedio = sumaLista / lista.length;
  return promedio;
}

const mitadArray = parseInt(lista.length / 2);

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista.length)) {
  const elemento1 = lista[mitadArray - 1];
  const elemento2 = lista[mitadArray];
  const promedioElemento1Y2 = calcularMedia([elemento1, elemento2]);
  mediana = promedioElemento1Y2;
} else {
  mediana = lista[mitadArray];
}
