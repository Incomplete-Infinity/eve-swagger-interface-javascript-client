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
    describe('GetCharactersCharacterIdCalendar200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdCalendar200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdCalendar200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok);
      });

      it('should have the property eventDate (base name: "event_date")', function() {
        // TODO: update the code to test the property eventDate
        expect(instance).to.have.property('eventDate');
        // expect(instance.eventDate).to.be(expectedValueLiteral);
      });

      it('should have the property eventId (base name: "event_id")', function() {
        // TODO: update the code to test the property eventId
        expect(instance).to.have.property('eventId');
        // expect(instance.eventId).to.be(expectedValueLiteral);
      });

      it('should have the property eventResponse (base name: "event_response")', function() {
        // TODO: update the code to test the property eventResponse
        expect(instance).to.have.property('eventResponse');
        // expect(instance.eventResponse).to.be(expectedValueLiteral);
      });

      it('should have the property importance (base name: "importance")', function() {
        // TODO: update the code to test the property importance
        expect(instance).to.have.property('importance');
        // expect(instance.importance).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

    });
  });

}));
