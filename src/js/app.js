
const nombrei = prompt("Ingrese Nombre:");
const apellidoi = prompt("Ingrese apellido");

/* Con Esta linea se crea un espa */
document.getElementById('bienvenido').innerHTML = `Bienvenido: ${nombrei.charAt(0)}${apellidoi.charAt(0)}`

let agregar = document.getElementById('guardar').value;
let paciente={};
let array=[]; 
function pacientes(){
        let valor =parseFloat( document.getElementById('valorcita').value,);
        let iva =(valor*0.19)+valor;
        paciente = {
        Cedula : document.getElementById('cedula').value,
        Nombre : document.getElementById('nombre').value,
        Apellido : document.getElementById('apellido').value,
        Edad : document.getElementById('edad').value,
        Celular : document.getElementById('celular').value,
        Correo: document.getElementById('correo').value,
        Calorcita : valor,
        Historia : document.getElementById('historia').value,
        Citaiva :  iva,

    };
    document.getElementById('respuesta').innerHTML = `Registraste a: ${paciente.nombre} ${paciente.apellido}`;
             
    array.push(paciente);
    console.table(array);
    document.getElementById('foreset').reset();
};

pacientes();