var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    nomeTd.textContent = nome;

	var pesoTd = document.createElement("td");
	pesoTd.textContent = peso;

	var alturaTd = document.createElement("td");
	alturaTd.textContent = altura;

	var gorduraTd = document.createElement("td");
	gorduraTd.textContent = gordura;

	var imcTd = document.createElement("td");
	imcTd.textContent = calculaImc(peso,altura);

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

});
