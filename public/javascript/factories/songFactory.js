angular.module("app").factory("SongFactory", ["$http", "$q", function($http, $q){
  var SongFactory = {};
  var fbURL = "https://troop229.firebaseio.com/";
  SongFactory.playlist = [];
  SongFactory.addSong = function(song) {
    var q = $q.defer();
    $http.post(fbURL + ".json", song)
        .success(function(data){
            q.resolve();
        })
        .error(function(data){
            q.reject();
        })
        return q.promise;
  }
  SongFactory.editSong = function(song) {
    var q = $q.defer();
    $http.put(fbURL + song._id + "/.json", song)
        .success(function(data){
            q.resolve();
        })
        .error(function(data){
            q.reject();
        })
        return q.promise;
  }
  SongFactory.deleteSong = function(song_id) {
    var q = $q.defer();
    $http.delete(fbURL + song_id + "/.json")
        .success(function(data){
            q.resolve();
        })
        .error(function(data){
            q.reject();
        })
        return q.promise;
  }
  SongFactory.getSongs = function() {
    var q = $q.defer();
    $http.get(fbURL + ".json")
        .success(function(data){
            SongFactory.playlist.length = 0;
            for(var song in data) {
                data[song]._id = song;
                SongFactory.playlist.push(data[song]);
            }
            q.resolve(SongFactory.playlist);
        })
        .error(function(data){
            q.reject(data);
        })
        return q.promise;
  }

  return SongFactory;
}]);
