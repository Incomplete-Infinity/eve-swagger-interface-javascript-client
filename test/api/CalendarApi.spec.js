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

  beforeEach(function() {
    instance = new EveSwaggerInterface.CalendarApi();
  });

  describe('(package)', function() {
    describe('CalendarApi', function() {
      describe('getCharactersCharacterIdCalendar', function() {
        it('should call getCharactersCharacterIdCalendar successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdCalendar call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.fromEvent = 56;
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdCalendar(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok);
              expect(data.eventDate).to.be.a(Date);
              expect(data.eventDate).to.be(new Date());
              expect(data.eventId).to.be.a('number');
              expect(data.eventId).to.be(0);
              expect(data.eventResponse).to.be.a('string');
              expect(data.eventResponse).to.be("declined");
              expect(data.importance).to.be.a('number');
              expect(data.importance).to.be(0);
              expect(data.title).to.be.a('string');
              expect(data.title).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdCalendarEventId', function() {
        it('should call getCharactersCharacterIdCalendarEventId successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdCalendarEventId call and complete the assertions
          /*
          var characterId = 56;
          var eventId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdCalendarEventId(characterId, eventId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdCalendarEventIdOk);
            expect(data._date).to.be.a(Date);
            expect(data._date).to.be(new Date());
            expect(data.duration).to.be.a('number');
            expect(data.duration).to.be(0);
            expect(data.eventId).to.be.a('number');
            expect(data.eventId).to.be(0);
            expect(data.importance).to.be.a('number');
            expect(data.importance).to.be(0);
            expect(data.ownerId).to.be.a('number');
            expect(data.ownerId).to.be(0);
            expect(data.ownerName).to.be.a('string');
            expect(data.ownerName).to.be("");
            expect(data.ownerType).to.be.a('string');
            expect(data.ownerType).to.be("eve_server");
            expect(data.response).to.be.a('string');
            expect(data.response).to.be("");
            expect(data.text).to.be.a('string');
            expect(data.text).to.be("");
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdCalendarEventIdAttendees', function() {
        it('should call getCharactersCharacterIdCalendarEventIdAttendees successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdCalendarEventIdAttendees call and complete the assertions
          /*
          var characterId = 56;
          var eventId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdCalendarEventIdAttendees(characterId, eventId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdCalendarEventIdAttendees200Ok);
              expect(data.characterId).to.be.a('number');
              expect(data.characterId).to.be(0);
              expect(data.eventResponse).to.be.a('string');
              expect(data.eventResponse).to.be("declined");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putCharactersCharacterIdCalendarEventId', function() {
        it('should call putCharactersCharacterIdCalendarEventId successfully', function(done) {
          // TODO: uncomment, update parameter values for putCharactersCharacterIdCalendarEventId call
          /*
          var characterId = 56;
          var eventId = 56;
          var response = new EveSwaggerInterface.PutCharactersCharacterIdCalendarEventIdResponse();
          response.response = "accepted";
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.putCharactersCharacterIdCalendarEventId(characterId, eventId, response, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
