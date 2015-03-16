class InspectionsController {
  constructor (Inspections) {
    this.Inspections = Inspections;

    Inspections.list()
      .then(
        (inspections) => this.inspections = inspections
        , 
        (error) => console.log("Can't load: `error`")
      );
  }

  add() {
    let vm = this;

    vm.Inspections.add(this.name, this.desc)
      .then(
        (data) => {
          vm.inspections.data.push(data);
          vm.showAdd = false;
          vm.name = '';
          vm.desc = '';
        }
      )
  }
}

angular.module('Ngboris.controllers').controller('InspectionsController', InspectionsController);
