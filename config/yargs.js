const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
    // const total = {
    //     alias: 't',
    //     default: true,
    //     desc: 'Marca como completado o pendiente la tarea'
    // }



const argv = require('yargs')

.command('crear', 'Crear un elemento por hacer', { descripcion })

.command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })

.command('borrar', 'Borra una tarea creada', { descripcion })

.command('listar', 'Actualiza el estado completado de una tarea', { completado })

.help()
    .argv;

module.exports = {
    argv
}