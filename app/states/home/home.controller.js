class HomeController {

  constructor ($scope, $interval, Session) {
    var Home = this;
    this.Session = Session;
  }

  loggedIn() {
    return this.Session.loggedIn();
  }

}

angular.module('Ngboris.controllers').controller('HomeController', HomeController);
