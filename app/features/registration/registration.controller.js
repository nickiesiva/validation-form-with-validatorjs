(function() {
    'use strict';

    angular.module('registration')
        .controller('registrationController', registrationController);

    registrationController.$inject = ['registrationValidator'];

    function registrationController(registrationValidator) {
        var vm = this;

        vm.welcome = "hi, this is from controller.";
        vm.salam = registrationValidator.salam('aku dari factory dulu lhoo'); 
    }

})();
