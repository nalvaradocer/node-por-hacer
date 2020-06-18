const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea a completada', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento de la lista de tareas por hacer', {

        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}