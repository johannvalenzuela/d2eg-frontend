app.controller('admin', function($scope, $http) {
  $http.get("data/admin.json").then(function (response) {
    $scope.admin = response.data.hola;
    console.log($scope.admin);
    console.log("CARGADO");
  })
});
