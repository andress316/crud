
var fila = null;



// Esta función mostrará los datos en la tabla de eregistro
function Submit() {
    //PASO 1 - Esta variable hace la lectura de datos
    var datosIngresados = recuperaDatos();
    // PASO 2 - Esta variable almacena los datos leidos en el local storage
    var lecturaDeDatos = lecturaDeLocalStorage(datosIngresados);
   
    if(fila == null){
    insertar(lecturaDeDatos);
    }
    else {
        actualizar();
    }


}


//PASO 1 - Acá ingresaré los datos del form en un Arreglo
function recuperaDatos() {
    var nombre = document.getElementById("nombre").value;
    var cargo = document.getElementById("cargo").value;
    var exp = document.getElementById("exp").value;

    var arr = [nombre, cargo, exp];
    return arr;
}


//PASO 2 - Lectura de datos almacenados localmente
function lecturaDeLocalStorage(datosIngresados) {

    // Acá alamaceno los datos en el local storage
    var n = localStorage.setItem("nombre", datosIngresados[0]);
    var c = localStorage.setItem("cargo", datosIngresados[1]);
    var e = localStorage.setItem("experiencia", datosIngresados[2]);

    //Acá leo los datos del local storage
    var n1 = localStorage.getItem("nombre", n);
    var c1 = localStorage.getItem("cargo", c);
    var e1 = localStorage.getItem("experiencia", e);

    // Acá almaceno los datos leidos en un array
    var arr = [n1, c1, e1];
    return arr;
}

//PASO 3 - Acá insertamos los datos a la tabla de registro
function insertar(lecturaDeDatos) {
    var fila = registro.insertRow();
    var col1 = fila.insertCell(0);
    var col2 = fila.insertCell(1);
    var col3 = fila.insertCell(2);
    var col4 = fila.insertCell(3);

    col1.innerHTML = lecturaDeDatos[0];
    col2.innerHTML = lecturaDeDatos[1];
    col3.innerHTML = lecturaDeDatos[2];
    col4.innerHTML = `<button onclick = edit(this)>Editar</button>
                      <button onclick = eliminar(this)>Eliminar</button>`;
}


/*_________________EDITAR FILA DE DATOS_____________________________ */

function edit(dat){
    fila = dat.parentElement.parentElement;
    document.getElementById("nombre").value = fila.cells[0].innerHTML;
    document.getElementById("cargo").value = fila.cells[1].innerHTML;
    document.getElementById("exp").value = fila.cells[2].innerHTML;
}

/*_________________ACTUALIZAR FILA DE DATOS_____________________________ */

function actualizar(){
    fila.cells[0].innerHTML = document.getElementById("nombre").value;
    fila.cells[1].innerHTML = document.getElementById("cargo").value;
    fila.cells[2].innerHTML = document.getElementById("exp").value;
    fila = null;
}


/*_________________ELIMINAR FILA DE DATOS_____________________________ */

function eliminar(td){
    fila = td.parentElement.parentElement;
    document.getElementById("registro").deleteRow(fila.rowIndex);
}