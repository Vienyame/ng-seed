(function(){
  'use strict';

  angular.module('myApp.home')
  .controller('HomeController', HomeController);

  function HomeController(){
    var vm = this;

    vm.hello = 'Hello World!';
    vm.feeling = '';


  }

HomeController.$inject = [];
})()
