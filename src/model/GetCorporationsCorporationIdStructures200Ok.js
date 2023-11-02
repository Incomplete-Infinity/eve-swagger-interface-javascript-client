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
    define(['ApiClient', 'model/GetCorporationsCorporationIdStructuresService'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCorporationsCorporationIdStructuresService'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCorporationsCorporationIdStructures200Ok = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCorporationsCorporationIdStructuresService);
  }
}(this, function(ApiClient, GetCorporationsCorporationIdStructuresService) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdStructures200Ok model module.
   * @module model/GetCorporationsCorporationIdStructures200Ok
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdStructures200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdStructures200Ok
   * @class
   * @param corporationId {Number} ID of the corporation that owns the structure
   * @param profileId {Number} The id of the ACL profile for this citadel
   * @param state {module:model/GetCorporationsCorporationIdStructures200Ok.StateEnum} state string
   * @param structureId {Number} The Item ID of the structure
   * @param systemId {Number} The solar system the structure is in
   * @param typeId {Number} The type id of the structure
   */
  var exports = function(corporationId, profileId, state, structureId, systemId, typeId) {
    this.corporationId = corporationId;
    this.profileId = profileId;
    this.state = state;
    this.structureId = structureId;
    this.systemId = systemId;
    this.typeId = typeId;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdStructures200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdStructures200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdStructures200Ok} The populated <code>GetCorporationsCorporationIdStructures200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('corporation_id'))
        obj.corporationId = ApiClient.convertToType(data['corporation_id'], 'Number');
      if (data.hasOwnProperty('fuel_expires'))
        obj.fuelExpires = ApiClient.convertToType(data['fuel_expires'], 'Date');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('next_reinforce_apply'))
        obj.nextReinforceApply = ApiClient.convertToType(data['next_reinforce_apply'], 'Date');
      if (data.hasOwnProperty('next_reinforce_hour'))
        obj.nextReinforceHour = ApiClient.convertToType(data['next_reinforce_hour'], 'Number');
      if (data.hasOwnProperty('profile_id'))
        obj.profileId = ApiClient.convertToType(data['profile_id'], 'Number');
      if (data.hasOwnProperty('reinforce_hour'))
        obj.reinforceHour = ApiClient.convertToType(data['reinforce_hour'], 'Number');
      if (data.hasOwnProperty('services'))
        obj.services = ApiClient.convertToType(data['services'], [GetCorporationsCorporationIdStructuresService]);
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('state_timer_end'))
        obj.stateTimerEnd = ApiClient.convertToType(data['state_timer_end'], 'Date');
      if (data.hasOwnProperty('state_timer_start'))
        obj.stateTimerStart = ApiClient.convertToType(data['state_timer_start'], 'Date');
      if (data.hasOwnProperty('structure_id'))
        obj.structureId = ApiClient.convertToType(data['structure_id'], 'Number');
      if (data.hasOwnProperty('system_id'))
        obj.systemId = ApiClient.convertToType(data['system_id'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
      if (data.hasOwnProperty('unanchors_at'))
        obj.unanchorsAt = ApiClient.convertToType(data['unanchors_at'], 'Date');
    }
    return obj;
  }

  /**
   * ID of the corporation that owns the structure
   * @member {Number} corporationId
   */
  exports.prototype.corporationId = undefined;

  /**
   * Date on which the structure will run out of fuel
   * @member {Date} fuelExpires
   */
  exports.prototype.fuelExpires = undefined;

  /**
   * The structure name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The date and time when the structure's newly requested reinforcement times (e.g. next_reinforce_hour and next_reinforce_day) will take effect
   * @member {Date} nextReinforceApply
   */
  exports.prototype.nextReinforceApply = undefined;

  /**
   * The requested change to reinforce_hour that will take effect at the time shown by next_reinforce_apply
   * @member {Number} nextReinforceHour
   */
  exports.prototype.nextReinforceHour = undefined;

  /**
   * The id of the ACL profile for this citadel
   * @member {Number} profileId
   */
  exports.prototype.profileId = undefined;

  /**
   * The hour of day that determines the four hour window when the structure will randomly exit its reinforcement periods and become vulnerable to attack against its armor and/or hull. The structure will become vulnerable at a random time that is +/- 2 hours centered on the value of this property
   * @member {Number} reinforceHour
   */
  exports.prototype.reinforceHour = undefined;

  /**
   * Contains a list of service upgrades, and their state
   * @member {Array.<module:model/GetCorporationsCorporationIdStructuresService>} services
   */
  exports.prototype.services = undefined;

  /**
   * state string
   * @member {module:model/GetCorporationsCorporationIdStructures200Ok.StateEnum} state
   */
  exports.prototype.state = undefined;

  /**
   * Date at which the structure will move to it's next state
   * @member {Date} stateTimerEnd
   */
  exports.prototype.stateTimerEnd = undefined;

  /**
   * Date at which the structure entered it's current state
   * @member {Date} stateTimerStart
   */
  exports.prototype.stateTimerStart = undefined;

  /**
   * The Item ID of the structure
   * @member {Number} structureId
   */
  exports.prototype.structureId = undefined;

  /**
   * The solar system the structure is in
   * @member {Number} systemId
   */
  exports.prototype.systemId = undefined;

  /**
   * The type id of the structure
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;

  /**
   * Date at which the structure will unanchor
   * @member {Date} unanchorsAt
   */
  exports.prototype.unanchorsAt = undefined;



  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "anchor_vulnerable"
     * @const
     */
    anchorVulnerable: "anchor_vulnerable",

    /**
     * value: "anchoring"
     * @const
     */
    anchoring: "anchoring",

    /**
     * value: "armor_reinforce"
     * @const
     */
    armorReinforce: "armor_reinforce",

    /**
     * value: "armor_vulnerable"
     * @const
     */
    armorVulnerable: "armor_vulnerable",

    /**
     * value: "deploy_vulnerable"
     * @const
     */
    deployVulnerable: "deploy_vulnerable",

    /**
     * value: "fitting_invulnerable"
     * @const
     */
    fittingInvulnerable: "fitting_invulnerable",

    /**
     * value: "hull_reinforce"
     * @const
     */
    hullReinforce: "hull_reinforce",

    /**
     * value: "hull_vulnerable"
     * @const
     */
    hullVulnerable: "hull_vulnerable",

    /**
     * value: "online_deprecated"
     * @const
     */
    onlineDeprecated: "online_deprecated",

    /**
     * value: "onlining_vulnerable"
     * @const
     */
    onliningVulnerable: "onlining_vulnerable",

    /**
     * value: "shield_vulnerable"
     * @const
     */
    shieldVulnerable: "shield_vulnerable",

    /**
     * value: "unanchored"
     * @const
     */
    unanchored: "unanchored",

    /**
     * value: "unknown"
     * @const
     */
    unknown: "unknown"
  };

  return exports;

}));
