const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
        // console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
    }


}

const crear = (descripcion) => {

    cargarDB();

    // console.log(listadoPorHacer);

    let porHacer = {
        descripcion,
        completado: false
    };
    // console.log(porHacer);
    listadoPorHacer.push(porHacer);
    // console.log(listadoPorHacer);
    guardarDB();

    return porHacer;

}

const getListado = (completado = 'ALL') => {
    cargarDB();
    let lista = [];
    console.log(listadoPorHacer);

    if (completado === 'DONE') {

        lista = listadoPorHacer.filter(tarea => tarea.completado === true);
        console.log('DONE');

    } else if (completado === 'TODO') {

        lista = listadoPorHacer.filter(tarea => tarea.completado === false);
        console.log('TODO');

    } else {
        console.log('ALL');
        lista = listadoPorHacer;
    }
    return lista;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // console.log(index);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;

    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}