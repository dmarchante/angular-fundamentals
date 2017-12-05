function HomeController() {
    this.viewName = 'home view!'; 
}

HomeController.$inject = [];

angular
    .module('app')
    .controller('HomeController', HomeController);