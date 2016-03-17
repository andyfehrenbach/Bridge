

myApp.controller('Chord_namesController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
console.log('the Chord Names controller is working');

// selector variables --Defaults
$scope.selectedKey = 'C';
$scope.openKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
$scope.capoPositions = ['0','1','2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];


///data retrieval variables
$scope.dataFactory = DataFactory;
$scope.allOpenKeys = [];

if ($scope.dataFactory.retrieveAllOpenKeys() === undefined) {
    // initial load
    $scope.dataFactory.factoryGetAllChords().then(function() {
        $scope.allOpenKeys = $scope.dataFactory.retrieveAllOpenKeys();
        console.log('if clause', $scope.allOpenKeys);
          initializeC();
        });
    } else {
        $scope.allOpenKeys = $scope.dataFactory.retrieveAllOpenKeys();
        console.log('else clause', $scope.allOpenKeys);
          initializeC();
    }

/////transposing logic variables
$scope.allNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']; //12
$scope.capoPosition = '0';
var smallArray = [];
$scope.chords = [{},{},{},{},{},{},{}];
$scope.newKey = [];


$scope.getChords = function (selectedKey, allOpenKeys) {
  console.log('get Chords is running for:', selectedKey);
  for (var i = 0; i < allOpenKeys.length; i++) {
    if (allOpenKeys[i][0].chord_name == selectedKey){
      createCharts(allOpenKeys[i]);
      createSmallArray(allOpenKeys[i]);
      console.log(smallArray);
      $scope.newKey = addSuffix(transpose(smallArray, $scope.capoPosition, $scope.chords));
      console.log($scope.newKey);

    }
  }
  smallArray = [];
};


///// END OF DATA FACTORY RETRIEVAL

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

///Begin Transposing logic
console.log('transposer');
function transpose(keyArray, capoPosition, initialChordsObject) {
  console.log('transpose function running');
  var newIndex = 0;

    var transposedArray = [];
    for (var i = 0; i < keyArray.length; i++) {
      newIndex = (findIndex(keyArray[i]) + parseInt(capoPosition)) % $scope.allNotes.length;
      var newChord = $scope.allNotes[newIndex];
      transposedArray.push(newChord);
      //trying to get the new chords into the chords array
      initialChordsObject[i].transposedChord = transposedArray[i];
      // console.log($scope.chords);
    }
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
//////

function createSmallArray (keyArray) {

  for (var i = 0; i < keyArray.length; i++) {
    smallArray.push(keyArray[i].chord_name);
  }
}

function initializeC () {
  createCharts($scope.allOpenKeys[2]);
    createSmallArray($scope.allOpenKeys[2]);
    $scope.newKey = addSuffix(transpose(smallArray, '0', $scope.chords));
    console.log($scope.newKey);
    smallArray = [];
}

}]);
