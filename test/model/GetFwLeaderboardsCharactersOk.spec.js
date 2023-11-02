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
    describe('GetFwLeaderboardsCharactersOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetFwLeaderboardsCharactersOk();
      });

      it('should create an instance of GetFwLeaderboardsCharactersOk', function() {
        // TODO: update the code to test GetFwLeaderboardsCharactersOk
        expect(instance).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCharactersOk);
      });

      it('should have the property kills (base name: "kills")', function() {
        // TODO: update the code to test the property kills
        expect(instance).to.have.property('kills');
        // expect(instance.kills).to.be(expectedValueLiteral);
      });

      it('should have the property victoryPoints (base name: "victory_points")', function() {
        // TODO: update the code to test the property victoryPoints
        expect(instance).to.have.property('victoryPoints');
        // expect(instance.victoryPoints).to.be(expectedValueLiteral);
      });

    });
  });

}));
