class Checks {
  constructor ($http, Backand) {
    this.$http = $http;
    this.Backand = Backand;
  }

  list(inspectionId) {
    return this.$http({
      method: 'GET',
      url: this.Backand.configuration.apiUrl + '/1/table/data/' + 'check',
      params: {
        pageSize: 100,
        pageNumber: 1,
        filter: JSON.stringify([
          {
            fieldName: 'inspection_id',
            operator: 'in',
            value: inspectionId
          }
        ]),
        sort: ''
      }
    })
      .then( function(data) { return data.data } );
  }

  add(name, comment, done, inspectionId) {
    return this.$http.post(
      this.Backand.configuration.apiUrl + '/1/table/data/' + 'check/{id}?returnObject=true',
      {
        name: name,
        comment: comment,
        done: done,
        inspection_id: inspectionId
      }
    ).then( (data) => { return data.data } )
  }

  toggle(id, done = true) {
    return this.$http.put(
      this.Backand.configuration.apiUrl + '/1/table/data/' + 'check/' + id,
      { done: done }
    ).then( (data) => { return data.data } )
  }}

angular.module('Ngboris.services').service('Checks', Checks);
