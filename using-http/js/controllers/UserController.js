function UserController(UserService) {
    var ctrl = this;
    var API = '//jsonplaceholder.typicode.com/users/';
    this.userId = '';
    this.chosenUser = {};
    this.getUser = () => {
        if(!this.userId) {
            return;
        }
        UserService
            .getUser(this.userId)
            .then(response => {
                ctrl.chosenUser = response;
            }) 
    };
}

UserController.$inject = ['UserService'];

angular
    .module('app')
    .controller('UserController', UserController);
