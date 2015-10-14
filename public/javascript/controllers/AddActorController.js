(function() {
	'use strict';
	angular.module('app')
	.controller('AddActorController', AddActorController);

	function AddActorController() {
		var vm = this;
		vm.title = 'Welcome to our App!';
	}
})();
