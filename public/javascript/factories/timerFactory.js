/*angular.module("app").factory("TimerFactory", ["$q", "$interval", function($q, $interval){
  var TimerFactory = {};
//  SongFactory.playlist = [];
var interval;
vm.page = "Home"
TimerFactory.workTimer = function(seconds) {
  console.log("Works!")

}
return TimerFactory;
}]);

Create if statement that decreases seconds timer by 1000 milliseconds per second.
If seconds = 0, decrease minutes by 1, if minutes = 0, decrease hour by 1. If hour is 0,
then start final minutes countdown.


However, we will just start with seconds, end with a page alert, just for testing.

Can possibly use this for adding time to the button 
 $scope.plusOne = function(index) {
  $scope.timer[index].seconds += 1;
}; 
//However, must figure out how to transfer that back to the controller, then back to timer.html
//timer.html --> ng-click="plusOne($index)"

*/

