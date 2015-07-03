angular.module('services',['ngResource'])
    .factory('funcionarioService', function($resource){
    return $resource('/funcionarios/:id');
})