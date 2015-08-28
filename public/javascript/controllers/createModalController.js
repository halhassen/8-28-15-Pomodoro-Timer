angular.module("app").controller("CreateModalController", ["$modalInstance", function($modalInstance){
	var vm = this;
	vm.song = {};
	vm.addSong = function() {
		$modalInstance.close(vm.song);
	};
}])