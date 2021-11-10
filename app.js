// let i = 0;
// variable estatica pertenece a la clase todas las instancias pueden acceder (pero se puede modificar no quiere decir que sea estatico).

    // PUNTO 1, 2, 3
class Contador{

    constructor(persona){
    this.persona = persona;
    this.conteo = 0;
    }

    static i = 0;

    cuenta(x){
        this.conteo += x;
        Contador.i += x;
    }
    // PUNTO 4
    obtenerResponsable(){
        return this.persona;
    }
    // PUNTO 5
    obtenerCuentaIndividual(){
        return this.conteo;
    }
    // PUNTO 6
    obtenerCuentaGlobal(){
        return Contador.i;
    }
    // PUNTO 7
    contar(){
        this.conteo += 1;
        Contador.i++;
    }
}

const emi = new Contador('Emiliano');
const migue = new Contador('Miguel');
const nico = new Contador('Nicolas');

emi.cuenta(1);
migue.cuenta(2);
nico.cuenta(10);

console.log('Esta es la cuenta de Emi: ' + emi.obtenerCuentaIndividual() 
+ 'Esta es la cuenta de migue: ' + migue.obtenerCuentaIndividual() 
+ 'Esta es la cuenta global: ' + nico.obtenerCuentaGlobal());

//Incrementar en uno la cuenta individual como la cuenta global
emi.contar();

console.log('Esta es la cuenta de Emi: ' + emi.obtenerCuentaIndividual() 
+ 'Esta es la cuenta global: ' + emi.obtenerCuentaGlobal());