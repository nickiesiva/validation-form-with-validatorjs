(function(validatorjs) {
    'use strict';

    angular.module('registration')
        .factory('registrationValidator', registrationValidator);

    registrationValidator.$inject = [];

    function registrationValidator() {
        var service = {};

        service.validate = validate;

        // validator = validatorjs;

        return service;

        function validate(formData) {
            var result = {};

            console.log(formData);

            var data = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                city: formData.city,
                username: formData.username,
                password: formData.password,
                password_confirmation: formData.password_confirmation,
                email: formData.email,
            };

            var rules = {
                firstName: 'required|min:3',
                lastName: 'required',
                city: 'required_if:city_req,isi|min:4',
                username: 'required|min:5',
                password: 'required',
                password_confirmation: 'required|confirmed',
                email: 'required|email', 
            };

            var errorMessages = {
                required: "Don't let :attribute empty.",
                min: {
                    string: "The :attribute is too short. Minimum length is :min."
                },
                email: "This is not valid :attribute format.",
                confirmed: "The :attribute don't match.",
            };

            var validation = new validatorjs(data, rules, errorMessages);

            result.valid = validation.passes();
            result.messages = validation.errors.all();

            return result;
        }
    }
})(Validator);
