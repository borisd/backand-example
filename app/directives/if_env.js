angular.module('Ngboris.directives').directive('ifEnv', function (ENV) {
  return function (scope, element, attrs) {
    if (ENV !== attrs.ifEnv) { element.remove(); }
  }
});
