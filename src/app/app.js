(function(){
  'use strict';

  angular.module('myApp',['ngRoute','ui.router', 'myApp.home'])
  .config(['$urlRouterProvider', function($urlRouterProvider){
    $urlRouterProvider.otherwise("/")
  }])
  })()
