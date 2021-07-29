//Helpers
function esPar(numero) {
  return numero % 2 === 0;
}
function calcularMedia(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedio = sumaLista / lista.length;
  return promedio;
}
//Calculadora de mediana
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];
    const mediana = calcularMedia([personaMitad1, personaMitad2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

// Mediana General

const salariosCol = colombia.map(function (persona) {
  return persona.salary;
});

const salariosColSorted = salariosCol.sort(function (SalarioA, SalarioB) {
  return SalarioA - SalarioB;
});

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//mediana del top 10%

const spliceStart = salariosColSorted.length - salariosColSorted.length * 0.9;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosTopCol = salariosColSorted.splice(spliceCount, spliceStart);

const medianaTop10Col = medianaSalarios(salariosTopCol);

console.log({ medianaGeneralCol }, medianaTop10Col);
