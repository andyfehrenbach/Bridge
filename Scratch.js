console.log('transposer');

$scope.majorChords = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']; //12


// $scope.keyOfC = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

$scope.capoPosition = 1;

// function createSmallArray (keyArray) {
//   var smallArray = [];
//   for (var i = 0; i < keyArray.length; i++) {
//     smallArray.push(keyArray[i].chord_name);
//   }
//   return smallArray;
// }
// createSmallArray($scope.keyOfC);
// console.log(smallArray);

function transpose(keyArray, capoPosition, initialChordsObject) {
  var transposedArray = [];

  for (var i = 0; i < keyArray.length; i++) {
    var newIndex = (findIndex(keyArray[i]) + capoPosition) % $scope.majorChords.length;
    // console.log(newIndex);
    var newChord = $scope.majorChords[newIndex];
    // console.log(newChord);
    transposedArray.push(newChord);
    //trying to get the new chords into the chords array
    initialChordsObject[i].transposedChord = transposedArray[i];
    // console.log($scope.chords);
  }
  return transposedArray;
}


function findIndex(note) {
  for (var i = 0; i < $scope.majorChords.length; i++) {
    if ($scope.majorChords[i] == note) {
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
chords = [
  { name: 'C' },
  { name: 'Dm' },
  { name: 'Em' },
  { name: 'F' },
  { name: 'G' },
  { name: 'Am' },
  { name: 'B7' }
];

///convert key calls
$scope.newKey = addSuffix(transpose($scope.keyOfC, $scope.capoPosition, $scope.chords));
console.log($scope.newKey);
