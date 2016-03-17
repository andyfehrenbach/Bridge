myApp.controller('RecommendationsController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
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
  $scope.dataFactory = DataFactory;
  $scope.allOpenKeys = [];
  ///begin factory retrieval
  if ($scope.dataFactory.retrieveAllOpenKeys() === undefined) {
      // initial load
      $scope.dataFactory.factoryGetAllChords().then(function() {
          $scope.allOpenKeys = $scope.dataFactory.retrieveAllOpenKeys();
          console.log('if clause', $scope.allOpenKeys);
            // initializeC();
          });
      } else {
          $scope.allOpenKeys = $scope.dataFactory.retrieveAllOpenKeys();
          console.log('else clause', $scope.allOpenKeys);
            // initializeC();
      }


  $scope.getRecommendation = function (selectedAllKey, recommendation) {
    var smallArray = [];
    var currentSelection;
    var currentRecommendation;
    var selectedKey;
    for (var i = 0; i < $scope.allKeys.length; i++) {
      if ($scope.allKeys[i].Key == selectedAllKey.Key) {
          currentSelection = $scope.allKeys[i];
          console.log('currentSelection', currentSelection);

          for (var j = 0; j < currentSelection.Recommendations.length; j++) {
            // console.log(currentSelection.Recommendations[j]);
            if (currentSelection.Recommendations[j].hasOwnProperty(recommendation)) {
              currentRecommendation = currentSelection.Recommendations[j];
              selectedKey = currentRecommendation[Object.keys(currentRecommendation)[0]];
              console.log(selectedKey);
              console.log('selected recommendation', currentRecommendation);
            }
          }
      }
      for (var k = 0; k < $scope.allOpenKeys.length; k++) {
        if ($scope.allOpenKeys[k][0].chord_name == selectedKey){
          createCharts($scope.allOpenKeys[k]);
          createSmallArray($scope.allOpenKeys[k]);
          console.log(smallArray);
          $scope.newKey = addSuffix(transpose(smallArray, $scope.capoPosition, $scope.chords));
          console.log($scope.newKey);

        }
      }
  }
};

  function createCharts(key) {
    var createChart = chartMaker();

    createChart(document.getElementById('1'), key[0].chord_info);
    createChart(document.getElementById('2'), key[1].chord_info);
    createChart(document.getElementById('3'), key[2].chord_info);
    createChart(document.getElementById('4'), key[3].chord_info);
    createChart(document.getElementById('5'), key[4].chord_info);
    createChart(document.getElementById('6'), key[5].chord_info);
    createChart(document.getElementById('7'), key[6].chord_info);
  }


}]);
