(function () {
  'use strict';

  angular
    .module('mainApp')
    .controller('BaseController', baseController);

  function baseController () {
    var vm  = this;
    vm.nome = 'igor rocha';
  }
}());
