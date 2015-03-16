angular.module('Ngboris.config').config(function ($stateProvider) {
  $stateProvider

    .state('inspections', {
      url: '/inspections',
      templateUrl: 'states/inspections/inspections.html',
      controller: 'InspectionsController as Inspections'
    })
});