myApp.controller('Key_makerController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {

$scope.dataFactory = DataFactory;
$scope.majorChords = undefined;
$scope.minorChords = undefined;
$scope.seventhChords = undefined;
$scope.keyOfC = [];
$scope.keyOfA = [];
$scope.keyOfG = [];
$scope.keyOfE = [];
$scope.keyOfD = [];


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
              console.log($scope.keyOfC);
              console.log($scope.keyOfA);

              createCharts($scope.keyOfA);



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

//append SVGs to DOM
if ($scope.majorChords && $scope.minorChords && $scope.seventhChords) {
}



//add musical nummeral to each chord in key array.
function addNumeral (key) {
  for (var i = 0; i < key.length; i++) {
    key[i].numeral = i + 1;
  }
}

function stripKeyInfo(key) {
  for (var i = 0; i < key.length; i++) {
    if (key[i].chord_name.indexOf('m') !== -1) {
      console.log('applied at key:', key[i].chord_name);
      key[i].chord_name = key[i].chord_name.substring(0, key[i].chord_name.length - 1);
    } else if (key[i].chord_name.indexOf('7') !== -1) {
        console.log('applied at key:', key[i].chord_name);
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

// begin writing keys
// Write C
function writeC() {
    $scope.keyOfC = [
       $scope.majorChords[3],
       $scope.minorChords[6],
       $scope.minorChords[7],
       $scope.majorChords[8],
       $scope.majorChords[10],
       $scope.minorChords[1],
       $scope.seventhChords[2]
  ];
    addNumeral($scope.keyOfC);
    stripKeyInfo($scope.keyOfC);
}

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
    addNumeral($scope.keyOfA);
}


}]);
