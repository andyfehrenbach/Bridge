myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var majorChords;
    var minorChords;
    var seventhChords;
    var allOpenKeys = undefined;



    var getMajorChords = function() {
        // console.log('getting chords from server');
        var promise = $http.get('/all_chords').then(function(response) {
            majorChords = response.data;
             console.log('response:major', majorChords);
        });
        return promise;
    };

    var getMinorChords = function() {
        // console.log('getting minor chords from server');
        var promise = $http.get('/minor_chords').then(function(response) {
            minorChords = response.data;
            console.log('response: minor', minorChords);
        });
        return promise;
    };

    var getSeventhChords = function() {
        // console.log('getting seventh chords from server');
        var promise = $http.get('/seventh_chords').then(function(response) {
            seventhChords = response.data;
            console.log('response: minor', seventhChords);


        });
        return promise;
    };


function getAllChords() {

  console.log('getAllChords is running');
  return getMajorChords().then(function () {
      return getMinorChords().then(function () {
        return getSeventhChords().then(function () {
          console.log('getAllChords is finished' );
          writeAllKeys();
          console.log('the array ', allOpenKeys);
        });
      });
    });

}


    // begin writing keys
    // Write A
    function writeA() {
        var keyOfA = [
           majorChords[0],
           minorChords[2],
           minorChords[4],
           majorChords[5],
           majorChords[7],
           minorChords[9],
           seventhChords[11]
      ];
        stripKeyInfo(keyOfA);
        allOpenKeys.push(keyOfA);
        return keyOfA;
    }

    // Write B
    function writeB() {
        var keyOfB = [
           majorChords[2],
           minorChords[4],
           minorChords[6],
           majorChords[7],
           majorChords[9],
           minorChords[11],
           seventhChords[1]
      ];
        stripKeyInfo(keyOfB);
        allOpenKeys.push(keyOfB);
        return keyOfB;
    }

    // Write C
    function writeC() {
        var keyOfC = [
           majorChords[3],
           minorChords[5],
           minorChords[7],
           majorChords[8],
           majorChords[10],
           minorChords[0],
           seventhChords[2]
      ];
        stripKeyInfo(keyOfC);
        allOpenKeys.push(keyOfC);
        return keyOfC;
    }

    // Write D
    function writeD() {
        var keyOfD = [
           majorChords[5],
           minorChords[7],
           minorChords[9],
           majorChords[10],
           majorChords[0],
           minorChords[2],
           seventhChords[4]
      ];
        stripKeyInfo(keyOfD);
        allOpenKeys.push(keyOfD);
        return keyOfD;
    }

    // Write E
    function writeE() {
        var keyOfE = [
           majorChords[7],
           minorChords[9],
           minorChords[11],
           majorChords[0],
           majorChords[2],
           minorChords[4],
           seventhChords[6]
      ];
        stripKeyInfo(keyOfE);
        allOpenKeys.push(keyOfE);
        return keyOfE;
    }

    // Write F
    function writeF() {
        var keyOfF = [
           majorChords[8],
           minorChords[10],
           minorChords[0],
           majorChords[1],
           majorChords[3],
           minorChords[5],
           seventhChords[7]
      ];
        stripKeyInfo(keyOfF);
        allOpenKeys.push(keyOfF);
        return keyOfF;
    }

    // Write G
    function writeG() {
        var keyOfG = [
           majorChords[10],
           minorChords[0],
           minorChords[2],
           majorChords[3],
           majorChords[5],
           minorChords[7],
           seventhChords[9]
      ];
        stripKeyInfo(keyOfG);
        allOpenKeys.push(keyOfG);
        return keyOfG;
    }

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

    function writeAllKeys() {
      allOpenKeys = [];
      writeA();
      writeB();
      writeC();
      writeD();
      writeE();
      writeF();
      writeG();
    }


    //PUBLIC

    var publicApi = {

        retrieveAllOpenKeys: function () {
          return allOpenKeys;
        },
        factoryGetAllChords: function () {
          return getAllChords();
        }
    };

    return publicApi;
}]);
