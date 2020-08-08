var general;
(function (general) {
    window.addEventListener("load", function () {
        //Cliente
        document.getElementById("btnAbrirCliente").addEventListener("click", general.abrirCliente);
        document.getElementById("btnGuardarCliente").addEventListener("click", general.GuardarCliente);
        document.getElementById("btnCerrarVehiculo").addEventListener("click", general.cerrarCliente);
        document.getElementById("btnLimpiarCliente").addEventListener("click", general.limpiarCliente);
        //Oculta campos
        document.getElementById("idCheck").addEventListener("change", camposMostrados);
        document.getElementById("nombreCheck").addEventListener("change", camposMostrados);
        document.getElementById("apellidoCheck").addEventListener("change", camposMostrados);
        document.getElementById("edadCheck").addEventListener("change", camposMostrados);
        document.getElementById("turnoCheck").addEventListener("change", camposMostrados);
        // Para filtrar datos
        document.getElementById("btnPromedio").addEventListener("click", general.calcularPromedio);
        document.getElementById("TurnoFiltro").addEventListener("change", general.filtrar);
        // Eliminar
        document.getElementById("btnEliminar").addEventListener("click", general.borrar);
        document.getElementById("btnLimpiar").addEventListener("click", general.Limpiar);
    });
    var ListaClientes = new Array();
    var cabeceras = ["Legajo_F", "Nombre_F", "Apellido_F", "Edad_F", "Turno_F"];
    //Personas
    function abrirCliente() {
        //boton buscar
        var btnBusar = document.getElementById("btnPromedio");
        btnBusar.hidden = true;
        //boton Clientes
        var btnAbrirCliente = document.getElementById("btnAbrirCliente");
        btnAbrirCliente.hidden = true;
        var TablaContenedor = document.getElementById("TablaContenedor");
        TablaContenedor.hidden = true;
        var contAgregarVehiculo = document.getElementById("contAgregarVehiculo");
        contAgregarVehiculo.hidden = false;
    }
    general.abrirCliente = abrirCliente;
    function cerrarCliente() {
        //boton buscar
        var btnBusar = document.getElementById("btnPromedio");
        btnBusar.hidden = false;
        //boton Vehiculo
        var btnAbrirCliente = document.getElementById("btnAbrirCliente");
        var contAgregarVehiculo = document.getElementById("contAgregarVehiculo");
        var TablaContenedor = document.getElementById("TablaContenedor");
        var elementoID = document.getElementById("legajoFormulario");
        var elementoNombre = document.getElementById("nombreFormulario");
        var elementApellido = document.getElementById("apellidoFormulario");
        var elementoEdad = document.getElementById("edadFormulario");
        //var elementoSexo = <HTMLInputElement>document.getElementById("SexoFormulario");
        elementoID.value = "";
        elementoNombre.value = "";
        elementApellido.value = "";
        elementoEdad.value = "";
        //elementoSexo.value = "";
        btnAbrirCliente.hidden = false;
        contAgregarVehiculo.hidden = true;
        TablaContenedor.hidden = false;
    }
    general.cerrarCliente = cerrarCliente;
    function limpiarCliente() {
        var elementoID = document.getElementById("legajoFormulario");
        var elementoNombre = document.getElementById("nombreFormulario");
        var elementApellido = document.getElementById("apellidoFormulario");
        var elementoEdad = document.getElementById("edadFormulario");
        //var elementoSexo = <HTMLInputElement>document.getElementById("SexoFormulario");
        elementoID.value = "";
        elementoNombre.value = "";
        elementApellido.value = "";
        elementoEdad.value = "";
    }
    general.limpiarCliente = limpiarCliente;
    function GuardarCliente() {
        //var elementoID = <HTMLInputElement>document.getElementById("idFormulario");
        var elementoNombre = document.getElementById("nombreFormulario");
        var elementApellido = document.getElementById("apellidoFormulario");
        var elementoEdad = document.getElementById("edadFormulario");
        var elementoTurno = document.getElementById("TurnoFormulario");
        var idLegajoParametro;
        var Mayor = ListaClientes.reduce(function (idLegajo, user) {
            if (user.legajo > idLegajo) {
                return user.legajo;
            }
            else {
                return idLegajo;
            }
        }, 0);
        idLegajoParametro = Mayor + 1;
        console.log(idLegajoParametro);
        var nombre = elementoNombre.value;
        var apellido = elementApellido.value;
        var edad = parseInt(elementoEdad.value);
        var turno = elementoTurno.value;
        console.log(turno);
        //Validación de Datos
        if (nombre == "" || nombre.length < 2) {
            document.getElementById("nombreFormulario").className = "error";
            alert("Nombre obligatorio / minimo 3 caracteres");
            return;
        }
        else {
            if (apellido == "" || apellido.length < 2) {
                document.getElementById("apellidoFormulario").className = "error";
                alert("Apellido es obligatorio / minimo 3 caracteres");
                return;
            }
            else {
                document.getElementById("nombreFormulario").className = "sinError";
                document.getElementById("apellidoFormulario").className = "sinError";
                if (turno == "Mañana") {
                    var miPersona = new general.Empleado(nombre, apellido, edad, idLegajoParametro, general.eHorario.Mañana);
                    ListaClientes.push(miPersona);
                    cargarGrilla(document.getElementById("cuerpo"), idLegajoParametro.toString(), miPersona.nombre, miPersona.apellido, miPersona.edad.toString(), "Mañana");
                }
                if (turno == "Tarde") {
                    var miPersona = new general.Empleado(nombre, apellido, edad, idLegajoParametro, general.eHorario.Tarde);
                    ListaClientes.push(miPersona);
                    cargarGrilla(document.getElementById("cuerpo"), idLegajoParametro.toString(), miPersona.nombre, miPersona.apellido, miPersona.edad.toString(), "Tarde");
                }
                if (turno == "Noche") {
                    var miPersona = new general.Empleado(nombre, apellido, edad, idLegajoParametro, general.eHorario.Noche);
                    ListaClientes.push(miPersona);
                    cargarGrilla(document.getElementById("cuerpo"), idLegajoParametro.toString(), miPersona.nombre, miPersona.apellido, miPersona.edad.toString(), "Noche");
                }
            }
        }
    }
    general.GuardarCliente = GuardarCliente;
    //Extras
    function cargarGrilla(tabla, id, nombre, apellido, edad, turno) {
        var tbody = tabla; //document.getElementById("cuerpo");
        //Creo la fila
        var tr = document.createElement("tr");
        //Creamos las colunmnas
        var td0 = document.createElement("td");
        td0.setAttribute("name", "idTabla");
        var nodotext0 = document.createTextNode(id);
        td0.appendChild(nodotext0);
        tr.appendChild(td0);
        var td1 = document.createElement("td");
        td1.setAttribute("name", "nombreTabla");
        var nodotext1 = document.createTextNode(nombre);
        td1.appendChild(nodotext1);
        tr.appendChild(td1);
        var td2 = document.createElement("td");
        td2.setAttribute("name", "apellidoTabla");
        var nodotext2 = document.createTextNode(apellido);
        td2.appendChild(nodotext2);
        tr.appendChild(td2);
        var td3 = document.createElement("td");
        td3.setAttribute("name", "edadTabla");
        var nodotext3 = document.createTextNode(edad);
        console.log(nodotext3);
        td3.appendChild(nodotext3);
        tr.appendChild(td3);
        var td4 = document.createElement("td");
        td4.setAttribute("name", "tablaTurno");
        var nodotext4 = document.createTextNode(turno);
        td4.appendChild(nodotext4);
        tr.appendChild(td4);
        var td5 = document.createElement("td");
        var button = document.createElement("button");
        button.setAttribute("type", "button");
        button.textContent = "Eliminar";
        //button.setAttribute('class', 'btnEliminar');
        button.setAttribute('id', 'btnEliminar');
        var nodotext5 = button;
        td5.appendChild(nodotext5);
        tr.appendChild(td5);
        var td6 = document.createElement("td");
        var button = document.createElement("button");
        button.setAttribute("type", "button");
        button.textContent = "Modificar";
        button.setAttribute('id', 'btnModificar');
        var nodotext6 = button;
        td6.appendChild(nodotext6);
        tr.appendChild(td6);
        tbody.appendChild(tr);
        limpiarCliente();
    }
    general.cargarGrilla = cargarGrilla;
    function camposMostrados() {
        var id = document.getElementById("idCheck");
        var nombre = document.getElementById("nombreCheck");
        var apellido = document.getElementById("apellidoCheck");
        var edad = document.getElementById("edadCheck");
        var turno = document.getElementById("turnoCheck");
        if (id.checked) {
            var tablaId = document.getElementsByName("idTabla");
            tablaId.forEach(function (x) { x.hidden = false; });
        }
        else {
            var tablaId = document.getElementsByName("idTabla");
            tablaId.forEach(function (x) { x.hidden = true; });
        }
        if (nombre.checked) {
            var tablaNombre = document.getElementsByName("nombreTabla");
            tablaNombre.forEach(function (x) { x.hidden = false; });
        }
        else {
            var tablaNombre = document.getElementsByName("nombreTabla");
            tablaNombre.forEach(function (x) { x.hidden = true; });
        }
        if (apellido.checked) {
            var tablaApellido = document.getElementsByName("apellidoTabla");
            tablaApellido.forEach(function (x) { x.hidden = false; });
        }
        else {
            var tablaApellido = document.getElementsByName("apellidoTabla");
            tablaApellido.forEach(function (x) { x.hidden = true; });
        }
        if (edad.checked) {
            var tablaEdad = document.getElementsByName("edadTabla");
            tablaEdad.forEach(function (x) { x.hidden = false; });
        }
        else {
            var tablaEdad = document.getElementsByName("edadTabla");
            tablaEdad.forEach(function (x) { x.hidden = true; });
        }
        if (turno.checked) {
            var tablaTurno = document.getElementsByName("tablaTurno");
            tablaTurno.forEach(function (x) { x.hidden = false; });
        }
        else {
            var tablaTurno = document.getElementsByName("tablaTurno");
            tablaTurno.forEach(function (x) { x.hidden = true; });
        }
    }
    general.camposMostrados = camposMostrados;
    function Promesa() {
        return new Promise(function (resolve, reject) {
            var totalEdad = ListaClientes.reduce(function (total, num) {
                return total += num.edad;
            }, 0);
            resolve(totalEdad);
        });
    }
    general.Promesa = Promesa;
    function calcularPromedio() {
        Promesa().then(function (response) {
            document.getElementById("txtPromedio").value = (response / ListaClientes.length).toString();
        });
    }
    general.calcularPromedio = calcularPromedio;
    function PromesaF() {
        alert("Entamos a Promesa Turno");
        var turno = document.getElementById("TurnoFiltro").value;
        alert("Promesa Turno " + turno);
        console.log(turno);
        return new Promise(function (resolve, reject) {
            if (turno == "Todos") {
                reject(ListaClientes);
            }
            else {
                alert("Entamos listaFiltrada");
                var listaFiltrada = ListaClientes.filter(function (cliente) { return cliente.getHorario.toString() == "Tarde"; });
                console.log(listaFiltrada);
                resolve(listaFiltrada);
            }
        });
    }
    general.PromesaF = PromesaF;
    function filtrar() {
        document.getElementById("tabla").hidden = true;
        var nuevaTable = document.getElementById("tabla2");
        nuevaTable.hidden = false;
        //PromesaSexo(ListaClientes).then(function(response){
        PromesaF().then(function (response) {
            nuevaTable.innerHTML = "";
            var thead = document.createElement("thead");
            nuevaTable.appendChild(thead);
            for (var i = 0; i < cabeceras.length; i++) {
                thead.appendChild(document.createElement("th")).
                    appendChild(document.createTextNode(cabeceras[i]));
            }
            var listaPersonas = response;
            for (var i = 0; i < listaPersonas.length; i++) {
                //let id = listaPersonas.leg
                cargarGrilla(nuevaTable, listaPersonas[i].legajo.toString(), listaPersonas[i].nombre, listaPersonas[i].apellido, listaPersonas[i].edad.toString(), listaPersonas[i].getHorario().toString());
                //console.log(listaPersonas[i]); 
            }
            nuevaTable.hidden = false;
        })["catch"](function (reject) {
            nuevaTable.hidden = true;
            document.getElementById("tabla").hidden = false;
        });
    }
    general.filtrar = filtrar;
    function borrar() {
        // var tr = e.target.parentNode.parentNode;
        // var item = ListaClientes.find(x=>x.id == tr.childNodes[0].textContent);
        // var indice = ListaClientes.indexOf(item);
        // ListaClientes.splice(indice,1);
        // tr.remove();
        //var elementoID = <HTMLInputElement>document.getElementById("idFormulario");
        alert("Borrar");
    }
    general.borrar = borrar;
    function Limpiar() {
        var arrayUsuarios = ListaClientes.map(function (item) {
            return { nombre: item.nombre, apellido: item.apellido };
        });
        console.log(arrayUsuarios);
        var str = JSON.stringify(arrayUsuarios);
        console.log(str); // Logs output to dev tools console.
        alert("Mostrando Nombre & Apellido  " + str);
    }
    general.Limpiar = Limpiar;
})(general || (general = {}));
