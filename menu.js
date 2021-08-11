const all = document.getElementById("all");
const main = document.getElementById("main");
const espacio = document.getElementById("espacio");
function headerTablets() {
  all.style.display = "block";
  main.style.display = "none";
  espacio.style.display = "none";
}
function offMenu() {
  all.style.display = "none";
  main.style.display = "inherit";
  espacio.style.display = "inherit";
}
