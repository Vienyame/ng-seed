(function() {
  'use strict';

  angular.module('myApp')
    .config(['$urlRouterProvider', routerConfig]);

  function routerConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise("/")
  }
  routerConfig.$inject = ['$urlRouterProvider'];
})();
