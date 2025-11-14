/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function confirmarBaja() {
    if (confirm("¿Estás seguro de que deseas dar de baja a este estudiante?")) {
        // Si el usuario confirma, se envía el formulario
        return true;
    } else {
        // Si el usuario cancela, se detiene el envío del formulario
        return false;
    }
}
