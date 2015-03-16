class InspectionsController {
  constructor ($http, Inspections) {

    Inspections.list()
      .then(
        (inspections) => this.inspections = inspections
        , 
        (error) => console.log("Can't load: `error`")
      );
  }
}

angular.module('Ngboris.controllers').controller('InspectionsController', InspectionsController);
