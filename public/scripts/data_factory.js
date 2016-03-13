myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var allTheChords;


    var getChords = function() {
        console.log('getting chords from server');
        var promise = $http.get('/all_chords').then(function(response) {
            allTheChords = response.data;
            console.log('Async data response:', allTheChords);
        });
        return promise;
    };





    //PUBLIC
    var publicApi = {

        dataFactoryRetrieveChords: function() {
            return getChords();
        },
        allTheChords: function () {
            return allTheChords;
        }

    };

    return publicApi;
}]);
