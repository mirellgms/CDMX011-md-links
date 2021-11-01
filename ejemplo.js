const {nombreFuncion, errorFuncion} = require('./funcionejemplo')

if(process.argv[2]== '--validate'){
    console.log(nombreFuncion('Mirel'))
}else {
    console.log(errorFuncion('Carlos'))
}