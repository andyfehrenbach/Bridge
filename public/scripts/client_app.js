var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/chord_names', {
            templateUrl: '/views/templates/chord_names.html',
            controller: 'chord_namesController'
        })

        .when('/recommendations', {
            templateUrl: '/views/templates/recommendations.html',
            controller: 'RecommendationsController'
        })

        .otherwise({
            redirectTo: 'chord_names'
        });
}]);
