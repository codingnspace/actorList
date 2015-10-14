(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController(HomeFactory) {
		var vm = this;

HomeFactory.getActors().then(function(res){
	vm.actors = res;
});

vm.deleteActor = function(actor){
	HomeFactory.deleteActor(actor)
};
	}
})();
