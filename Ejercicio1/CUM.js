// Inicializa la tabla y variables
const tableBody = document.getElementById('Tabla').getElementsByTagName('tbody')[0];
let Notas = [];

while (true) {
    // Obtiene la información del usuario
    let materia = prompt('Nombre de la materia:');
    let notaFinal = parseFloat(prompt('Nota final:'));
    let UV = parseFloat(prompt('Unidades valorativas:'));

    // Almacena los datos
    Notas.push({ materia, notaFinal, UV });

    // Añade una fila a la tabla
    let row = tableBody.insertRow();
    let fila1 = row.insertCell(0);
    let fila2 = row.insertCell(1);
    let fila3 = row.insertCell(2);
    fila1.innerHTML = materia;
    fila2.innerHTML = notaFinal;
    fila3.innerHTML = UV;

    // Pregunta si se debe continuar
    if (!confirm('Deseas agregar otra materia')) {
        break;
    }
}

if(calcularCum(Notas) >= 6.0){
    document.getElementById("nota").style.color = "green";
}else{
    document.getElementById("nota").style.color = "red";
}

// Calcula el CUM
function calcularCum(Notas) {
    let totalPoints = 0;
    let totalUVs = 0;
    for (let notaFinal of Notas) {
        totalPoints += notaFinal.notaFinal * notaFinal.UV;
        totalUVs += notaFinal.UV;
    }

    // Muestra el resultado
    return totalPoints / totalUVs;
}

cum = calcularCum(Notas);
document.getElementById('nota').innerHTML = '<h2>CUM:' + cum.toFixed(2) + '</h2>';

