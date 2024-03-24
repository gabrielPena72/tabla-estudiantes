// Declara el objeto estudiante
let estudiante = {
    nombre: '',
    apellido: '',
    matricula: '',
    curso: '',
    nota: ''
}

// Declara el array estudiantes
let estudiantes = []

// Declara el array que se usará para crear las celdas
let celda = []

// Extrae elementos HTML con los que se va a trabajar
const botonAgregar = document.getElementById('agregar')
const botonGuardar = document.getElementById('guardar')
const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const inputMatricula = document.getElementById('matricula')
const inputCurso = document.getElementById('curso')
const inputNota = document.getElementById('nota')
const tablaDatos = document.getElementById('datos')

// Función para agregar un estudiante
function agregar()
{
    // Se usa para crear una fila
    let fila = tablaDatos.insertRow()

    // Crea una nueva fila
    for (let i = 0; i < 6; i++) {
        celda[i] = fila.insertCell(i)
    }

    // Setea cada una de las celdas con los inputs
    celda[0].innerHTML = inputNombre.value
    celda[1].innerHTML = inputApellido.value
    celda[2].innerHTML = inputMatricula.value
    celda[3].innerHTML = inputCurso.value
    celda[4].innerHTML = inputNota.value
    celda[5].innerHTML = `<input type="button" value="Editar" onclick="editar(this)" class="editar">
                            <input type="button" value="Eliminar" onclick="eliminar(this)">`

    // Vacía los inputs
    inputNombre.value = ""
    inputApellido.value = ""
    inputMatricula.value = ""
    inputCurso.value = ""
    inputNota.value = ""

    // El texto en las celdas se pasan al objeto estudiante respectivamente
    estudiante = {
        nombre: celda[0].innerHTML,
        apellido: celda[1].innerHTML,
        matricula: celda[2].innerHTML,
        curso: celda[3].innerHTML,
        nota: celda[4].innerHTML
    }

    // El nuevo objeto estudiante se agrega al array estudiantes
    estudiantes.push(estudiante)
    console.log(estudiantes)
    
}
botonAgregar.addEventListener('click', agregar)

// Función para eliminar un estudiante
function eliminar(element)
{
    let row = element.parentNode.parentNode.rowIndex
    // console.log('Deleted', estudiantes[row - 1], '@ row:', row)
    tablaDatos.deleteRow(row - 1)
    estudiantes.splice(row - 1, 1)
    console.log(estudiantes)
}

// Declara si se esta editando o no (boolean)
let isEditing;

// Función para editar un estudiante
function editar(element)
{
    isEditing = true

    if(isEditing == true)
    {
        botonGuardar.style.display = "inline-block"
    }

    let row = element.parentNode.parentNode.rowIndex
    inputNombre.value = estudiantes[row - 1].nombre
    inputApellido.value = estudiantes[row - 1].apellido
    inputMatricula.value = estudiantes[row - 1].matricula
    inputCurso.value = estudiantes[row - 1].curso
    inputNota.value = estudiantes[row - 1].nota
    console.log(element)
}

function guardar(){
    
}

botonGuardar.addEventListener('click', guardar)