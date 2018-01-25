
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

/*Función para validar telefono de 10 digitos*/
var $inputTen = $("#phone");
var $buttonPlay = $("#play");

$inputTen.keyup(function() {

  if($(this).val().length === 10) {
    $buttonPlay.removeClass("disabled");
  } else {
    $buttonPlay.class("disabled", "disabled");
  }
});








/*var $inputTen = $("#phone");
var $buttonPlay = $("#play");

$inputTen.keyup(function() {

  if($(this).val().length === 10) {
    console.log(this);
  }
    /*$buttonPlay.removeClass(".disabled");
  } else {
    $buttonPlay.class(".disabled", ".disabled");
  }
});*/
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
