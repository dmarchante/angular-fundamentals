function CounterController() {
    this.increment = () => {
      this.count++;
    }
    this.decrement = () => {
      this.count--;
    }
  }
  
  angular
    .module('app')
    .controller('CounterController', CounterController);