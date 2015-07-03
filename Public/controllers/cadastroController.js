app.controller('cadastroController',['$scope', '$window','$location',function($scope,$window,$location) {
  
   
    //mascaras
    $('.cpf').mask('000.000.000-00');
    $(".idade").mask('00');
    //objetos   
    $scope.inscritos = [];
    $scope.pessoa = {};
    
   
    
    $scope.adiciona = function(){
        $scope.inscritos.push(angular.copy($scope.pessoa));
        alerta($scope.pessoa);
        limpaCampos($scope.pessoa);
        
        console.log($scope.inscritos);
      }
     
    alerta = function(){
        alert($scope.pessoa.nome + " adicionado(a) com sucesso");
    }
    
    $scope.listar = function(){
        $location.path('/listar').search({inscritos: $scope.inscritos});
        $location.replace();
    }
    
    limpaCampos = function(){
        $scope.pessoa.nome = "";
        $scope.pessoa.idade= "";
        $scope.pessoa.escolaridade = "";
        $scope.pessoa.renda = "";  
        $scope.pessoa.cpf= "";
    }
}]);
    
  

    
    
    
     
    
    

