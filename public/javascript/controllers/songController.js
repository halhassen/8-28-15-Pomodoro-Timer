angular.module("app").controller("SongController", ["SongFactory", "$modal", function(SongFactory, $modal){
  var vm = this;
  var getSongs = function() {
      SongFactory.getSongs().then(function(data){
         vm.playlist = data;
      });
  }
  getSongs();
  vm.song = {};
  vm.openCreateModal = function() {
    var createModal = $modal.open({
      templateUrl: 'javascript/templates/createSong.html',
      controller: 'CreateModalController',
      controllerAs: "vm",
      size: "lg"
    });
    createModal.result.then(function(songCreated){
      SongFactory.addSong(songCreated).then(function(){
          getSongs();
      })
    })
  }
  vm.deleteSong = function(song_id) {
      SongFactory.deleteSong(song_id).then(function(){
          getSongs();
      })
  }
  vm.openEditModal = function(idx) {
      var editModal = $modal.open({
          templateUrl: 'javascript/templates/editSong.html',
          controller: 'EditModalController',
          controllerAs: "vm",
          size: "lg",
          resolve: {
              song: function() {
                  return SongFactory.playlist[idx];
              }
          }
      });
      editModal.result.then(function(songEdited){
          SongFactory.editSong(songEdited).then(function(){
              getSongs();
          })
      })
  }

}]);
