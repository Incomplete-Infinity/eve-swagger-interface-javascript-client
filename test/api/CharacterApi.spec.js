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
    instance = new EveSwaggerInterface.CharacterApi();
  });

  describe('(package)', function() {
    describe('CharacterApi', function() {
      describe('getCharactersCharacterId', function() {
        it('should call getCharactersCharacterId successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterId call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getCharactersCharacterId(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdOk);
            expect(data.allianceId).to.be.a('number');
            expect(data.allianceId).to.be(0);
            expect(data.birthday).to.be.a(Date);
            expect(data.birthday).to.be(new Date());
            expect(data.bloodlineId).to.be.a('number');
            expect(data.bloodlineId).to.be(0);
            expect(data.corporationId).to.be.a('number');
            expect(data.corporationId).to.be(0);
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.factionId).to.be.a('number');
            expect(data.factionId).to.be(0);
            expect(data.gender).to.be.a('string');
            expect(data.gender).to.be("female");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.raceId).to.be.a('number');
            expect(data.raceId).to.be(0);
            expect(data.securityStatus).to.be.a('number');
            expect(data.securityStatus).to.be(0.0);
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdAgentsResearch', function() {
        it('should call getCharactersCharacterIdAgentsResearch successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdAgentsResearch call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdAgentsResearch(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdAgentsResearch200Ok);
              expect(data.agentId).to.be.a('number');
              expect(data.agentId).to.be(0);
              expect(data.pointsPerDay).to.be.a('number');
              expect(data.pointsPerDay).to.be(0.0);
              expect(data.remainderPoints).to.be.a('number');
              expect(data.remainderPoints).to.be(0.0);
              expect(data.skillTypeId).to.be.a('number');
              expect(data.skillTypeId).to.be(0);
              expect(data.startedAt).to.be.a(Date);
              expect(data.startedAt).to.be(new Date());
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdBlueprints', function() {
        it('should call getCharactersCharacterIdBlueprints successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdBlueprints call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCharactersCharacterIdBlueprints(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdBlueprints200Ok);
              expect(data.itemId).to.be.a('number');
              expect(data.itemId).to.be("0");
              expect(data.locationFlag).to.be.a('string');
              expect(data.locationFlag).to.be("AutoFit");
              expect(data.locationId).to.be.a('number');
              expect(data.locationId).to.be("0");
              expect(data.materialEfficiency).to.be.a('number');
              expect(data.materialEfficiency).to.be(0);
              expect(data.quantity).to.be.a('number');
              expect(data.quantity).to.be(0);
              expect(data.runs).to.be.a('number');
              expect(data.runs).to.be(0);
              expect(data.timeEfficiency).to.be.a('number');
              expect(data.timeEfficiency).to.be(0);
              expect(data.typeId).to.be.a('number');
              expect(data.typeId).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdCorporationhistory', function() {
        it('should call getCharactersCharacterIdCorporationhistory successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdCorporationhistory call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getCharactersCharacterIdCorporationhistory(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdCorporationhistory200Ok);
              expect(data.corporationId).to.be.a('number');
              expect(data.corporationId).to.be(0);
              expect(data.isDeleted).to.be.a('boolean');
              expect(data.isDeleted).to.be(false);
              expect(data.recordId).to.be.a('number');
              expect(data.recordId).to.be(0);
              expect(data.startDate).to.be.a(Date);
              expect(data.startDate).to.be(new Date());
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdFatigue', function() {
        it('should call getCharactersCharacterIdFatigue successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdFatigue call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdFatigue(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdFatigueOk);
            expect(data.jumpFatigueExpireDate).to.be.a(Date);
            expect(data.jumpFatigueExpireDate).to.be(new Date());
            expect(data.lastJumpDate).to.be.a(Date);
            expect(data.lastJumpDate).to.be(new Date());
            expect(data.lastUpdateDate).to.be.a(Date);
            expect(data.lastUpdateDate).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdMedals', function() {
        it('should call getCharactersCharacterIdMedals successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdMedals call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdMedals(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok);
              expect(data.corporationId).to.be.a('number');
              expect(data.corporationId).to.be(0);
              expect(data._date).to.be.a(Date);
              expect(data._date).to.be(new Date());
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              {
                let dataCtr = data.graphics;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdMedalsGraphic);
                  expect(data.color).to.be.a('number');
                  expect(data.color).to.be(0);
                  expect(data.graphic).to.be.a('string');
                  expect(data.graphic).to.be("");
                  expect(data.layer).to.be.a('number');
                  expect(data.layer).to.be(0);
                  expect(data.part).to.be.a('number');
                  expect(data.part).to.be(0);
  
                        }
              }
              expect(data.issuerId).to.be.a('number');
              expect(data.issuerId).to.be(0);
              expect(data.medalId).to.be.a('number');
              expect(data.medalId).to.be(0);
              expect(data.reason).to.be.a('string');
              expect(data.reason).to.be("");
              expect(data.status).to.be.a('string');
              expect(data.status).to.be("public");
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
      describe('getCharactersCharacterIdNotifications', function() {
        it('should call getCharactersCharacterIdNotifications successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdNotifications call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdNotifications(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdNotifications200Ok);
              expect(data.isRead).to.be.a('boolean');
              expect(data.isRead).to.be(false);
              expect(data.notificationId).to.be.a('number');
              expect(data.notificationId).to.be("0");
              expect(data.senderId).to.be.a('number');
              expect(data.senderId).to.be(0);
              expect(data.senderType).to.be.a('string');
              expect(data.senderType).to.be("character");
              expect(data.text).to.be.a('string');
              expect(data.text).to.be("");
              expect(data.timestamp).to.be.a(Date);
              expect(data.timestamp).to.be(new Date());
              expect(data.type).to.be.a('string');
              expect(data.type).to.be("AcceptedAlly");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdNotificationsContacts', function() {
        it('should call getCharactersCharacterIdNotificationsContacts successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdNotificationsContacts call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdNotificationsContacts(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdNotificationsContacts200Ok);
              expect(data.message).to.be.a('string');
              expect(data.message).to.be("");
              expect(data.notificationId).to.be.a('number');
              expect(data.notificationId).to.be(0);
              expect(data.sendDate).to.be.a(Date);
              expect(data.sendDate).to.be(new Date());
              expect(data.senderCharacterId).to.be.a('number');
              expect(data.senderCharacterId).to.be(0);
              expect(data.standingLevel).to.be.a('number');
              expect(data.standingLevel).to.be(0.0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdPortrait', function() {
        it('should call getCharactersCharacterIdPortrait successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdPortrait call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getCharactersCharacterIdPortrait(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPortraitOk);
            expect(data.px128x128).to.be.a('string');
            expect(data.px128x128).to.be("");
            expect(data.px256x256).to.be.a('string');
            expect(data.px256x256).to.be("");
            expect(data.px512x512).to.be.a('string');
            expect(data.px512x512).to.be("");
            expect(data.px64x64).to.be.a('string');
            expect(data.px64x64).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdRoles', function() {
        it('should call getCharactersCharacterIdRoles successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdRoles call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdRoles(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdRolesOk);
            {
              let dataCtr = data.roles;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("Account_Take_1");
              }
            }
            {
              let dataCtr = data.rolesAtBase;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("Account_Take_1");
              }
            }
            {
              let dataCtr = data.rolesAtHq;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("Account_Take_1");
              }
            }
            {
              let dataCtr = data.rolesAtOther;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("Account_Take_1");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdStandings', function() {
        it('should call getCharactersCharacterIdStandings successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdStandings call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdStandings(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdStandings200Ok);
              expect(data.fromId).to.be.a('number');
              expect(data.fromId).to.be(0);
              expect(data.fromType).to.be.a('string');
              expect(data.fromType).to.be("agent");
              expect(data.standing).to.be.a('number');
              expect(data.standing).to.be(0.0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdTitles', function() {
        it('should call getCharactersCharacterIdTitles successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdTitles call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdTitles(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdTitles200Ok);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.titleId).to.be.a('number');
              expect(data.titleId).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postCharactersAffiliation', function() {
        it('should call postCharactersAffiliation successfully', function(done) {
          // TODO: uncomment, update parameter values for postCharactersAffiliation call and complete the assertions
          /*
          var characters = [new EveSwaggerInterface.[Number]()];
          var opts = {};
          opts.datasource = "tranquility";

          instance.postCharactersAffiliation(characters, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.PostCharactersAffiliation200Ok);
              expect(data.allianceId).to.be.a('number');
              expect(data.allianceId).to.be(0);
              expect(data.characterId).to.be.a('number');
              expect(data.characterId).to.be(0);
              expect(data.corporationId).to.be.a('number');
              expect(data.corporationId).to.be(0);
              expect(data.factionId).to.be.a('number');
              expect(data.factionId).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postCharactersCharacterIdCspa', function() {
        it('should call postCharactersCharacterIdCspa successfully', function(done) {
          // TODO: uncomment, update parameter values for postCharactersCharacterIdCspa call and complete the assertions
          /*
          var characterId = 56;
          var characters = [new EveSwaggerInterface.[Number]()];
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.postCharactersCharacterIdCspa(characterId, characters, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('number');
            // expect(data).to.be(null);

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
