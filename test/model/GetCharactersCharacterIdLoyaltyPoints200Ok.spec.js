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
    describe('GetCharactersCharacterIdLoyaltyPoints200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdLoyaltyPoints200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdLoyaltyPoints200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdLoyaltyPoints200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdLoyaltyPoints200Ok);
      });

      it('should have the property corporationId (base name: "corporation_id")', function() {
        // TODO: update the code to test the property corporationId
        expect(instance).to.have.property('corporationId');
        // expect(instance.corporationId).to.be(expectedValueLiteral);
      });

      it('should have the property loyaltyPoints (base name: "loyalty_points")', function() {
        // TODO: update the code to test the property loyaltyPoints
        expect(instance).to.have.property('loyaltyPoints');
        // expect(instance.loyaltyPoints).to.be(expectedValueLiteral);
      });

    });
  });

}));
