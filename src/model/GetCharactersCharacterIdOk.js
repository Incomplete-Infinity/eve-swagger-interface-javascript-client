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
    root.EveSwaggerInterface.GetCharactersCharacterIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdOk model module.
   * @module model/GetCharactersCharacterIdOk
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdOk
   * @class
   * @param birthday {Date} Creation date of the character
   * @param bloodlineId {Number} bloodline_id integer
   * @param corporationId {Number} The character's corporation ID
   * @param gender {module:model/GetCharactersCharacterIdOk.GenderEnum} gender string
   * @param name {String} name string
   * @param raceId {Number} race_id integer
   */
  var exports = function(birthday, bloodlineId, corporationId, gender, name, raceId) {
    this.birthday = birthday;
    this.bloodlineId = bloodlineId;
    this.corporationId = corporationId;
    this.gender = gender;
    this.name = name;
    this.raceId = raceId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdOk} The populated <code>GetCharactersCharacterIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('alliance_id'))
        obj.allianceId = ApiClient.convertToType(data['alliance_id'], 'Number');
      if (data.hasOwnProperty('birthday'))
        obj.birthday = ApiClient.convertToType(data['birthday'], 'Date');
      if (data.hasOwnProperty('bloodline_id'))
        obj.bloodlineId = ApiClient.convertToType(data['bloodline_id'], 'Number');
      if (data.hasOwnProperty('corporation_id'))
        obj.corporationId = ApiClient.convertToType(data['corporation_id'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('faction_id'))
        obj.factionId = ApiClient.convertToType(data['faction_id'], 'Number');
      if (data.hasOwnProperty('gender'))
        obj.gender = ApiClient.convertToType(data['gender'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('race_id'))
        obj.raceId = ApiClient.convertToType(data['race_id'], 'Number');
      if (data.hasOwnProperty('security_status'))
        obj.securityStatus = ApiClient.convertToType(data['security_status'], 'Number');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
    }
    return obj;
  }

  /**
   * The character's alliance ID
   * @member {Number} allianceId
   */
  exports.prototype.allianceId = undefined;

  /**
   * Creation date of the character
   * @member {Date} birthday
   */
  exports.prototype.birthday = undefined;

  /**
   * bloodline_id integer
   * @member {Number} bloodlineId
   */
  exports.prototype.bloodlineId = undefined;

  /**
   * The character's corporation ID
   * @member {Number} corporationId
   */
  exports.prototype.corporationId = undefined;

  /**
   * description string
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * ID of the faction the character is fighting for, if the character is enlisted in Factional Warfare
   * @member {Number} factionId
   */
  exports.prototype.factionId = undefined;

  /**
   * gender string
   * @member {module:model/GetCharactersCharacterIdOk.GenderEnum} gender
   */
  exports.prototype.gender = undefined;

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * race_id integer
   * @member {Number} raceId
   */
  exports.prototype.raceId = undefined;

  /**
   * security_status number
   * @member {Number} securityStatus
   */
  exports.prototype.securityStatus = undefined;

  /**
   * The individual title of the character
   * @member {String} title
   */
  exports.prototype.title = undefined;



  /**
   * Allowed values for the <code>gender</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GenderEnum = {
    /**
     * value: "female"
     * @const
     */
    female: "female",

    /**
     * value: "male"
     * @const
     */
    male: "male"
  };

  return exports;

}));
