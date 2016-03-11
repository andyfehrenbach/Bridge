console.log('transposer');

var allTheChords = ['C', 'C#', 'D','D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ];  //12

var keyOfC = ['C','D','E','F','G','A','B'];

var capoPosition = 2;

function transpose (keyArray, capoPosition) {
  var transposedArray = [];

  for (var i = 0; i < keyArray.length; i++) {
    var newIndex = (findIndex(keyArray[i]) + capoPosition) % allTheChords.length;
    console.log(newIndex);
    var newChord = allTheChords[newIndex];
    transposedArray.push(newChord);
  }
  return transposedArray ;
}


function findIndex(note) {
  for (var i = 0; i < allTheChords.length; i++) {
      if (allTheChords[i] == note) {
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

addMinor (keyOfC);
addMinor(transpose (keyOfC, capoPosition));
