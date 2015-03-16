angular.module('Ngboris.config').config(function ($stateProvider) {
  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'states/login/login.html',
      controller: 'LoginController as Login'
    })
});