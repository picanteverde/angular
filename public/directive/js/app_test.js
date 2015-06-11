describe('Controller: NewController', function() {
	var ctrl, persons;
	beforeEach(module('firstApp'));

	beforeEach(inject(function($controller) {
		persons = [{
					"name": "Alejandro",
					"city": "Cordoba"
				}];

		ctrl = $controller('NewController', {
			personService: {
				persons: persons
			}
		});
	}));

	it('should add items to the service array', function() {
		ctrl.addName({
			"name": "Mauricio",
			"city": "San Luis"
		});
		expect(persons.length).toEqual(2);
	});
});
