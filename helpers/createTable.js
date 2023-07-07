const fs = require('fs');
require('colors');

async function createTable({base,listar, hasta}) {
    try {
        
        let salida, consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'x'.brightBlue} ${i} ${'='.brightBlue} ${base * i}${(i!==hasta)?'\n':''}`;
            consola += `${base} ${'x'} ${i} ${'='} ${base * i}${(i!==hasta)?'\n':''}`;
        }

        if (listar) {
            console.log("========================".brightYellow);
            console.log(`Tabla del ${base}`.rainbow);
            console.log("========================".brightYellow);
            console.log(consola);
        }
        
        fs.writeFileSync(`./output/tabla-${base}.txt`, consola);

        return `tabla-${base}.txt`;
    }
    catch (err) {
        throw err;
    }
    
}

module.exports = { createTable }
