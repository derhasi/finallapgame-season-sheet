'use strict';

angular.module('finallapgameSeasonSheetApp')
  .controller('MainCtrl', function ($scope) {

    $scope.teams = [
      {
        name: "Road Avengers",
        color: "yellow",
        style: {background: "yellow"},
        drivers: {
          red: "Saulo Thao",
          blue: "Miguel Lopez"
        },
        player: ""
      }
    ];

    $scope.races = [
      {
        name: "Race 1"
      }
    ];


  });
