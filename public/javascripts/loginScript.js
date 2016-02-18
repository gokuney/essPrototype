var essApp = angular.module('ess' , ['ngMaterial']);

essApp.controller('loginController' , function($scope){

	$scope.title = 'Login';

	$scope.levels  = ['a' , 'b'];

});
