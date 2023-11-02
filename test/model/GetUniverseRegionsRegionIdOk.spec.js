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
    describe('GetUniverseRegionsRegionIdOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetUniverseRegionsRegionIdOk();
      });

      it('should create an instance of GetUniverseRegionsRegionIdOk', function() {
        // TODO: update the code to test GetUniverseRegionsRegionIdOk
        expect(instance).to.be.a(EveSwaggerInterface.GetUniverseRegionsRegionIdOk);
      });

      it('should have the property constellations (base name: "constellations")', function() {
        // TODO: update the code to test the property constellations
        expect(instance).to.have.property('constellations');
        // expect(instance.constellations).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property regionId (base name: "region_id")', function() {
        // TODO: update the code to test the property regionId
        expect(instance).to.have.property('regionId');
        // expect(instance.regionId).to.be(expectedValueLiteral);
      });

    });
  });

}));
