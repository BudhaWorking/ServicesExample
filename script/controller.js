var app=angular.module('myApp', []);

app.controller('myController', 
	['$scope',
	'myProvider',
	'customerServices',
	'CustomerFactory',
	 function($scope,myProvider , customerServices,CustomerFactory){

		
		$scope.proName=myProvider;
		$scope.customerService=customerServices.getSonyDetails();
		$scope.OrgData= CustomerFactory;
	
		/*$scope.constant=AppName
		$scope.ver=Version*/
	
}])