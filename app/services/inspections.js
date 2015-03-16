class Inspections {
  constructor ($http, Backand) {
    this.$http = $http;
    this.Backand = Backand;
  }

  list() {
    return this.$http({
      method: 'GET',
      url: this.Backand.configuration.apiUrl + '/1/table/data/' + 'inspection',
      params: {
        pageSize: 100,
        pageNumber: 1,
        filter: '',
        sort: ''
      }
    })
      .then( function(data) { return data.data } );
  }

  add(name, desc) {
    return this.$http({
      method: 'POST',
      url: this.Backand.configuration.apiUrl + '/1/table/data/' + 'inspection',
      params: {
        name: name,
        description: desc
      }
    })
  }
}

angular.module('Ngboris.services').service('Inspections', Inspections);
