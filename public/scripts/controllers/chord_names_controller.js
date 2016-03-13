

myApp.controller('Chord_namesController', ['$scope', '$http', function($scope, $http) {
  console.log('the Chord Names controller is working');

  $scope.chords = [{
    name: 'C'
  }, {
    name: 'D'
  }, {
    name: 'Em'
  }, {
    name: 'F'
  }, {
    name: 'G'
  }, {
    name: 'Am'
  }, {
    name: 'B7'
  }];

  ///start the chord logic
  console.log('transposer');

  $scope.allTheChords = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']; //12


  $scope.keyOfC = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  $scope.capoPosition = 2;

  function transpose(keyArray, capoPosition, initialChordsObject) {
    var transposedArray = [];

    for (var i = 0; i < keyArray.length; i++) {
      var newIndex = (findIndex(keyArray[i]) + capoPosition) % $scope.allTheChords.length;
      // console.log(newIndex);
      var newChord = $scope.allTheChords[newIndex];
      console.log(newChord);
      transposedArray.push(newChord);
      //trying to get the new chords into the chords array
      initialChordsObject[i].transposedChord = transposedArray[i];
      console.log($scope.chords);
    }
    return transposedArray;
  }


  function findIndex(note) {
    for (var i = 0; i < $scope.allTheChords.length; i++) {
      if ($scope.allTheChords[i] == note) {
        return i;
      }
    }
  }

  function addMinor(key) {
    key[1] += 'm';
    key[2] += 'm';
    key[5] += 'm';
    key[6] += '7';

    return key;
  }


  $scope.newKey = addMinor(transpose($scope.keyOfC, $scope.capoPosition, $scope.chords));
  console.log($scope.newKey);





  $scope.noWrapSlides = false;
  $scope.active = 0;

  var currIndex = 0;
  $scope.openKeys = [{
    id: 0,
    key: 'A'
  }, {
    id: 1,
    key: 'B'
  }, {
    id: 2,
    key: 'C'
  }];

  $scope.active2 = 0;
  $scope.capoPositions = [{
    id: 0,
    fret: '1'
  }, {
    id: 1,
    fret: '2'
  }, {
    id: 2,
    fret: '3'
  }];

//start the svg generator

var udi = {title:"C7♭9",fret:"x,3,2,3,2,3",label:"x,2,1,3,1,4",footer:" ,C,E,B♭,D♭,G"};
var createChart = chartMaker();
var placeholder = document.getElementById("exampleChart");
createChart(placeholder,udi);






}]);
