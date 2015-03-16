class Session {
  constructor ($cookieStore, $state, Backand) {
    this.$cookieStore = $cookieStore;
    this.$state = $state;
    this.Backand = Backand;

    this.auth = $cookieStore.get(this.Backand.configuration.tokenName);
  }

  login(_auth) {
    this.auth = _auth;
    this.$cookieStore.put(this.Backand.configuration.tokenName, _auth);
    this.$state.go('home');
  }

  logout() {
    this.auth = null;
    this.$cookieStore.remove(this.Backand.configuration.tokenName);
    this.$state.go('home');
  }

  loggedIn() {
    return (typeof(this.auth) === "string");
  }

}

angular.module('Ngboris.services').service('Session', Session);
