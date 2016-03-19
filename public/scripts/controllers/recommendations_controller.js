myApp.controller('RecommendationsController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
$scope.capo = '0';
$scope.selectedKey = 'C';
var smallArray = [];
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
  $scope.allNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']; //12
  $scope.recommendations = ['First', 'Second', 'Third', 'Fourth'];
  $scope.recommendation = $scope.recommendations[0];
  $scope.selectedAllKey = $scope.allKeys[3];
  $scope.dataFactory = DataFactory;
  $scope.allOpenKeys = [];
  $scope.chords = [{},{},{},{},{},{},{}];
  $scope.newKey = [];
  var transposedArray = [];

  ///begin factory retrieval
  if ($scope.dataFactory.retrieveAllOpenKeys() === undefined) {
      // initial load
      $scope.dataFactory.factoryGetAllChords().then(function() {
          $scope.allOpenKeys = $scope.dataFactory.retrieveAllOpenKeys();
          // console.log('if clause', $scope.allOpenKeys);
             recommendC();
          });
      } else {
          $scope.allOpenKeys = $scope.dataFactory.retrieveAllOpenKeys();
          console.log('else clause', $scope.allOpenKeys);
              recommendC();
      }


  $scope.getRecommendation = function (selectedAllKey, recommendation) {
    console.log($scope.newKey);
    var currentSelection;
    var currentRecommendation;
    // $scope.selectedKey = 'C';
    transposedArray = [];
    for (var i = 0; i < $scope.allKeys.length; i++) {
      if ($scope.allKeys[i].Key == selectedAllKey.Key) {
          currentSelection = $scope.allKeys[i];
          // console.log('currentSelection', currentSelection);

          for (var j = 0; j < currentSelection.Recommendations.length; j++) {
            // console.log(currentSelection.Recommendations[j]);
            if (currentSelection.Recommendations[j].hasOwnProperty(recommendation)) {
              currentRecommendation = currentSelection.Recommendations[j];
              $scope.selectedKey = currentRecommendation[Object.keys(currentRecommendation)[0]];
              $scope.capo = currentRecommendation[Object.keys(currentRecommendation)[1]];
              // console.log($scope.capo);
              // console.log($scope.selectedKey);
              // console.log('selected recommendation', currentRecommendation);
            }
          }
          for (var k = 0; k < $scope.allOpenKeys.length; k++) {
            if ($scope.allOpenKeys[k][0].chord_name == $scope.selectedKey){
              createCharts($scope.allOpenKeys[k]);
              createSmallArray($scope.allOpenKeys[k]);

              $scope.newKey = addSuffix(transpose(smallArray, $scope.capo, $scope.chords));
              // console.log('new key array', $scope.newKey);
              smallArray =[];

            }
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

  function createSmallArray (keyArray) {
    for (var i = 0; i < keyArray.length; i++) {
      smallArray.push(keyArray[i].chord_name);
      // console.log(smallArray);
    }
    return smallArray;
  }

  function transpose(keyArray, capoPosition, initialChordsObject) {
    console.log('transpose function running');
    $scope.newKey = [];

    var newIndex = 0;

      for (var i = 0; i < keyArray.length; i++) {
        newIndex = (findIndex(keyArray[i]) + parseInt(capoPosition)) % $scope.allNotes.length;
        var newChord = $scope.allNotes[newIndex];
        transposedArray.push(newChord);
        // console.log(newChord);
        //trying to get the new chords into the chords array
        initialChordsObject[i].transposedChord = transposedArray[i];
        // console.log(initialChordsObject[i].transposedChord);
      }
      console.log('transposed array', transposedArray);

    return transposedArray;
  }

  function findIndex(note) {
    for (var i = 0; i < $scope.allNotes.length; i++) {
      if ($scope.allNotes[i] == note) {
        return i;
      }
    }
  }

  function addSuffix(key) {
    key[1] += 'm';
    key[2] += 'm';
    key[5] += 'm';
    key[6] += '7';
    return key;
  }

  function recommendC() {
    createCharts($scope.allOpenKeys[2]);
    createSmallArray($scope.allOpenKeys[2]);
console.log(smallArray);

    $scope.newKey = addSuffix(transpose(smallArray, 0, $scope.chords));
    console.log('new key array', $scope.newKey);
    smallArray =[];

  }




}]);
