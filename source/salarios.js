const personas = [];
function agregarPersonas() {
  const textoTopSalarios = document.getElementById("topSalariosHtml");
  const textoMedianaSalarios = document.getElementById("medianaSalarios");
  const nombreHtml = document.getElementById("nombreHtml");
  const salarioHtml = document.getElementById("salarioHtml");
  const valorNombre = nombreHtml.value;
  const valorSalario = Number(salarioHtml.value);
  const agregarPersonas = document.getElementById("personas");
  function constructoraPersona(nombre, salario) {
    this.nombre = nombre;
    this.salario = salario;
  }
  const personita = new constructoraPersona(valorNombre, valorSalario);
  personas.push(personita);
  const salarioPersonas = personas.map(function (x) {
    return x.salario;
  });
  const organizarSalarios = salarioPersonas.sort((a, b) => a - b);
  console.log(organizarSalarios);
  const mediana = medianaSalarios(organizarSalarios);
  const finalizaSplice =
    organizarSalarios.length - organizarSalarios.length * 0.9;
  const inicioSplice = organizarSalarios.length - finalizaSplice;
  const salariosTop = organizarSalarios.splice(inicioSplice, finalizaSplice);

  function mostrar() {
    textoMedianaSalarios.style.display = "block";
    textoMedianaSalarios.innerText = `La mediana de los salarios son : ${mediana}`;
    if (salariosTop < 10) {
      textoTopSalarios.style.display = "block";
      textoTopSalarios.innerText = `Agrega mas salarios`;
    } else {
      textoTopSalarios.innerText = `El top 10 de los salarios es ${medianaSalarios(
        salariosTop
      )}`;
    }
  }
  mostrar();
}
