(function () {
  'use strict';

  angular
    .module('mainApp')
    .config(config);

  config.$inject = ['$interpolateProvider'];

  function config($interpolateProvider) {
    $interpolateProvider.startSymbol('{[');
    $interpolateProvider.endSymbol(']}');
  }
}());
