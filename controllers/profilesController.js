(function() {

        var profilesController = function($scope, modals) {

            var userFlag = "on";
            var adminFlag = "off";

            $scope.btnId = 'btn1';
            $scope.btnID = 'btn2';
            $scope.isActive = false;
            $scope.isDisabled = false;

            $scope.activeButton = function(ID) {
                var id = ID;
                console.log(id);

                if (id === 'btn2') {
                    if (adminFlag === "off" && userFlag === "on") {
                        console.log(adminFlag);
                        $scope.isActive = !$scope.isActive;
                        adminFlag = "on";
                        userFlag = "off";
                    } else {
                        alert("You are already on Admin Profile");
                        $scope.alertSomething();

                    }
                } else if (id === 'btn1') {
                    if (userFlag === "off" && adminFlag === "on") {
                        $scope.isActive = !$scope.isActive;
                        userFlag = "on";
                        adminFlag = "off";
                    } else {
                        
                        $scope.alertSomething();
                    }
                } else {
                    alert("something wrong");
                }
            }

            $scope.switchEdit = function() {
                $scope.isDisabled = !$scope.isDisabled
            }

            $scope.todo = function(data) {
                var fID = data;
                console.log(fID);

            }


            //randon data

            $scope.shoppingList = [{
                name: 'Milk'
            }, {
                name: 'Eggs'
            }, {
                name: 'Bread'
            }, {
                name: 'Cheese'
            }];


            // My test Function 

            $scope.selectItem = function(selectedItem) {
                console.log(selectedItem);
                _($scope.shoppingList).each(function(item) {
                    item.selected = false;
                    if (selectedItem === item) {
                        selectedItem.selected = true;
                    }

                });
            };



            $scope.alertSomething = function() {
              console.log("alert called");
                // The .open() method returns a promise that will be either
                // resolved or rejected when the modal window is closed.
                var promise = modals.open(
                    "alert", {
                        message: "I think you are kind of beautiful!"
                    }
                );
                promise.then(
                    function handleResolve(response) {
                        console.log("Alert resolved.");
                    },
                    function handleReject(error) {
                        console.warn("Alert rejected!");
                    }
                );
            };
        }
   


    profilesController.$inject = ['$scope', 'modals'];


    angular.module('myApp').controller('profilesController', profilesController);

}());
