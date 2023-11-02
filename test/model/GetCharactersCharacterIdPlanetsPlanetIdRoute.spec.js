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
    describe('GetCharactersCharacterIdPlanetsPlanetIdRoute', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdRoute();
      });

      it('should create an instance of GetCharactersCharacterIdPlanetsPlanetIdRoute', function() {
        // TODO: update the code to test GetCharactersCharacterIdPlanetsPlanetIdRoute
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdRoute);
      });

      it('should have the property contentTypeId (base name: "content_type_id")', function() {
        // TODO: update the code to test the property contentTypeId
        expect(instance).to.have.property('contentTypeId');
        // expect(instance.contentTypeId).to.be(expectedValueLiteral);
      });

      it('should have the property destinationPinId (base name: "destination_pin_id")', function() {
        // TODO: update the code to test the property destinationPinId
        expect(instance).to.have.property('destinationPinId');
        // expect(instance.destinationPinId).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property routeId (base name: "route_id")', function() {
        // TODO: update the code to test the property routeId
        expect(instance).to.have.property('routeId');
        // expect(instance.routeId).to.be(expectedValueLiteral);
      });

      it('should have the property sourcePinId (base name: "source_pin_id")', function() {
        // TODO: update the code to test the property sourcePinId
        expect(instance).to.have.property('sourcePinId');
        // expect(instance.sourcePinId).to.be(expectedValueLiteral);
      });

      it('should have the property waypoints (base name: "waypoints")', function() {
        // TODO: update the code to test the property waypoints
        expect(instance).to.have.property('waypoints');
        // expect(instance.waypoints).to.be(expectedValueLiteral);
      });

    });
  });

}));
