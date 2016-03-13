

myApp.controller('Chord_namesController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
  console.log('the Chord Names controller is working');

  $scope.dataFactory = DataFactory;
  $scope.allTheChords = [];
  var udi;

  //start the svg generator

  // var udi = {title:"C7♭9",fret:"x,3,2,3,2,3",label:""};
  var createChart = chartMaker();
  var placeholder = document.getElementById("exampleChart");



  //// handles the get route

  if ($scope.dataFactory.allTheChords() === undefined) {
          // initial load
          $scope.dataFactory.dataFactoryRetrieveChords().then(function() {
              $scope.allTheChords = $scope.dataFactory.allTheChords();
              console.log($scope.allTheChords);
              udi = $scope.allTheChords[0].chord_info;
              createChart(placeholder,udi);
          });
      } else {
          $scope.allTheChords = $scope.dataFactory.allTheChords();
          console.log($scope.allTheChords);
          udi = $scope.allTheChords[0].chord_info;
          createChart(placeholder,udi);
      }


//sample key array TODO replace with real key array from database
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
      // console.log(newChord);
      transposedArray.push(newChord);
      //trying to get the new chords into the chords array
      initialChordsObject[i].transposedChord = transposedArray[i];
      // console.log($scope.chords);
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

  function addSuffix(key) {
    key[1] += 'm';
    key[2] += 'm';
    key[5] += 'm';
    key[6] += '7';
    return key;
  }

///convert key calls
  $scope.newKey = addSuffix(transpose($scope.keyOfC, $scope.capoPosition, $scope.chords));
  console.log($scope.newKey);





  $scope.noWrapSlides = false;
  $scope.active = 0;

  // var currIndex = 0;
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

  $scope.activeCapo = 0;
  $scope.capoPositions = [
    {id: 0, fret: '1' },
    {id: 1, fret: '2' },
    {id: 2, fret: '3'},
    {id: 3, fret: '4'},
    {id: 4, fret: '5'},
    {id: 5, fret: '6'},
    {id: 6, fret: '7'},
    {id: 7, fret: '8'}
  ];







}]);
