var modal = document.getElementById('forms');
var fechar = document.getElementById("fecharForms");
var abrir = document.getElementById("abrirForms");

fechar.onclick = function(){
  modal.style.display = none;
}
abrir.onclick = function(){
  modal.style.display = block;
}
