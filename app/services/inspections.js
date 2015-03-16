class Inspections {
  constructor ($http, Backand) {
    this.$http = $http;
    this.Backand = Backand;
  }

  list() {
    return $http({
      method: 'GET',
      url: Backand.configuration.apiUrl + '/1/table/data/' + 'inspections',
      params: {
        pageSize: 100,
        pageNumber: 1,
        filter: '',
        sort: ''
      }
    })
      .then( function(data) { return data.data } );
  }
}

angular.module('Ngboris.services').service('Inspections', Inspections);
