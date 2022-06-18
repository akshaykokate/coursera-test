(function () {
'use strict';

angular.module('myLunchApp', [])
.controller('myLunchAppController', myLunchAppController);

function myLunchAppController($scope) {
  $scope.lunch_menu="";
  $scope.btn_mouseenter = function () {
    $scope.message="Instruction: We do not consider an empty item, i.e., , , as an item towards to the count.";
  };

  $scope.btn_mouseleave  = function () {
    $scope.message="";
  };

  $scope.checkIfTooMuch = function () {
    var dishList= '';
    dishList= $scope.lunch_menu;
    console.log('dishList'+dishList);
    if(dishList==''){
        $scope.result ="Please enter data first";
    }else{
      dishList =dishList.split(',');
      dishList= dishList.filter(function (e) {return e != '';});
      console.log(dishList);
      if(dishList.length ==0){
          $scope.result ="Please enter proper data";
          $scope.lunch_menu='';
      }else if(dishList.length <=3){
        $scope.result ="Enjoy!";
      }else{
        $scope.result ="Too much!";
      }
    }
  };
};

})();
