'use strict';

angular.module('finallapgameSeasonSheetApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.settings = {
      status: "hide",
      races: 7
    };

    $scope.teams = [
      {
        name: "Yellow Team",
        color: "yellow",
        style: {background: "yellow"},
        drivers: {
          red: "Driver 1",
          blue: "Driver 2"
        },
        player: "",
        active: true
      },
      {
        name: "Orange Team",
        color: "orange",
        style: {background: "orange"},
        drivers: {
          red: "Driver 1",
          blue: "Driver 2"
        },
        player: "",
        active: true
      },
      {
        name: "Red Team",
        color: "red",
        style: {background: "red"},
        drivers: {
          red: "Driver 1",
          blue: "Driver 2"
        },
        player: "",
        active: true
      },
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
        name: "Blue Team",
        color: "blue",
        style: {background: "blue"},
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

    $scope.toggleSettings = function() {
      $scope.settings.status = ($scope.settings.status == "hide") ? "show" : "hide";
    };

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
