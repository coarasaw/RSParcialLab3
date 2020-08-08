var general;
(function (general) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, edad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
        Persona.prototype.personaToJson = function () {
            return (this.nombre + " " + this.apellido + " " + this.edad.toString());
        };
        return Persona;
    }());
    general.Persona = Persona;
})(general || (general = {}));
