myApp.controller('RecommendationsController', ['$scope', '$http', function($scope, $http) {
    console.log('the RecommendationsController controller is working');
$scope.selectedAllKey = 'A';
$scope.fret = '0';

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
  {Key: 'C',
   Recommendations: [{First: 'C', Capo: 0},
                     {Second: 'A', Capo : 3},
                     {Third: 'G', Capo: 5},
                     {Fourth: 'E', Capo: 8}]
  },
  {Key: 'C#',
   Recommendations: [{First: 'C', Capo: 1},
                     {Second: 'A', Capo : 4},
                     {Third: 'G', Capo: 6},
                     {Fourth: 'E', Capo: 9}]
  },
  {Key: 'D',
   Recommendations: [{First: 'D', Capo: 0},
                     {Second: 'C', Capo : 2},
                     {Third: 'A', Capo: 5},
                     {Fourth: 'G', Capo: 7}]
  },
  {Key: 'D#',
   Recommendations: [{First: 'D', Capo: 1},
                     {Second: 'C', Capo : 3},
                     {Third: 'A', Capo: 6},
                     {Fourth: 'G', Capo: 8}]
  },
  {Key: 'E',
   Recommendations: [{First: 'E', Capo: 0},
                     {Second: 'D', Capo : 2},
                     {Third: 'C', Capo: 4},
                     {Fourth: 'A', Capo: 7}]
  },
  {Key: 'F',
   Recommendations: [{First: 'E', Capo: 1},
                     {Second: 'D', Capo : 3},
                     {Third: 'C', Capo: 5},
                     {Fourth: 'A', Capo: 8}]
  },
  {Key: 'F#',
   Recommendations: [{First: 'E', Capo: 2},
                     {Second: 'D', Capo : 4},
                     {Third: 'C', Capo: 6},
                     {Fourth: 'A', Capo: 9}]
  },
  {Key: 'G',
   Recommendations: [{First: 'G', Capo: 0},
                     {Second: 'E', Capo : 3},
                     {Third: 'D', Capo: 5},
                     {Fourth: 'C', Capo: 7}]
  },
];

  $scope.recommendations = ['First', 'Second', 'Third', 'Fourth'];

}]);
