angular.module('Ngboris.config').config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'states/home/home.html',
      controller: 'HomeController as Home'
    })
});