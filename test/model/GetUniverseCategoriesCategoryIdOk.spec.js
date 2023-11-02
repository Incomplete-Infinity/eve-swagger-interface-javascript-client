/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.19
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.33
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetUniverseCategoriesCategoryIdOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetUniverseCategoriesCategoryIdOk();
      });

      it('should create an instance of GetUniverseCategoriesCategoryIdOk', function() {
        // TODO: update the code to test GetUniverseCategoriesCategoryIdOk
        expect(instance).to.be.a(EveSwaggerInterface.GetUniverseCategoriesCategoryIdOk);
      });

      it('should have the property categoryId (base name: "category_id")', function() {
        // TODO: update the code to test the property categoryId
        expect(instance).to.have.property('categoryId');
        // expect(instance.categoryId).to.be(expectedValueLiteral);
      });

      it('should have the property groups (base name: "groups")', function() {
        // TODO: update the code to test the property groups
        expect(instance).to.have.property('groups');
        // expect(instance.groups).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property published (base name: "published")', function() {
        // TODO: update the code to test the property published
        expect(instance).to.have.property('published');
        // expect(instance.published).to.be(expectedValueLiteral);
      });

    });
  });

}));
