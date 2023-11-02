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
    describe('GetCorporationCorporationIdMiningExtractions200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationCorporationIdMiningExtractions200Ok();
      });

      it('should create an instance of GetCorporationCorporationIdMiningExtractions200Ok', function() {
        // TODO: update the code to test GetCorporationCorporationIdMiningExtractions200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationCorporationIdMiningExtractions200Ok);
      });

      it('should have the property chunkArrivalTime (base name: "chunk_arrival_time")', function() {
        // TODO: update the code to test the property chunkArrivalTime
        expect(instance).to.have.property('chunkArrivalTime');
        // expect(instance.chunkArrivalTime).to.be(expectedValueLiteral);
      });

      it('should have the property extractionStartTime (base name: "extraction_start_time")', function() {
        // TODO: update the code to test the property extractionStartTime
        expect(instance).to.have.property('extractionStartTime');
        // expect(instance.extractionStartTime).to.be(expectedValueLiteral);
      });

      it('should have the property moonId (base name: "moon_id")', function() {
        // TODO: update the code to test the property moonId
        expect(instance).to.have.property('moonId');
        // expect(instance.moonId).to.be(expectedValueLiteral);
      });

      it('should have the property naturalDecayTime (base name: "natural_decay_time")', function() {
        // TODO: update the code to test the property naturalDecayTime
        expect(instance).to.have.property('naturalDecayTime');
        // expect(instance.naturalDecayTime).to.be(expectedValueLiteral);
      });

      it('should have the property structureId (base name: "structure_id")', function() {
        // TODO: update the code to test the property structureId
        expect(instance).to.have.property('structureId');
        // expect(instance.structureId).to.be(expectedValueLiteral);
      });

    });
  });

}));
