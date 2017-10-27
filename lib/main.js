var app = angular.module("main", ["ngRoute", "ngAnimate"]);

app.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "../views/home.html",
        controller: "HomeController"
      })
      .when("/directory", {
        templateUrl: "../views/directory.html",
        controller: "AppController"
      })
      .otherwise({
        redirectTo: "/home"
      });
  }
]);

app.directive("player", [
  function() {
    return {
      restrict: "E",
      scope: {
        players: "=",
        title: "="
      },
      templateUrl: "../views/random.html",
      transclude: true,
      replace: true,
      controller: function($scope) {
        $scope.random = Math.floor(Math.random() * 4);
      }
    };
  }
]);

app.run(function() {});

app.controller("HomeController", [
  "$scope",
  function($scope) {
    $scope.players = [
      {
        name: "Virat Kohli",
        image: "../content/img/virat.jpg"
      },

      {
        name: "Dhoni",
        image: "../content/img/dhoni.jpg"
      },
      {
        name: "Ishant sharma",
        image: "../content/img/ishant.jpg"
      },
      {
        name: "Bhuvanesh Kumar",
        image: "../content/img/bhuvi.jpg"
      }
    ];
  }
]);

app.controller("AppController", [
  "$scope",
  "$http",
  function($scope, $http) {
    /* .success(function(data) {
        $scope.players = data
        console.log(data);
    });
 */
    $scope.removeSold = function(player) {
      var removedPlayer = $scope.players.indexOf(player);
      $scope.players.splice(removedPlayer, 1);
    };

    $scope.addPlayer = function() {
      $scope.players.push({
        name: $scope.newplayer.name,
        category: $scope.newplayer.category,
        price: parseInt($scope.newplayer.price),
        available: true,
        skillcolor: $scope.newplayer.skillcolor
      });

      $scope.newplayer.name = "";
      $scope.newplayer.category = "";
      $scope.newplayer.price = "";
      $scope.newplayer.skillcolor = "";
    };

    $scope.removeAll = function() {
        $scope.players = [];
    };

    $scope.players = [];
    $http.get("../content/data/players.json").then(function(response) {
      $scope.players = response.data;
      var status = response.status;
      var statusText = response.statusText;
      var headers = response.headers;
      var config = response.config;
      console.log(status);
      console.log(statusText);
      console.log(headers);
      console.log(config);
    });
  }
]);
