app.controller('EventsController', function($scope, $http) {
  $http.get("data/events.json").then(function (response) {
    $scope.events = response.data.events;
  })
}).directive('eventCard', function() {
  return {
    templateUrl: 'js/templates/event-card.template.html'
  };
});
