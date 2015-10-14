(function() {
	'use strict';
	angular.module('app')
	.controller('EditActorController', EditActorController);

	function EditActorController() {
		var vm = this;
		vm.title = 'Welcome to our App!';
	}
})();
