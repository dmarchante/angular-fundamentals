function UserService($http) {
    var API = '//jsonplaceholder.typicode.com/users/';
    getUser = (userId) => {
        return $http
            .get(API + userId)
            .then(response => {
                return response.data;
            }, reason => {
                //error
            });
    
    };

    getAllUsers = () => {

    };

    return {
        getUser: getUser,
        getAllUsers: getAllUsers
    };
}

UserFactory.$inject = ['$http'];

angular
    .module('app')
    .factory('UserService', UserService);