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
    describe('GetSovereigntyStructures200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetSovereigntyStructures200Ok();
      });

      it('should create an instance of GetSovereigntyStructures200Ok', function() {
        // TODO: update the code to test GetSovereigntyStructures200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetSovereigntyStructures200Ok);
      });

      it('should have the property allianceId (base name: "alliance_id")', function() {
        // TODO: update the code to test the property allianceId
        expect(instance).to.have.property('allianceId');
        // expect(instance.allianceId).to.be(expectedValueLiteral);
      });

      it('should have the property solarSystemId (base name: "solar_system_id")', function() {
        // TODO: update the code to test the property solarSystemId
        expect(instance).to.have.property('solarSystemId');
        // expect(instance.solarSystemId).to.be(expectedValueLiteral);
      });

      it('should have the property structureId (base name: "structure_id")', function() {
        // TODO: update the code to test the property structureId
        expect(instance).to.have.property('structureId');
        // expect(instance.structureId).to.be(expectedValueLiteral);
      });

      it('should have the property structureTypeId (base name: "structure_type_id")', function() {
        // TODO: update the code to test the property structureTypeId
        expect(instance).to.have.property('structureTypeId');
        // expect(instance.structureTypeId).to.be(expectedValueLiteral);
      });

      it('should have the property vulnerabilityOccupancyLevel (base name: "vulnerability_occupancy_level")', function() {
        // TODO: update the code to test the property vulnerabilityOccupancyLevel
        expect(instance).to.have.property('vulnerabilityOccupancyLevel');
        // expect(instance.vulnerabilityOccupancyLevel).to.be(expectedValueLiteral);
      });

      it('should have the property vulnerableEndTime (base name: "vulnerable_end_time")', function() {
        // TODO: update the code to test the property vulnerableEndTime
        expect(instance).to.have.property('vulnerableEndTime');
        // expect(instance.vulnerableEndTime).to.be(expectedValueLiteral);
      });

      it('should have the property vulnerableStartTime (base name: "vulnerable_start_time")', function() {
        // TODO: update the code to test the property vulnerableStartTime
        expect(instance).to.have.property('vulnerableStartTime');
        // expect(instance.vulnerableStartTime).to.be(expectedValueLiteral);
      });

    });
  });

}));
