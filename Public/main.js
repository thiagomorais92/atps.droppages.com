var app = angular.module('Cadastro',['ngRoute','ngResource','services','ui.bootstrap']);

app.config(function($routeProvider) {
    $routeProvider.when("/",
    {
        templateUrl: 'partials/cadastro.tpl.html',
        controller: 'cadastroController'
    });
    $routeProvider.when("/listar",
    {
        templateUrl: 'partials/listar.tpl.html',
        controller: 'listarController'
    });
    
});