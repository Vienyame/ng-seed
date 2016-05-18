(function(){
  'use strict';

  angular.module('myApp.home',[])
  .config(['$stateProvider', function($stateProvider){
    $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "components/home/home.html",
      controller:"HomeController",
      controllerAs:"home"
    })
  }])
})()
