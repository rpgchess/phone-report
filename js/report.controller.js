angular.module("Report").controller("ReportController", function($scope){
	$scope.titulo = "Relatório do Alterdata";
	
	$scope.clients = [{
		id: "1",
		nome: "Teste",
		data: "20/02/2018",
		hora: "01:06",
		CNPJ: "53.485.215/0001-06",
		empresa: "Sweda Informática Ltda.",
		produto: "SAT - SS1000",
		ns: "900015235-36",
		defeito: "Não Ativa",
		solucao: "Troca do SAT",
		atendimento: "00015632448"
	},{
		id: "2",
		nome: "",
		data: "",
		hora: "",
		CNPJ: "",
		empresa: "",
		produto: "",
		ns: "",
		defeito: "",
		solucao: "",
		atendimento: ""
	}]

	$scope.novoClient = {};

	$scope.removerClient = function(id) {
		angular.forEach($scope.clients, function(client, i){
			if(client.id == id){
				$scope.clients.splice(i, 1);
			}
		});
	}

	$scope.adicionarClient = function(){
		var client = angular.copy($scope.novoClient);
		client.id = Date.now();
		$scope.clients.push(client);

		$scope.novoClient = {};
	}
});