const personas = [];
function agregarPersonas() {
  const nombreHtml = document.getElementById("nombreHtml");
  const salarioHtml = document.getElementById("salarioHtml");
  const valorNombre = nombreHtml.value;
  const valorSalario = Number(salarioHtml.value);

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
  const mediana = medianaSalarios(organizarSalarios);
  const finalizaSplice =
    organizarSalarios.length - organizarSalarios.length * 0.9;
  const inicioSplice = organizarSalarios.length - finalizaSplice;
  const salariosTop = organizarSalarios.splice(inicioSplice, finalizaSplice);
}
