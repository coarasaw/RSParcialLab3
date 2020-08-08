namespace general{
    
    export enum eHorario{
        Mañana,
        Tarde,
        Noche
    }
    
    export class Empleado extends Persona{
        public legajo: number;
        private horario: general.eHorario;

        constructor(nombre:string,apellido:string,edad:number,legajo:number,horario:general.eHorario){
            super(nombre,apellido,edad);
            this.legajo = legajo;
            this.horario = horario;
        }

        public getHorario():eHorario
        {
            return this.horario;
        }
        public settHorario(horario:eHorario):void
        {
            this.horario=horario;
        }

        public empleadoToJson():string
        {
            return this.personaToJson.toString() + " " + this.legajo.toString() + " " + this.getHorario();
        }
    }
}