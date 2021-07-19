var tipoDeSuscripcion = ["Basic", "Free", "Expert", "ExpertPlus"];
var suscripionActiva = tipoDeSuscripcion[1];
const Respuesta = [
  "Puedes tomar casi todos los cursos de Platzi durante un mes",
  "Solo puedes tomar los cursos gratis",
  "Puedes tomar casi todos los cursos de Platzi durante un año",
  "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
];
var hola = tipoDeSuscripcion.indexOf(suscripionActiva);
var idk =
  suscripionActiva === tipoDeSuscripcion[3]
    ? console.log(Respuesta[3])
    : console.log(Respuesta[hola]);
