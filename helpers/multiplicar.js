const fs = require("fs");
const colors = require('colors');
const multiplicar = async(num,list,h) => {

    try {
        let salida,consola = "";
        
        for (let i = 0; i <= h; i++) {
          salida += `${num} x ${i} = ${num * i}\n`;
          consola += `${num} ${ 'x'.green} ${i} ${'='.green} ${num * i}\n`;
        }
        if(list)
          console.log(consola);

        fs.writeFileSync(`./salida/Tabla_del_${num}.txt`, salida);
        return `Tabla_del_${num}.txt creado`;
    } catch (error) {
        throw error;
    }
  
};

module.exports = {
  multiplicar,
};
