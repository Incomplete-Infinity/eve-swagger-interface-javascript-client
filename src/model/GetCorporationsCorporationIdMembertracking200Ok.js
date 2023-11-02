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
    root.EveSwaggerInterface.GetCorporationsCorporationIdMembertracking200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdMembertracking200Ok model module.
   * @module model/GetCorporationsCorporationIdMembertracking200Ok
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdMembertracking200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdMembertracking200Ok
   * @class
   * @param characterId {Number} character_id integer
   */
  var exports = function(characterId) {
    this.characterId = characterId;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdMembertracking200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdMembertracking200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdMembertracking200Ok} The populated <code>GetCorporationsCorporationIdMembertracking200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('base_id'))
        obj.baseId = ApiClient.convertToType(data['base_id'], 'Number');
      if (data.hasOwnProperty('character_id'))
        obj.characterId = ApiClient.convertToType(data['character_id'], 'Number');
      if (data.hasOwnProperty('location_id'))
        obj.locationId = ApiClient.convertToType(data['location_id'], 'Number');
      if (data.hasOwnProperty('logoff_date'))
        obj.logoffDate = ApiClient.convertToType(data['logoff_date'], 'Date');
      if (data.hasOwnProperty('logon_date'))
        obj.logonDate = ApiClient.convertToType(data['logon_date'], 'Date');
      if (data.hasOwnProperty('ship_type_id'))
        obj.shipTypeId = ApiClient.convertToType(data['ship_type_id'], 'Number');
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'Date');
    }
    return obj;
  }

  /**
   * base_id integer
   * @member {Number} baseId
   */
  exports.prototype.baseId = undefined;

  /**
   * character_id integer
   * @member {Number} characterId
   */
  exports.prototype.characterId = undefined;

  /**
   * location_id integer
   * @member {Number} locationId
   */
  exports.prototype.locationId = undefined;

  /**
   * logoff_date string
   * @member {Date} logoffDate
   */
  exports.prototype.logoffDate = undefined;

  /**
   * logon_date string
   * @member {Date} logonDate
   */
  exports.prototype.logonDate = undefined;

  /**
   * ship_type_id integer
   * @member {Number} shipTypeId
   */
  exports.prototype.shipTypeId = undefined;

  /**
   * start_date string
   * @member {Date} startDate
   */
  exports.prototype.startDate = undefined;


  return exports;

}));
