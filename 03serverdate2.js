var dateObjc = new Date();
var day = dateObjc.getDate();
var letterMonth = 
[
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];
var month = letterMonth[dateObjc.getMonth()];
var year =dateObjc.getFullYear();
console.log("Al parecer no sabes en que dia vives TONTO!!!  ")
console.log("Hoy es dia de la independencia!!!");
//console.log(day + " / " + month + " / " + year );
console.log(`${day}/${month}/${year}`); //template literal