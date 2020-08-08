namespace general{
    export class Persona{
        public nombre: string;
        public apellido: string;
        public edad: number;

        constructor(nombre:string,apellido:string,edad:number){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }

        public personaToJson():string {
            
            return (this.nombre + " " + this.apellido + " " + this.edad.toString());
        }
    }
}