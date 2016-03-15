

myApp.controller('Chord_namesController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
  console.log('the Chord Names controller is working');

  // selector variables
  $scope.selectedKey = '';
  $scope.openKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  $scope.capoPositions = ['0','1','2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];


///data retrieval variables
$scope.dataFactory = DataFactory;
$scope.majorChords = undefined;
$scope.minorChords = undefined;
$scope.seventhChords = undefined;
$scope.allOpenKeys = [];

/////transposing logic variables
$scope.allNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']; //12
$scope.capoPosition = 1;
var smallArray = [];
$scope.chords = [{},{},{},{},{},{},{}];
$scope.newKey = [];
$scope.sampleKey = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];



//// Start a whole bunch of data factory retrieval
  //// handles the get route for major chords

  if ($scope.dataFactory.majorChords() === undefined) {
          // initial load
          $scope.dataFactory.retrieveMajorChords().then(function() {
              $scope.majorChords = $scope.dataFactory.majorChords();
              console.log($scope.majorChords);

          });
      } else {
          $scope.majorChords = $scope.dataFactory.majorChords();
          // console.log($scope.majorChords);

      }

  //// handles the get route for minor chords
  if ($scope.dataFactory.minorChords() === undefined) {
          // initial load
          $scope.dataFactory.retrieveMinorChords().then(function() {
              $scope.minorChords = $scope.dataFactory.minorChords();
              // console.log($scope.minorChords);
          });
      } else {
          $scope.minorChords = $scope.dataFactory.minorChords();
          // console.log($scope.minorChords);
      }

      //// handles the get route for seventh chords
  if ($scope.dataFactory.seventhChords() === undefined) {
          // initial load
          $scope.dataFactory.retrieveSeventhChords().then(function() {
              $scope.seventhChords = $scope.dataFactory.seventhChords();
              // console.log($scope.seventhChords);

              // createChart(placeholder,$scope.keyOfC[0].chord_info);
              writeC();
              writeA();
              console.log($scope.allOpenKeys);
              // console.log($scope.keyOfC);
              // console.log($scope.keyOfA);
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

                // createCharts('$scope.keyOf' + selectedKey);
              };
              // createCharts($scope.keyOfA);
///testing small array function










          });
      } else {
          $scope.seventhChords = $scope.dataFactory.seventhChords();
          // console.log($scope.seventhChords);
          writeC();
          writeA();
          console.log($scope.keyOfA);
          console.log($scope.keyOfC);


      }
///// END OF DATA FACTORY RETRIEVAL

//add musical numeral to each chord in key array.
// function addNumeral (key) {
//   for (var i = 0; i < key.length; i++) {
//     key[i].numeral = i + 1;
//   }
// }

function stripKeyInfo(key) {
  for (var i = 0; i < key.length; i++) {
    if (key[i].chord_name.indexOf('m') !== -1) {
      // console.log('applied at key:', key[i].chord_name);
      key[i].chord_name = key[i].chord_name.substring(0, key[i].chord_name.length - 1);
    } else if (key[i].chord_name.indexOf('7') !== -1) {
        // console.log('applied at key:', key[i].chord_name);
      key[i].chord_name = key[i].chord_name.substring(0,key[i].chord_name.length - 1);
    }
  }
}

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

/////Begin Transposing logic
console.log('transposer');

function transpose(keyArray, capoPosition, initialChordsObject) {
  console.log('transpose function running');
    var transposedArray = [];
    for (var i = 0; i < keyArray.length; i++) {
      var newIndex = (findIndex(keyArray[i]) + capoPosition) % $scope.allNotes.length;
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




// begin writing keys
// Write A
function writeA() {
    $scope.keyOfA = [
       $scope.majorChords[0],
       $scope.minorChords[2],
       $scope.minorChords[4],
       $scope.majorChords[5],
       $scope.majorChords[7],
       $scope.minorChords[9],
       $scope.seventhChords[11]
  ];
    // addNumeral($scope.keyOfA);
    stripKeyInfo($scope.keyOfA);
    $scope.allOpenKeys.push($scope.keyOfA);
    return $scope.keyOfA;
}

// Write C
function writeC() {
    $scope.keyOfC = [
       $scope.majorChords[3],
       $scope.minorChords[5],
       $scope.minorChords[7],
       $scope.majorChords[8],
       $scope.majorChords[10],
       $scope.minorChords[0],
       $scope.seventhChords[2]
  ];
    // addNumeral($scope.keyOfC);
    stripKeyInfo($scope.keyOfC);
    $scope.allOpenKeys.push($scope.keyOfC);
    return $scope.keyOfC;
}

}]);
