app.controller('resume', function($scope, $http) {
  $http.get("https://raw.githubusercontent.com/jaevt/jaevt.cl/master/data/semblanza.json").then(function (response) {
    $scope.resume = response.data.text;
    Materialize.toast('Semblanza cargada', 4000) // 4000 is the duration of the toast;
  });
});
