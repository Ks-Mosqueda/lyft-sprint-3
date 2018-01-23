
/*Funcion para screen-splash*/
$(document).ready(function () {
  setTimeout(function () {
    var mostrar= document.getElementById("fondoRosa");
    var mostrarInicio = document.getElementById("inicio");
    mostrar.classList.remove("show");
    mostrar.classList.add("hide");
    mostrarInicio.classList.remove("hide");
    mostrarInicio.classList.add("show");
  },3000);
});



/*
fondoRosa.addEventListener("click", showMenu)

function showMenu() {
  console.log(mostrarInicio)

  if (mostrarInicio.classList.contains("show")){
    mostrarInicio.classList.remove("hide");
    mostrarInicio.classList.add("show");
   }
 }*/

/*Funcion para boton sing-up*/
