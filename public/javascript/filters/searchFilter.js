/*(function() {
	"use strict";
	angular.module('app').filter('searchFilter', searchFilter);
	function searchFilter() {
		return function(arr, input) {
			if(input == undefined) {
				console.log("Worked?");
				return arr;
			}
			console.log(arr + "arr");
			console.log(input + "input");
			var newArray = [];
			for(var i = 0; i < arr.length - 1; i++) {
				input = input.toLowerCase();
				var temp = arr[i].names.toLowerCase();
				var temp2 = arr[i].uses.toLowerCase();
				if(temp.indexOf(input) >= 0) {
					newArray.push(arr[i])
				}
			}
			return arr
		}
	}
})()*/