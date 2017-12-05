function AboutController() {
    this.viewName = 'about view!';
}

AboutController.$inject = [];

angular
    .module('app')
    .controller('AboutController', AboutController);