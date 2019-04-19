var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
//console.log("paciente");

for (var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = true;
	var alturaEhValida = true;

	if (peso <= 0 || peso > 1000) {
	    console.log("Peso inválido!");
	    tdPeso.textContent = "Peso inválido!";
	    pesoEhValido = false;
	    paciente.classList.add("peso-invalido");

	}

	if (altura <= 0 || altura >= 3) {
	    console.log("Altura inválida!");
	    tdAltura.textContent = "Altura inválida!";
	    alturaEhValida = false;
	    paciente.classList.add("altura-invalida");
	}

	if (alturaEhValida && pesoEhValido) {
	    var imc = calculaImc(peso,altura);
	    tdImc.textContent = imc;    
	}  else {
	    tdImc.textContent = "Altura e/ou peso inválidos!"
		}
}

function calculaImc(peso,altura) {
	var imc = 0;
	imc = peso / (altura * altura);

	return imc.toFixed(2);

}