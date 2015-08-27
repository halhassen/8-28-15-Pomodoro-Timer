angular.module("app").controller("EditModalController", ["$modalInstance", "song", function($modalInstance, song){
    var vm = this;
    vm.song = song;
    vm.editSong = function() {
        $modalInstance.close(vm.song);
    }
}]);
