/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function mostrarMensajeError(mensaje) {
  const mensajeErrorDiv = document.getElementById('mensajeError');
  mensajeErrorDiv.textContent = mensaje;
  mensajeErrorDiv.classList.add('mostrar');

}

// Obtener el parámetro 'error' de la URL
const urlParams = new URLSearchParams(window.location.search);
const errorMessage = urlParams.get('error');

// Mostrar el mensaje de error si existe
if (errorMessage) {
  mostrarMensajeError(errorMessage);
}