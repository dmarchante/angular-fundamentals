function stretch() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
            var element = $element[0];
            element.addEventListener('focus', function () {
                this.style.width = '250px';
            });
            element.addEventListener('blur', function () {
                this.style.width = '120px';
            });
        }
    };
}

//stretch.$inject = ['stretch'];

angular
    .module('app')
    // stretch
    .directive('stretch', stretch);
    // my-stretch
    //.directive('myStretch', stretch);