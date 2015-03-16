class LoginController {
  constructor ($state, Backand, Session) {
    this.Backand = Backand;
    this.Session = Session;

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
}

angular.module('Ngboris.controllers').controller('LoginController', LoginController);


   
