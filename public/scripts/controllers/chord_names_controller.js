

myApp.controller('Chord_namesController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
console.log('the Chord Names controller is working');

// //
// $scope.dataFactory.retrieveMajorChords();
// $scope.dataFactory.retrieveMinorChords();
// $scope.dataFactory.retrieveSeventhChords();
// console.log();

// selector variables
$scope.selectedKey = 'C';
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
$scope.capoPosition = '0';
var smallArray = [];
$scope.chords = [{},{},{},{},{},{},{}];
$scope.newKey = [];




//// Start a whole bunch of data factory retrieval
  //// handles the get route for major chords

  // if ($scope.dataFactory.majorChords() === undefined) {
          // initial load
          $scope.dataFactory.retrieveMajorChords().then(function() {
              $scope.majorChords = $scope.dataFactory.majorChords();
              console.log($scope.majorChords);

          });
      // } else {
          $scope.majorChords = $scope.dataFactory.majorChords();
          // console.log($scope.majorChords);

      // }

  //// handles the get route for minor chords
  // if ($scope.dataFactory.minorChords() === undefined) {
          // initial load
          $scope.dataFactory.retrieveMinorChords().then(function() {
              $scope.minorChords = $scope.dataFactory.minorChords();
              // console.log($scope.minorChords);
          });
      // } else {
          $scope.minorChords = $scope.dataFactory.minorChords();
          // console.log($scope.minorChords);
      // }

      //// handles the get route for seventh chords
  // if ($scope.dataFactory.seventhChords() === undefined) {
          // initial load
          $scope.dataFactory.retrieveSeventhChords().then(function() {
              $scope.seventhChords = $scope.dataFactory.seventhChords();
              writeAllKeys();
              console.log($scope.allOpenKeys);
              // console.log($scope.keyOfC);
              // console.log($scope.keyOfA);
              ///call key of c on load for the heck of it
                createCharts($scope.keyOfC);
                createSmallArray($scope.keyOfC);
                $scope.newKey = addSuffix(transpose(smallArray, '0', $scope.chords));
                console.log($scope.newKey);
                smallArray = [];

              //
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

          });
      // } else {
          $scope.seventhChords = $scope.dataFactory.seventhChords();
      // }
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
var newIndex = 0;
function transpose(keyArray, capoPosition, initialChordsObject) {
  console.log('transpose function running');
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
    stripKeyInfo($scope.keyOfA);
    $scope.allOpenKeys.push($scope.keyOfA);
    return $scope.keyOfA;
}

// Write B
function writeB() {
    $scope.keyOfB = [
       $scope.majorChords[2],
       $scope.minorChords[4],
       $scope.minorChords[6],
       $scope.majorChords[7],
       $scope.majorChords[9],
       $scope.minorChords[11],
       $scope.seventhChords[1]
  ];
    stripKeyInfo($scope.keyOfB);
    $scope.allOpenKeys.push($scope.keyOfB);
    return $scope.keyOfB;
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
    stripKeyInfo($scope.keyOfC);
    $scope.allOpenKeys.push($scope.keyOfC);
    return $scope.keyOfC;
}

// Write D
function writeD() {
    $scope.keyOfD = [
       $scope.majorChords[5],
       $scope.minorChords[7],
       $scope.minorChords[9],
       $scope.majorChords[10],
       $scope.majorChords[0],
       $scope.minorChords[2],
       $scope.seventhChords[4]
  ];
    stripKeyInfo($scope.keyOfD);
    $scope.allOpenKeys.push($scope.keyOfD);
    return $scope.keyOfD;
}

// Write E
function writeE() {
    $scope.keyOfE = [
       $scope.majorChords[7],
       $scope.minorChords[9],
       $scope.minorChords[11],
       $scope.majorChords[0],
       $scope.majorChords[2],
       $scope.minorChords[4],
       $scope.seventhChords[6]
  ];
    stripKeyInfo($scope.keyOfE);
    $scope.allOpenKeys.push($scope.keyOfE);
    return $scope.keyOfE;
}

// Write F
function writeF() {
    $scope.keyOfF = [
       $scope.majorChords[8],
       $scope.minorChords[10],
       $scope.minorChords[0],
       $scope.majorChords[1],
       $scope.majorChords[3],
       $scope.minorChords[5],
       $scope.seventhChords[7]
  ];
    stripKeyInfo($scope.keyOfF);
    $scope.allOpenKeys.push($scope.keyOfF);
    return $scope.keyOfF;
}

// Write G
function writeG() {
    $scope.keyOfG = [
       $scope.majorChords[10],
       $scope.minorChords[0],
       $scope.minorChords[2],
       $scope.majorChords[3],
       $scope.majorChords[5],
       $scope.minorChords[7],
       $scope.seventhChords[9]
  ];
    stripKeyInfo($scope.keyOfG);
    $scope.allOpenKeys.push($scope.keyOfG);
    return $scope.keyOfG;
}

function writeAllKeys() {
  writeA();
  writeB();
  writeC();
  writeD();
  writeE();
  writeF();
  writeG();
}




}]);
