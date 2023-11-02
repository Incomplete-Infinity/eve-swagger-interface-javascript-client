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
    instance = new EveSwaggerInterface.KillmailsApi();
  });

  describe('(package)', function() {
    describe('KillmailsApi', function() {
      describe('getCharactersCharacterIdKillmailsRecent', function() {
        it('should call getCharactersCharacterIdKillmailsRecent successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdKillmailsRecent call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCharactersCharacterIdKillmailsRecent(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdKillmailsRecent200Ok);
              expect(data.killmailHash).to.be.a('string');
              expect(data.killmailHash).to.be("");
              expect(data.killmailId).to.be.a('number');
              expect(data.killmailId).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationsCorporationIdKillmailsRecent', function() {
        it('should call getCorporationsCorporationIdKillmailsRecent successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationsCorporationIdKillmailsRecent call and complete the assertions
          /*
          var corporationId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCorporationsCorporationIdKillmailsRecent(corporationId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdKillmailsRecent200Ok);
              expect(data.killmailHash).to.be.a('string');
              expect(data.killmailHash).to.be("");
              expect(data.killmailId).to.be.a('number');
              expect(data.killmailId).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getKillmailsKillmailIdKillmailHash', function() {
        it('should call getKillmailsKillmailIdKillmailHash successfully', function(done) {
          // TODO: uncomment, update parameter values for getKillmailsKillmailIdKillmailHash call and complete the assertions
          /*
          var killmailHash = "killmailHash_example";
          var killmailId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getKillmailsKillmailIdKillmailHash(killmailHash, killmailId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashOk);
            {
              let dataCtr = data.attackers;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashAttacker);
                expect(data.allianceId).to.be.a('number');
                expect(data.allianceId).to.be(0);
                expect(data.characterId).to.be.a('number');
                expect(data.characterId).to.be(0);
                expect(data.corporationId).to.be.a('number');
                expect(data.corporationId).to.be(0);
                expect(data.damageDone).to.be.a('number');
                expect(data.damageDone).to.be(0);
                expect(data.factionId).to.be.a('number');
                expect(data.factionId).to.be(0);
                expect(data.finalBlow).to.be.a('boolean');
                expect(data.finalBlow).to.be(false);
                expect(data.securityStatus).to.be.a('number');
                expect(data.securityStatus).to.be(0.0);
                expect(data.shipTypeId).to.be.a('number');
                expect(data.shipTypeId).to.be(0);
                expect(data.weaponTypeId).to.be.a('number');
                expect(data.weaponTypeId).to.be(0);

                      }
            }
            expect(data.killmailId).to.be.a('number');
            expect(data.killmailId).to.be(0);
            expect(data.killmailTime).to.be.a(Date);
            expect(data.killmailTime).to.be(new Date());
            expect(data.moonId).to.be.a('number');
            expect(data.moonId).to.be(0);
            expect(data.solarSystemId).to.be.a('number');
            expect(data.solarSystemId).to.be(0);
            expect(data.victim).to.be.a(EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashVictim);
                  expect(data.victim.allianceId).to.be.a('number');
              expect(data.victim.allianceId).to.be(0);
              expect(data.victim.characterId).to.be.a('number');
              expect(data.victim.characterId).to.be(0);
              expect(data.victim.corporationId).to.be.a('number');
              expect(data.victim.corporationId).to.be(0);
              expect(data.victim.damageTaken).to.be.a('number');
              expect(data.victim.damageTaken).to.be(0);
              expect(data.victim.factionId).to.be.a('number');
              expect(data.victim.factionId).to.be(0);
              {
                let dataCtr = data.victim.items;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashItem);
                  expect(data.flag).to.be.a('number');
                  expect(data.flag).to.be(0);
                  expect(data.itemTypeId).to.be.a('number');
                  expect(data.itemTypeId).to.be(0);
                  {
                    let dataCtr = data.items;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashItemsItem);
                      expect(data.flag).to.be.a('number');
                      expect(data.flag).to.be(0);
                      expect(data.itemTypeId).to.be.a('number');
                      expect(data.itemTypeId).to.be(0);
                      expect(data.quantityDestroyed).to.be.a('number');
                      expect(data.quantityDestroyed).to.be("0");
                      expect(data.quantityDropped).to.be.a('number');
                      expect(data.quantityDropped).to.be("0");
                      expect(data.singleton).to.be.a('number');
                      expect(data.singleton).to.be(0);
      
                            }
                  }
                  expect(data.quantityDestroyed).to.be.a('number');
                  expect(data.quantityDestroyed).to.be("0");
                  expect(data.quantityDropped).to.be.a('number');
                  expect(data.quantityDropped).to.be("0");
                  expect(data.singleton).to.be.a('number');
                  expect(data.singleton).to.be(0);
  
                        }
              }
              expect(data.victim.position).to.be.a(EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashPosition);
                    expect(data.victim.position.x).to.be.a('number');
                expect(data.victim.position.x).to.be(0.0);
                expect(data.victim.position.y).to.be.a('number');
                expect(data.victim.position.y).to.be(0.0);
                expect(data.victim.position.z).to.be.a('number');
                expect(data.victim.position.z).to.be(0.0);
              expect(data.victim.shipTypeId).to.be.a('number');
              expect(data.victim.shipTypeId).to.be(0);
            expect(data.warId).to.be.a('number');
            expect(data.warId).to.be(0);

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
