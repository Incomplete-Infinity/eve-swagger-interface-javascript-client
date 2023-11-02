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
    define(['ApiClient', 'model/GetCharactersCharacterIdSkillsSkill'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCharactersCharacterIdSkillsSkill'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdSkillsOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdSkillsSkill);
  }
}(this, function(ApiClient, GetCharactersCharacterIdSkillsSkill) {
  'use strict';

  /**
   * The GetCharactersCharacterIdSkillsOk model module.
   * @module model/GetCharactersCharacterIdSkillsOk
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdSkillsOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdSkillsOk
   * @class
   * @param skills {Array.<module:model/GetCharactersCharacterIdSkillsSkill>} skills array
   * @param totalSp {Number} total_sp integer
   */
  var exports = function(skills, totalSp) {
    this.skills = skills;
    this.totalSp = totalSp;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdSkillsOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdSkillsOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdSkillsOk} The populated <code>GetCharactersCharacterIdSkillsOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('skills'))
        obj.skills = ApiClient.convertToType(data['skills'], [GetCharactersCharacterIdSkillsSkill]);
      if (data.hasOwnProperty('total_sp'))
        obj.totalSp = ApiClient.convertToType(data['total_sp'], 'Number');
      if (data.hasOwnProperty('unallocated_sp'))
        obj.unallocatedSp = ApiClient.convertToType(data['unallocated_sp'], 'Number');
    }
    return obj;
  }

  /**
   * skills array
   * @member {Array.<module:model/GetCharactersCharacterIdSkillsSkill>} skills
   */
  exports.prototype.skills = undefined;

  /**
   * total_sp integer
   * @member {Number} totalSp
   */
  exports.prototype.totalSp = undefined;

  /**
   * Skill points available to be assigned
   * @member {Number} unallocatedSp
   */
  exports.prototype.unallocatedSp = undefined;


  return exports;

}));
