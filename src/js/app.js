
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
        cedula : document.getElementById('cedula').value,
        nombre : document.getElementById('nombre').value,
        apellido : document.getElementById('apellido').value,
        edad : document.getElementById('edad').value,
        celular : document.getElementById('celular').value,
        correo: document.getElementById('correo').value,
        valorcita : valor,
        historia : document.getElementById('historia').value,
        citaiva :  iva,

    };
    document.getElementById('respuesta').innerHTML = `Registraste a: ${paciente.nombre} ${paciente.apellido}`;
             
    array.push(paciente);
    console.table(array);
    document.getElementById('foreset').reset();
};

pacientes();