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
    describe('GetSovereigntyCampaigns200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetSovereigntyCampaigns200Ok();
      });

      it('should create an instance of GetSovereigntyCampaigns200Ok', function() {
        // TODO: update the code to test GetSovereigntyCampaigns200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetSovereigntyCampaigns200Ok);
      });

      it('should have the property attackersScore (base name: "attackers_score")', function() {
        // TODO: update the code to test the property attackersScore
        expect(instance).to.have.property('attackersScore');
        // expect(instance.attackersScore).to.be(expectedValueLiteral);
      });

      it('should have the property campaignId (base name: "campaign_id")', function() {
        // TODO: update the code to test the property campaignId
        expect(instance).to.have.property('campaignId');
        // expect(instance.campaignId).to.be(expectedValueLiteral);
      });

      it('should have the property constellationId (base name: "constellation_id")', function() {
        // TODO: update the code to test the property constellationId
        expect(instance).to.have.property('constellationId');
        // expect(instance.constellationId).to.be(expectedValueLiteral);
      });

      it('should have the property defenderId (base name: "defender_id")', function() {
        // TODO: update the code to test the property defenderId
        expect(instance).to.have.property('defenderId');
        // expect(instance.defenderId).to.be(expectedValueLiteral);
      });

      it('should have the property defenderScore (base name: "defender_score")', function() {
        // TODO: update the code to test the property defenderScore
        expect(instance).to.have.property('defenderScore');
        // expect(instance.defenderScore).to.be(expectedValueLiteral);
      });

      it('should have the property eventType (base name: "event_type")', function() {
        // TODO: update the code to test the property eventType
        expect(instance).to.have.property('eventType');
        // expect(instance.eventType).to.be(expectedValueLiteral);
      });

      it('should have the property participants (base name: "participants")', function() {
        // TODO: update the code to test the property participants
        expect(instance).to.have.property('participants');
        // expect(instance.participants).to.be(expectedValueLiteral);
      });

      it('should have the property solarSystemId (base name: "solar_system_id")', function() {
        // TODO: update the code to test the property solarSystemId
        expect(instance).to.have.property('solarSystemId');
        // expect(instance.solarSystemId).to.be(expectedValueLiteral);
      });

      it('should have the property startTime (base name: "start_time")', function() {
        // TODO: update the code to test the property startTime
        expect(instance).to.have.property('startTime');
        // expect(instance.startTime).to.be(expectedValueLiteral);
      });

      it('should have the property structureId (base name: "structure_id")', function() {
        // TODO: update the code to test the property structureId
        expect(instance).to.have.property('structureId');
        // expect(instance.structureId).to.be(expectedValueLiteral);
      });

    });
  });

}));
