(function() {
    'use strict';

    angular.module('registration')
        .controller('registrationController', registrationController);

    registrationController.$inject = ['$scope', 'registrationValidator'];

    function registrationController($scope, registrationValidator) {
        var vm = this;

        vm.submit = submit;
        vm.formData = {};
        vm.messages = {};

        function submit() {
            var validation = registrationValidator.validate(vm.formData);
            vm.messages = validation.messages;

            if (validation.valid) {
                console.log("hore lolos validasi");
            } else {
                console.log(validation.messages);
            }
        }
    }

})();
