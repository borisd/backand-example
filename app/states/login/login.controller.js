class LoginController {
  constructor (Backand, $cookieStore) {
    this.message = 'Hello from LoginController';
    this.Backand = Backand;
    this.$cookieStore = $cookieStore;
    this.appName = 'ngboris';
  }

  signIn() {
    let vm = this;

    console.log("Login..");

    this.Backand.signin(this.username, this.password, this.appName)
      .then((token) => {
          vm.$cookieStore.put(vm.Backand.configuration.tokenName, token);
          console.log("Logged in");
        },
        function (data, status, headers, config) {
          alert("Error");
        }
      );
  }
}

angular.module('Ngboris.controllers').controller('LoginController', LoginController);


   
