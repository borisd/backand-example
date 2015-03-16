angular.module('Ngboris.config').config(function ($stateProvider) {
  $stateProvider
    .state('static', {
      template: '<ui-view></ui-view>',
      abstract: true
    })

    .state('static.404', {
      url: '/404',
      templateUrl: 'states/static/404.html'
    })
});