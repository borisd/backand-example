describe('layout Directive', function () {
  var element, $scope, createDirective;

  beforeEach(module('Ngboris.config', 'Ngboris.services', 'Ngboris.directives'));

  beforeEach(inject(function ($rootScope, $compile, $templateCache, Layout) {
    $templateCache.put('layouts/application.html', 'APPLICATION');
    createDirective = function (scopeAttrs) {
      $scope = angular.extend($rootScope.$new(), scopeAttrs);

      element = angular.element('<layout></layout>');
      element = $compile(element)($scope);
      Layout.setLayout('application');
      $scope.$apply();
    };
  }));

  it('should show layout', function () {
    createDirective({});
    expect(element.html()).toMatch("APPLICATION");
  });
});
