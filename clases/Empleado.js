var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var general;
(function (general) {
    var eHorario;
    (function (eHorario) {
        eHorario[eHorario["Ma\u00F1ana"] = 0] = "Ma\u00F1ana";
        eHorario[eHorario["Tarde"] = 1] = "Tarde";
        eHorario[eHorario["Noche"] = 2] = "Noche";
    })(eHorario = general.eHorario || (general.eHorario = {}));
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(nombre, apellido, edad, legajo, horario) {
            var _this = _super.call(this, nombre, apellido, edad) || this;
            _this.legajo = legajo;
            _this.horario = horario;
            return _this;
        }
        Empleado.prototype.getHorario = function () {
            return this.horario;
        };
        Empleado.prototype.settHorario = function (horario) {
            this.horario = horario;
        };
        Empleado.prototype.empleadoToJson = function () {
            return this.personaToJson.toString() + " " + this.legajo.toString() + " " + this.getHorario();
        };
        return Empleado;
    }(general.Persona));
    general.Empleado = Empleado;
})(general || (general = {}));
