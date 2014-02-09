'use strict';

angular.module('finallapgameSeasonSheetApp')
  .controller('MainCtrl', function ($scope) {

    $scope.teams = [
      {
        name: "Yellow Team",
        color: "yellow",
        style: {background: "yellow"},
        drivers: {
          red: "Driver 1",
          blue: "Driver 2"
        },
        player: ""
      },
      {
        name: "Blue Team",
        color: "blue",
        style: {background: "blue"},
        drivers: {
          red: "Driver 1",
          blue: "Driver 2"
        },
        player: ""
      }
    ];

    $scope.races = [
      {
        name: "Race 1"
      },
      {
        name: "Race 2"
      },
      {
        name: "Race 3"
      },
      {
        name: "Race 4"
      },
      {
        name: "Race 5"
      }
    ];


  });
