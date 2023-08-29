var nombreEmpleado = prompt('Introduzca el nombre del empleado:', '');
var cargo = prompt('Introduzca el cargo que ejerce: ', '');
var horasTrabajadas = prompt('Introduzca las horas trabajadas en el mes: ', '');
var pagoHora = prompt('Introduzca cuanto se pago por hora: ', '');
var salarioNeto, ISS, AFP, Renta, salarioBase;

salarioBase = horasTrabajadas * pagoHora;

const calcularDescuentos = (numero, porcentaje) => numero * porcentaje;

ISS = calcularDescuentos(salarioBase, 0.03);

AFP = calcularDescuentos(salarioBase, 0.0725);

if (ISS > 30) {
    ISS = 30;
}

if (salarioBase >= 0.01 && salarioBase <= 472.00) {
    Renta = 0;
} else if (salarioBase >= 472.01 && salarioBase <= 895.24) {
    Renta = calcularDescuentos(salarioBase, 0.10);
} else if (salarioBase >= 895.25 && salarioBase <= 2038.10) {
    Renta = calcularDescuentos(salarioBase, 0.20);
} else if (salarioBase >= 2038.11) {
    Renta = calcularDescuentos(salarioBase, 0.30);
}


salarioNeto = salarioBase - (ISS + Renta + AFP);

var resultadoHTML = `<h2>Resumen de Salario</h2>
                     <p>Nombre del empleado: ${nombreEmpleado}</p>
                     <p>Cargo: ${cargo}</p>
                     <p>Salario Base: $${salarioBase.toFixed(2)}</p>
                     <p>Descuento ISS: $${ISS.toFixed(2)}</p>
                     <p>Descuento AFP: $${AFP.toFixed(2)}</p>
                     <p>Descuento Renta: $${Renta.toFixed(2)}</p>
                     <p><strong>Salario Neto: $${salarioNeto.toFixed(2)}</strong></p>`;

document.getElementById('resultado').innerHTML = resultadoHTML;