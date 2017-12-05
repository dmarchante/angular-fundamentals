function MainController() {
    this.myAmount = 2.50;
    this.myDate = 1288323623006;
    this.myArray = ['my', 'angular', 'app'];
    this.title = 'Hello World!';
    this.myObject = {
        one: 'Key 1',
        two: 'Key 2'
    };
}

MainController.$inject = [];

angular
    .module('app')
    .controller('MainController', MainController);