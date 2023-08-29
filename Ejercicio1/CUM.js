const tableBody = document.getElementById('Tabla').getElementsByTagName('tbody')[0];
let Notas = [];

while (true) {
    let materia;
    let notaFinal;
    let UV;
    
    while (true) {
        materia = prompt('Nombre de la materia:');
        if (materia) {
            break;
        } else {
            alert("Debe ingresar una materia");
        }
    }

    while (true) {
        notaFinal = parseFloat(prompt('Nota final:'));
        if (!isNaN(notaFinal) && notaFinal >= 0 && notaFinal <= 10) {
            break;
        } else {
            alert("Ingrese una nota válida");
        }
    }

    while (true) {
        UV = parseFloat(prompt('Unidades valorativas:'));
        if (!isNaN(UV) && UV >= 3 && UV <= 4) {
            break;
        } else {
            alert("Ingrese 3 o 4 UV");
        }
    }

    // Almacena los datos
    Notas.push({ materia, notaFinal, UV });

    let fila = tableBody.insertRow();
    let celda1 = fila.insertCell(0);
    let celda2 = fila.insertCell(1);
    let celda3 = fila.insertCell(2);
    celda1.innerHTML = materia;
    celda2.innerHTML = notaFinal;
    celda3.innerHTML = UV;

    // Pregunta si se debe continuar
    if (!confirm('Deseas agregar otra materia')) {
        break;
    }
}

// Calcula el CUM
if(calcularCum(Notas) >= 6.0){
    document.getElementById("nota").style.color = "green";
}else{
    document.getElementById("nota").style.color = "red";
}

function calcularCum(Notas) {
    let unidadesMerito = 0;
    let unidadesValorativas = 0;
    for (let notaFin of Notas) {
        unidadesMerito += notaFin.notaFinal * notaFin.UV;
        unidadesValorativas += notaFin.UV;
    }

    // Devuelve el resultado
    return unidadesMerito / unidadesValorativas;
}

cum = calcularCum(Notas);
document.getElementById('nota').innerHTML = '<h2>CUM:' + cum.toFixed(2) + '</h2>';