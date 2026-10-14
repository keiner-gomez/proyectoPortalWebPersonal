// Buscamos el formulario y el lugar donde mostraremos la respuesta.
var formulario = document.getElementById("formContacto");
var resultado = document.getElementById("resultadoContacto");

// Cuando el usuario envía el formulario, mostramos un mensaje sencillo.
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // Evita que la página se recargue.
  resultado.textContent = "¡Gracias! Tu sugerencia fue registrada como demostración.";
  formulario.reset(); // Limpia los campos después del envío.
});
