angular.module("app").controller("SongController", ["SongFactory", "$modal", function(SongFactory, $modal){
  var vm = this;
  vm.song = {};
  vm.openCreateModal = function() {
    var createModal = $modal.open({
      templateUrl: 'javascript/templates/createSong.html',
      controller: 'CreateModalController',
      controllerAs: "vm",
      size: "lg"
    });
    createModal.result.then(function(songCreated){
      vm.song = songCreated;
    })
  }

}]);
