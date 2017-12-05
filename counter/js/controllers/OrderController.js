function OrderController() {
    this.customerOrder = {
        name: '',
        email: '',
        location: '',
        product: {
            label: '',
            id: ''
        },
        comments: ''
    };

    this.submitOrder = () => {
        // communicate with API
        console.log('Submitted!', this.customerOrder);
    };
}

OrderController.$inject = [];
  
angular
    .module('app')
    .controller('OrderController', OrderController);
