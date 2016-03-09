myApp.controller('Chord_namesController', ['$scope', '$http', function($scope, $http) {
    console.log('the Chord Names controller is working');

    $scope.chords = [
      {name: 'C'},
      {name: 'D'},
      {name: 'Em'},
      {name: 'F'},
      {name: 'G'},
      {name: 'Am'},
      {name: 'B7'}

    ];

    function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];
}
}]);
