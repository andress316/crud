
// Esta función ejecutará las variables globales de la aplicación
function Submit(){
    //PASO 1 - Esta variable hace la lectura de datos
    var datosIngresados = recuperaDatos();
    // PASO 2 - Esta variable almacena los datos leidos en el local storage
    var lecturaDeDatos = lecturaDeLocalStorage(datosIngresados);
    // PASO 3 - Se ejecuta la función de insertar datos a la tabla de registro
    insertar(lecturaDeDatos);
}


//PASO 1 - Acá ingresaré los datos del form en un Arreglo
function recuperaDatos (){
    var nombre = document.getElementById("nombre").value;
    var cargo = document.getElementById("cargo").value;
    var exp = document.getElementById("exp").value;

    var arr= [nombre, cargo, exp];
    return arr;
}


//PASO 2 - Lectura de datos almacenados localmente
function lecturaDeLocalStorage(datosIngresados){

    // Acá alamaceno los datos en el local storage
    var n = localStorage.setItem("nombre", datosIngresados[0]);
    var c = localStorage.setItem("cargo", datosIngresados[1]);
    var e = localStorage.setItem("experiencia", datosIngresados[2]);

    //Acá leo los datos del local storage
    var n1 = localStorage.getItem("nombre", n);
    var c1 = localStorage.getItem("cargo", c);
    var e1 = localStorage.getItem("experiencia", e);

    // Acá almaceno los datos leidos en un array
    var arr = [n1 , c1 , e1];
    return arr;
}

//PASO 3 - Acá insertamos los datos a la tabla de registro
function insertar(lecturaDeDatos){
    var fila = registro.insertRow();
    var col1 = fila.insertCell(0);
    var col2 = fila.insertCell(1);
    var col3 = fila.insertCell(2);
    var col4 = fila.insertCell(3);

    col1.innerHTML = lecturaDeDatos[0];
    col2.innerHTML = lecturaDeDatos[1];
    col3.innerHTML = lecturaDeDatos[2];
    col4.innerHTML = `<button>Editar</button>
    <button>Eliminar</button>`;
  
}