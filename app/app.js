"use strict";

//= require modules.js

angular.module('Ngboris', [
  'Ngboris.config',
  'Ngboris.services',
  'Ngboris.directives',
  'Ngboris.controllers',
  'Ngboris.templates'
]);

angular.module('Ngboris').run(function ($rootScope, $state) {
});

//= require_tree models
//= require_tree services
//= require_tree directives
//= require_tree filters
//= require_tree config
//= require_tree states
