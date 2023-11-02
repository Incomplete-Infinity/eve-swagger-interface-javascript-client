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
    describe('PostFleetsFleetIdWingsCreated', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.PostFleetsFleetIdWingsCreated();
      });

      it('should create an instance of PostFleetsFleetIdWingsCreated', function() {
        // TODO: update the code to test PostFleetsFleetIdWingsCreated
        expect(instance).to.be.a(EveSwaggerInterface.PostFleetsFleetIdWingsCreated);
      });

      it('should have the property wingId (base name: "wing_id")', function() {
        // TODO: update the code to test the property wingId
        expect(instance).to.have.property('wingId');
        // expect(instance.wingId).to.be(expectedValueLiteral);
      });

    });
  });

}));
