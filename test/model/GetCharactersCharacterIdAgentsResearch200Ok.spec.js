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
    describe('GetCharactersCharacterIdAgentsResearch200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdAgentsResearch200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdAgentsResearch200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdAgentsResearch200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdAgentsResearch200Ok);
      });

      it('should have the property agentId (base name: "agent_id")', function() {
        // TODO: update the code to test the property agentId
        expect(instance).to.have.property('agentId');
        // expect(instance.agentId).to.be(expectedValueLiteral);
      });

      it('should have the property pointsPerDay (base name: "points_per_day")', function() {
        // TODO: update the code to test the property pointsPerDay
        expect(instance).to.have.property('pointsPerDay');
        // expect(instance.pointsPerDay).to.be(expectedValueLiteral);
      });

      it('should have the property remainderPoints (base name: "remainder_points")', function() {
        // TODO: update the code to test the property remainderPoints
        expect(instance).to.have.property('remainderPoints');
        // expect(instance.remainderPoints).to.be(expectedValueLiteral);
      });

      it('should have the property skillTypeId (base name: "skill_type_id")', function() {
        // TODO: update the code to test the property skillTypeId
        expect(instance).to.have.property('skillTypeId');
        // expect(instance.skillTypeId).to.be(expectedValueLiteral);
      });

      it('should have the property startedAt (base name: "started_at")', function() {
        // TODO: update the code to test the property startedAt
        expect(instance).to.have.property('startedAt');
        // expect(instance.startedAt).to.be(expectedValueLiteral);
      });

    });
  });

}));
