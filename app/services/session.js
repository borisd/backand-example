class Session {
  constructor ($cookieStore) {
    this.$cookieStore = $cookieStore;
    this.auth = $cookieStore.get('backand_token');
  }

  login(_auth) {
    this.auth = _auth;
  }

  logout() {
    this.auth = null;
    $cookieStore.remote('backand_token');
  }

  loggedIn() {
    return (this.auth !== null);
  }

}

angular.module('Ngboris.services').service('Session', Session);
