var app = angular.module('main', []);


app.config(function() {

});

app.run(function() {

});

app.controller('AppController', [ '$scope', function($scope) {
    $scope.message = "Hello world";
    $scope.employees = ['Rajdeep', 'Sandeep', 'Aishwarya', 'Rehan'];
    $scope.players = [
        {
            name: "Kohli",
            category: "Batsman",
            price: 300000,
            available: true,
            skillcolor: 'red'
        },
        {
            name: "Bhuvaneshwar kumar",
            category: "Bowler",
            price: 3500,
            available: true,
            skillcolor: 'orange'
        },
        {
            name: "Dhoni",
            category: "Batsman",
            price: 450000,
            available: false,
            skillcolor: 'green'
        },
        {
            name: "Ishant Sharma",
            category: "Bowler",
            price: 2100,
            available: true,
            skillcolor: 'blue'
        }
    ]

    $scope.removeSold = function(player) {
        var removedPlayer = $scope.players.indexOf(player);
        $scope.players.splice(removedPlayer, 1);
    }

    $scope.addPlayer = function() {
        $scope.players.push({
            name : $scope.newplayer.name,
            category: $scope.newplayer.category,
            price: parseInt($scope.newplayer.price),
            available: true,
            skillcolor: $scope.newplayer.skillcolor
        })

        $scope.newplayer.name = ""
        $scope.newplayer.category = ""
        $scope.newplayer.price = ""
        $scope.newplayer.skillcolor = ""
    }
}]);