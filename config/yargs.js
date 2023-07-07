require('colors');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Este es el numero base en la creación de la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Muestra la tabla en consola'

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 12,
        description: 'Hasta donde irá la tabla'
    })
    .check((argv, options) => {
        if (isNaN( argv.b )) 
        {
            throw 'La base tiene que ser un número'.red;
        }

        return true;
    })
    .argv;

module.exports = argv;