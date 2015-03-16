class HomeController {

  constructor ($scope, $interval, Session) {
    var Home = this;
    this.Session = Session;
  }

  loggedIn() {
    return this.Session.loggedIn();
  }

  logout() {
    this.Session.logout();
  }

}

angular.module('Ngboris.controllers').controller('HomeController', HomeController);
