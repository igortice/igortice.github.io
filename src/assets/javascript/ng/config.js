(function () {
  'use strict';

  angular
    .module('mainApp')
    .config(function ($interpolateProvider) {
      $interpolateProvider.startSymbol('{[');
      $interpolateProvider.endSymbol(']}');
    });
}());
