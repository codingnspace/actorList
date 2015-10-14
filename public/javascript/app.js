(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state("Add",{
			url:'/add',
			templateUrl: 'views/add.html'
		}).state("Edit",{
		  url:'/edit',
			templateUrl: '/views/edit.html'	
		});
		$urlRouterProvider.otherwise('/');
	}
})();
