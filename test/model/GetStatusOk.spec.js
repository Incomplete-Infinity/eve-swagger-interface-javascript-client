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
    describe('GetStatusOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetStatusOk();
      });

      it('should create an instance of GetStatusOk', function() {
        // TODO: update the code to test GetStatusOk
        expect(instance).to.be.a(EveSwaggerInterface.GetStatusOk);
      });

      it('should have the property players (base name: "players")', function() {
        // TODO: update the code to test the property players
        expect(instance).to.have.property('players');
        // expect(instance.players).to.be(expectedValueLiteral);
      });

      it('should have the property serverVersion (base name: "server_version")', function() {
        // TODO: update the code to test the property serverVersion
        expect(instance).to.have.property('serverVersion');
        // expect(instance.serverVersion).to.be(expectedValueLiteral);
      });

      it('should have the property startTime (base name: "start_time")', function() {
        // TODO: update the code to test the property startTime
        expect(instance).to.have.property('startTime');
        // expect(instance.startTime).to.be(expectedValueLiteral);
      });

      it('should have the property vip (base name: "vip")', function() {
        // TODO: update the code to test the property vip
        expect(instance).to.have.property('vip');
        // expect(instance.vip).to.be(expectedValueLiteral);
      });

    });
  });

}));
