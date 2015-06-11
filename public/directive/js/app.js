angular.module("firstApp", ["ngRoute"])
	.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
		$routeProvider
			.when("/", {
				template: "<h1>Welcome</h1>"
			})
			.when("/list", {
				templateUrl: "view/list.html",
				controller: "ListController as ctrl"
			})
			.when("/new", {
				templateUrl: "view/new.html",
				controller: "NewController as ctrl"
			});
		$locationProvider.html5Mode(true);
	}])
	.service("personService", function() {
		this.persons = [{
			"name": "Alejandro",
			"city": "Cordoba",
		}, {
			"name": "Mauricio",
			"city": "San Luis"
		}];
	})
	.controller({
		"NewController": function(personService) {
			var that = this;
			that.addName = function(newP) {
				if (newP.name && newP.city) {
					personService.persons.push(angular.copy(newP));
					newP.name = "";
					newP.city = "";
				}
			}
		},
		"ListController": ["personService", function(personService){
			this.persons = personService.persons;
		}]
	})
	.directive("personData", function() {
		return {
			restrict: "A",
			scope: {
				person: "="
			},
			templateUrl: "view/personData.html",
			link: function($scope, $element, $attributes) {
				$scope.showData = function(data) {
					alert(data.name + ", " + data.city)
				};
			}
		};
	});