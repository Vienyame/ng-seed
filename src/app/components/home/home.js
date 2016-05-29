(function(){
  'use strict';

  angular.module('myApp.home',[])
  .config(homeConfig);

  function homeConfig($stateProvider){
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "app/components/home/home.html",
        controller:"HomeController",
        controllerAs:"home"
      })
  }

  homeConfig.$inject = ['$stateProvider'];
})();
