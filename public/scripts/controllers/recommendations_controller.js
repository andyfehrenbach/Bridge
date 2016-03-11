myApp.controller('RecommendationsController', ['$scope', '$http', function($scope, $http) {
    console.log('the RecommendationsController controller is working');

    
  $scope.noWrapSlides = false;
  $scope.active = 0;

  var currIndex = 0;
    $scope.slides = [
      {
        image: "http://lorempixel.com/400/200/",
        id: 0
      },
      {
        image: "http://lorempixel.com/400/200/food",
        id: 1
      },

    ];
}]);
