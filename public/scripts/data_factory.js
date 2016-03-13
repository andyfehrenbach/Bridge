myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var majorChords;
    var minorChords;
    var seventhChords;


    var getMajorChords = function() {
        // console.log('getting chords from server');
        var promise = $http.get('/all_chords').then(function(response) {
            majorChords = response.data;
            // console.log('response:major', majorChords);
        });
        return promise;
    };

    var getMinorChords = function() {
        // console.log('getting minor chords from server');
        var promise = $http.get('/minor_chords').then(function(response) {
            minorChords = response.data;
            // console.log('response: minor', minorChords);
        });
        return promise;
    };

    var getSeventhChords = function() {
        // console.log('getting seventh chords from server');
        var promise = $http.get('/seventh_chords').then(function(response) {
            seventhChords = response.data;
            // console.log('response: minor', seventhChords);
        });
        return promise;
    };






    //PUBLIC

    var publicApi = {

        retrieveMajorChords: function() {
            return getMajorChords();
        },
        majorChords: function () {
            return majorChords;
        },

        retrieveMinorChords: function() {
            return getMinorChords();
        },
        minorChords: function () {
            return minorChords;
        },

        retrieveSeventhChords: function() {
            return getSeventhChords();
        },
        seventhChords: function () {
            return seventhChords;
        }

    };

    return publicApi;
}]);
