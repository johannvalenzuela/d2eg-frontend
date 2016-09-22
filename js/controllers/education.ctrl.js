app.controller('education', function($scope, $http) {
  $http.get("https://raw.githubusercontent.com/jaevt/jaevt.cl/master/data/academic.json").then(function (response) {
    $scope.studies = response.data.array;
    Materialize.toast('Estudios cargados', 2000) // 4000 is the duration of the toast;
  })
});
