class ChecksController {
  constructor ($state, $stateParams, Checks) {
    this.$state = $state;
    this.inspectionId = $stateParams.id;
    this.Checks = Checks;
    
    Checks.list(this.inspectionId)
      .then(
        (checks) => this.checks = checks
        ,
        (error)  => console.log("Can't load checks: `error`")
      );
  }

  toggle(check) {
    check.done = !check.done;
    this.Checks.toggle(check.Id, check.done)
      .then(
        (data) => console.log("Saved")
        ,
        (error) => console.log("Failed")
      )
  }

  back() {
    this.$state.go('inspections');
  }

  add() {
    let vm = this;

    if (!this.name)
      return;

    vm.Checks.add(this.name, this.comment, this.done, this.inspectionId)
      .then(
        (data) => {
          vm.checks.data.push(data);
          vm.showAdd = false;
          vm.name = '';
          vm.comment = '';
        }
      )
  }
}

angular.module('Ngboris.controllers').controller('ChecksController', ChecksController);
