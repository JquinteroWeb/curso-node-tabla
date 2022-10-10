const yargs = require("yargs");

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe:'La base de la multiplicacion'
  }).option(
    "l", {
        alias: "list",
        type: "boolean",
        demandOption: true,
        default:false,
        describe : 'Parametro para visualizar la tabla creada en consola'
    }
  ).option(
    "h", {
        alias: "hasta",
        type: "number",
        demandOption: true,        
        describe : 'Hasta donde quiero la multiplicacion'
    }
  ).check((argv, options) => {
    if (isNaN(argv.h)) {
      throw "Hasta tiene que ser un numero.";
    }    
    return true;
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero.";
    }    
    return true;
  }).argv;

  module.exports = argv;