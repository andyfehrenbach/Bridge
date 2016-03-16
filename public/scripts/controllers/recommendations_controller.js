myApp.controller('RecommendationsController', ['$scope', '$http', function($scope, $http) {
    console.log('the RecommendationsController controller is working');
$scope.allKeys = [
  {Key: 'A',
   Recommendations: [{First: 'A', Capo: 0},
                     {Second: 'G', Capo: 2},
                     {Third: 'E', Capo: 5},
                     {Fourth: 'D', Capo: 7}]
  },
  {Key: 'A#',
   Recommendations: [{First: 'A', Capo: 1},
                     {Second: 'G', Capo : 3},
                     {Third: 'E', Capo: 6},
                     {Fourth: 'D', Capo: 8}]
  },
  {Key: 'B',
   Recommendations: [{First: 'A', Capo: 2},
                     {Second: 'G', Capo : 4},
                     {Third: 'E', Capo: 7},
                     {Fourth: 'D', Capo: 9}]
  },
];

  $scope.recommendations = ['First', 'Second', 'Third', 'Fourth'];

}]);
