function UserService($http) {
    var API = '//jsonplaceholder.typicode.com/users/';
    this.getUser = (userId) => {
        return $http
            .get(API + userId)
            .then(response => {
                return response.data;
            }, reason => {
                //error
            })
   };

   this.getAllUsers = () => {

   };
}

UserService.$inject = ['$http'];

angular
    .module('app')
    .service('UserService', UserService);