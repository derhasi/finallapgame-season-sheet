'use strict';

angular.module('finallapgameSeasonSheetApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.showSettings = true;
    $scope.settings = {
      races: 7
    };

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

    $scope.races = [];

    $scope.saveSettings = function() {
      buildRaces($scope.settings.races);
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
    buildRaces($scope.settings.races);
  }]);
