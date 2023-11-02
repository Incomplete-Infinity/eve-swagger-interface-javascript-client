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
    describe('GetCorporationsCorporationIdAssets200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationsCorporationIdAssets200Ok();
      });

      it('should create an instance of GetCorporationsCorporationIdAssets200Ok', function() {
        // TODO: update the code to test GetCorporationsCorporationIdAssets200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdAssets200Ok);
      });

      it('should have the property isBlueprintCopy (base name: "is_blueprint_copy")', function() {
        // TODO: update the code to test the property isBlueprintCopy
        expect(instance).to.have.property('isBlueprintCopy');
        // expect(instance.isBlueprintCopy).to.be(expectedValueLiteral);
      });

      it('should have the property isSingleton (base name: "is_singleton")', function() {
        // TODO: update the code to test the property isSingleton
        expect(instance).to.have.property('isSingleton');
        // expect(instance.isSingleton).to.be(expectedValueLiteral);
      });

      it('should have the property itemId (base name: "item_id")', function() {
        // TODO: update the code to test the property itemId
        expect(instance).to.have.property('itemId');
        // expect(instance.itemId).to.be(expectedValueLiteral);
      });

      it('should have the property locationFlag (base name: "location_flag")', function() {
        // TODO: update the code to test the property locationFlag
        expect(instance).to.have.property('locationFlag');
        // expect(instance.locationFlag).to.be(expectedValueLiteral);
      });

      it('should have the property locationId (base name: "location_id")', function() {
        // TODO: update the code to test the property locationId
        expect(instance).to.have.property('locationId');
        // expect(instance.locationId).to.be(expectedValueLiteral);
      });

      it('should have the property locationType (base name: "location_type")', function() {
        // TODO: update the code to test the property locationType
        expect(instance).to.have.property('locationType');
        // expect(instance.locationType).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property typeId (base name: "type_id")', function() {
        // TODO: update the code to test the property typeId
        expect(instance).to.have.property('typeId');
        // expect(instance.typeId).to.be(expectedValueLiteral);
      });

    });
  });

}));
