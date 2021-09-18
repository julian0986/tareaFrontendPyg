/* se crean dos cosntantes las cuales van ha ser ingresadas por teclado */
const nombre = prompt("Ingrese Nombre:");
const apellido = prompt("Ingrese apellido")
/* Con Esta linea se crea un espa */
document.getElementById('bienvenido').innerHTML = `Bienvenido: ${nombre.charAt(0)}${apellido.charAt(0)}`