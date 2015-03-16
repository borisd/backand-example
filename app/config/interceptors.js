angular.module('Ngboris').config(function ($httpProvider) {

  $httpProvider.interceptors.push(function($cookieStore) {
    return {
      'request': function(config) {
        config.headers['Authorization'] = $cookieStore.get('backand_token');
        return config;
      }

    };
  });

});
