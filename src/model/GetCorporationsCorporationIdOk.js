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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCorporationsCorporationIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdOk model module.
   * @module model/GetCorporationsCorporationIdOk
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdOk</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdOk
   * @class
   * @param ceoId {Number} ceo_id integer
   * @param creatorId {Number} creator_id integer
   * @param memberCount {Number} member_count integer
   * @param name {String} the full name of the corporation
   * @param taxRate {Number} tax_rate number
   * @param ticker {String} the short name of the corporation
   */
  var exports = function(ceoId, creatorId, memberCount, name, taxRate, ticker) {
    this.ceoId = ceoId;
    this.creatorId = creatorId;
    this.memberCount = memberCount;
    this.name = name;
    this.taxRate = taxRate;
    this.ticker = ticker;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdOk} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdOk} The populated <code>GetCorporationsCorporationIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('alliance_id'))
        obj.allianceId = ApiClient.convertToType(data['alliance_id'], 'Number');
      if (data.hasOwnProperty('ceo_id'))
        obj.ceoId = ApiClient.convertToType(data['ceo_id'], 'Number');
      if (data.hasOwnProperty('creator_id'))
        obj.creatorId = ApiClient.convertToType(data['creator_id'], 'Number');
      if (data.hasOwnProperty('date_founded'))
        obj.dateFounded = ApiClient.convertToType(data['date_founded'], 'Date');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('faction_id'))
        obj.factionId = ApiClient.convertToType(data['faction_id'], 'Number');
      if (data.hasOwnProperty('home_station_id'))
        obj.homeStationId = ApiClient.convertToType(data['home_station_id'], 'Number');
      if (data.hasOwnProperty('member_count'))
        obj.memberCount = ApiClient.convertToType(data['member_count'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('shares'))
        obj.shares = ApiClient.convertToType(data['shares'], 'Number');
      if (data.hasOwnProperty('tax_rate'))
        obj.taxRate = ApiClient.convertToType(data['tax_rate'], 'Number');
      if (data.hasOwnProperty('ticker'))
        obj.ticker = ApiClient.convertToType(data['ticker'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('war_eligible'))
        obj.warEligible = ApiClient.convertToType(data['war_eligible'], 'Boolean');
    }
    return obj;
  }

  /**
   * ID of the alliance that corporation is a member of, if any
   * @member {Number} allianceId
   */
  exports.prototype.allianceId = undefined;

  /**
   * ceo_id integer
   * @member {Number} ceoId
   */
  exports.prototype.ceoId = undefined;

  /**
   * creator_id integer
   * @member {Number} creatorId
   */
  exports.prototype.creatorId = undefined;

  /**
   * date_founded string
   * @member {Date} dateFounded
   */
  exports.prototype.dateFounded = undefined;

  /**
   * description string
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * faction_id integer
   * @member {Number} factionId
   */
  exports.prototype.factionId = undefined;

  /**
   * home_station_id integer
   * @member {Number} homeStationId
   */
  exports.prototype.homeStationId = undefined;

  /**
   * member_count integer
   * @member {Number} memberCount
   */
  exports.prototype.memberCount = undefined;

  /**
   * the full name of the corporation
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * shares integer
   * @member {Number} shares
   */
  exports.prototype.shares = undefined;

  /**
   * tax_rate number
   * @member {Number} taxRate
   */
  exports.prototype.taxRate = undefined;

  /**
   * the short name of the corporation
   * @member {String} ticker
   */
  exports.prototype.ticker = undefined;

  /**
   * url string
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * war_eligible boolean
   * @member {Boolean} warEligible
   */
  exports.prototype.warEligible = undefined;


  return exports;

}));