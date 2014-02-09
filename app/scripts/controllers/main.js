'use strict';

angular.module('finallapgameSeasonSheetApp')
  .controller('MainCtrl', function ($scope) {

    $scope.teams = [
      {
        name: "Purple Team",
        color: "purple",
        style: {background: "purple"},
        drivers: {
          red: "Driver 1",
          blue: "Driver 2"
        },
        player: "",
        active: true
      },
      {
        name: "Green Team",
        color: "green",
        style: {background: "green"},
        drivers: {
          red: "Driver 1",
          blue: "Driver 2"
        },
        player: "",
        active: true
      }
    ];

    $scope.nraces = 7;
    $scope.races = [];

    $scope.saveSettings = function() {
      buildRaces($scope.nraces);
    }

    function buildRaces(nraces) {
      var no = 1;
      $scope.races = [];
      while (no <= nraces) {
        $scope.races.push({
          name: 'Race ' + no
        });
        no++;
      }
    }

    // On init build races.
    buildRaces($scope.nraces);
  });
