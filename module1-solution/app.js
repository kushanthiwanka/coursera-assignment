(function () {
    "use strict";
    angular.module("LunchCheck", []).controller("LunchCheckController", DIController);
    DIController.$inject = ["$scope"];
    function DIController($scope) {
        $scope.lunchEatList = "";
        $scope.lunchStatus = "";
        $scope.lunchStatusColor = "";
        $scope.fnIsToomuch = () => {
            $scope.lunchEatList = $scope.lunchEatList.trim().replace(/^,|,$/g, "");
            var lunchEatListArray = $scope.lunchEatList.split(",");
            if ($scope.lunchEatList.split() == "") {
                $scope.lunchStatus = "Please enter data first";
                $scope.lunchStatusColor = "red";
                return;
            }
            $scope.lunchStatusColor = "green";
            if (lunchEatListArray.length < 4) {
                $scope.lunchStatus = "Enjoy!";
            } else {
                $scope.lunchStatus = "Too much!";
            }
        };
    }
})();
