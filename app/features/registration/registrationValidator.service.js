(function(validator) {
    'use strict';

    angular.module('registration')
        .factory('registrationValidator', registrationValidator);

    registrationValidator.$inject = [];

    function registrationValidator() {
        var service = {};

        service.validator = validator;
        service.salam = salam;

        return service;

        function salam(string) {
            var hai = string;
            return hai;
        }
    }
})(Validator);
