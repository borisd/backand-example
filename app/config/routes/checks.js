angular.module('Ngboris.config').config(function ($stateProvider) {
  $stateProvider

    .state('checks', {
      url: '/checks/:id',
      templateUrl: 'states/checks/checks.html',
      controller: 'ChecksController as Checks'
    })
});
