const { multiplicar } = require("./helpers/multiplicar.js");
const colors = require('colors');
const argv = require('./config/yargs');


console.clear();

multiplicar(argv.b,argv.l,argv.h)
  .then((nombreAchivo) => console.log(nombreAchivo.trap,'Creado.'.green))
  .catch((err) => console.log(err));
