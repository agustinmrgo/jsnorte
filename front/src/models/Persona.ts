
export default class Persona {
    dni: number;
    nombre: string;
    apellido: string;

    constructor({dni, nombre, apellido}){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}