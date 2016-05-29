(function() {
  'use strict';

  angular.module('myApp')
    .controller('MainController', MainController);

  function MainController() {
    var vm = this;

    vm.hello = 'Hello World!';
    vm.feeling = '';

  }

  MainController.$inject = [];
})();
