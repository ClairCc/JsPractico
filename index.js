const all = document.getElementById("all");
function headerTablets() {
  all.style.display = "block";
  const main = document.getElementById("main");
  main.style.display = "none";
}
function offMenu() {
  all.style.display = "none";
  main.style.display = "inherit";
}
