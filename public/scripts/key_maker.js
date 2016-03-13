myApp.controller('Key_makerController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {

$scope.dataFactory = DataFactory;
$scope.majorChords = {};
$scope.minorChords = {};
$scope.seventhChords = {};
$scope.keyOfC = [];
$scope.keyOfC = [];
$scope.keyOfA = {};
$scope.keyOfG = {};
$scope.keyOfE = {};
$scope.keyOfD = {};




//// Start a whole bunch of data factory retrieval
  //// handles the get route for major chords

  if ($scope.dataFactory.majorChords() === undefined) {
          // initial load
          $scope.dataFactory.retrieveMajorChords().then(function() {
              $scope.majorChords = $scope.dataFactory.majorChords();
              console.log($scope.majorChords);
              udi = $scope.majorChords[10].chord_info;
                  // createChart(placeholder,udi);

          });
      } else {
          $scope.majorChords = $scope.dataFactory.majorChords();
          console.log($scope.majorChords);
          udi = $scope.majorChords[0].chord_info;
          // createChart(placeholder,udi);

      }

  //// handles the get route for minor chords
  if ($scope.dataFactory.minorChords() === undefined) {
          // initial load
          $scope.dataFactory.retrieveMinorChords().then(function() {
              $scope.minorChords = $scope.dataFactory.minorChords();
              console.log($scope.minorChords);
              // udi = $scope.minorChords[10].chord_info;
              //     createChart(placeholder,udi);
          });
      } else {
          $scope.minorChords = $scope.dataFactory.minorChords();
          console.log($scope.minorChords);
          // udi = $scope.minorChords[0].chord_info;
          // createChart(placeholder,udi);
      }

      //// handles the get route for seventh chords
  if ($scope.dataFactory.seventhChords() === undefined) {
          // initial load
          $scope.dataFactory.retrieveSeventhChords().then(function() {
              $scope.seventhChords = $scope.dataFactory.seventhChords();
              console.log($scope.seventhChords);
              // udi = $scope.seventhChords[10].chord_info;
              //     createChart(placeholder,udi);
              writeC();
              writeA();
              console.log($scope.keyOfC);
              console.log($scope.keyOfA);



          });
      } else {
          $scope.seventhChords = $scope.dataFactory.seventhChords();
          console.log($scope.seventhChords);
          // udi = $scope.seventhChords[0].chord_info;
          // createChart(placeholder,udi);
          writeC();
          writeA();
          console.log($scope.keyOfC);
          console.log($scope.keyOfA);

      }
///// END OF DATA FACTORY RETRIEVAL
//add musical nummeral to each chord in key array.
function addNumeral (key) {
  for (var i = 0; i < key.length; i++) {
    key[i].numeral = i+1;
  }
}
// begin writing keys
// Write C
function writeC() {
    $scope.keyOfC = [
       $scope.majorChords[11],
       $scope.minorChords[5],
       $scope.minorChords[7],
       $scope.majorChords[7],
       $scope.majorChords[9],
       $scope.minorChords[0],
       $scope.seventhChords[2]
  ];
    addNumeral($scope.keyOfC);
}

// Write A
function writeA() {
    $scope.keyOfA = [
       $scope.majorChords[0],
       $scope.minorChords[2],
       $scope.minorChords[4],
       $scope.majorChords[4],
       $scope.majorChords[6],
       $scope.minorChords[9],
       $scope.seventhChords[11]
  ];
    addNumeral($scope.keyOfA);
}


}]);
