(function () {
  'use strict';

  angular
    .module('mainApp')
    .config(Config);

  Config.$inject = ['$interpolateProvider'];

  function Config($interpolateProvider) {
    $interpolateProvider.startSymbol('{[');
    $interpolateProvider.endSymbol(']}');
  }
}());
