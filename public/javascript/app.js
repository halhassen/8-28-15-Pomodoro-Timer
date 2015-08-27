angular.module("app", ["ui.router", "ui.bootstrap"])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state("Home", {
      url:"/",
      templateUrl: "javascript/templates/songs.html",
      controller: "SongController",
      controllerAs: "vm"
    })
}]);
