(function () {
  'use strict';

  describe('Recipe App', function () {
    describe('cookbook Controller', function () {
      var mock = jasmine.createSpyObj('recipeService', ['what']);
      mock.what.and.returnValue(true);

      beforeEach(module('myCookBookController', function($provide) {
          $provide.value('recipeService', mock);
      }));

      var $controller;

      beforeEach(inject(function(_$controller_) {
          $controller = _$controller_;
      }));


      it('Yup', function() {
          var controller = $controller('myCookBookController');
          expect(controller.what).toBe(true);
      });



    });
  });
})();
