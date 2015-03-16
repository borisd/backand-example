class LoginController {
  constructor ($state, Backand, Session) {
    this.Backand = Backand;
    this.Session = Session;
    this.$state = $state;

    if (Session.loggedIn())
      $state.go('home');
  }

  signIn() {
    let vm = this;

    this.Backand.signin(this.username, this.password, this.appName)
      .then(
        (token) => vm.Session.login(token)
      ,
        (error) => alert("Cannot login")
      );
  }

  cancel() {
    this.$state.go('home');
  }
}

angular.module('Ngboris.controllers').controller('LoginController', LoginController);


   
