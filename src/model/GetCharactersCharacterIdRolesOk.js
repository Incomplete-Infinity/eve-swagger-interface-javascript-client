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
    root.EveSwaggerInterface.GetCharactersCharacterIdRolesOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdRolesOk model module.
   * @module model/GetCharactersCharacterIdRolesOk
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdRolesOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdRolesOk
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdRolesOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdRolesOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdRolesOk} The populated <code>GetCharactersCharacterIdRolesOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('roles'))
        obj.roles = ApiClient.convertToType(data['roles'], ['String']);
      if (data.hasOwnProperty('roles_at_base'))
        obj.rolesAtBase = ApiClient.convertToType(data['roles_at_base'], ['String']);
      if (data.hasOwnProperty('roles_at_hq'))
        obj.rolesAtHq = ApiClient.convertToType(data['roles_at_hq'], ['String']);
      if (data.hasOwnProperty('roles_at_other'))
        obj.rolesAtOther = ApiClient.convertToType(data['roles_at_other'], ['String']);
    }
    return obj;
  }

  /**
   * roles array
   * @member {Array.<module:model/GetCharactersCharacterIdRolesOk.RolesEnum>} roles
   */
  exports.prototype.roles = undefined;

  /**
   * roles_at_base array
   * @member {Array.<module:model/GetCharactersCharacterIdRolesOk.RolesAtBaseEnum>} rolesAtBase
   */
  exports.prototype.rolesAtBase = undefined;

  /**
   * roles_at_hq array
   * @member {Array.<module:model/GetCharactersCharacterIdRolesOk.RolesAtHqEnum>} rolesAtHq
   */
  exports.prototype.rolesAtHq = undefined;

  /**
   * roles_at_other array
   * @member {Array.<module:model/GetCharactersCharacterIdRolesOk.RolesAtOtherEnum>} rolesAtOther
   */
  exports.prototype.rolesAtOther = undefined;



  /**
   * Allowed values for the <code>roles</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RolesEnum = {
    /**
     * value: "Account_Take_1"
     * @const
     */
    accountTake1: "Account_Take_1",

    /**
     * value: "Account_Take_2"
     * @const
     */
    accountTake2: "Account_Take_2",

    /**
     * value: "Account_Take_3"
     * @const
     */
    accountTake3: "Account_Take_3",

    /**
     * value: "Account_Take_4"
     * @const
     */
    accountTake4: "Account_Take_4",

    /**
     * value: "Account_Take_5"
     * @const
     */
    accountTake5: "Account_Take_5",

    /**
     * value: "Account_Take_6"
     * @const
     */
    accountTake6: "Account_Take_6",

    /**
     * value: "Account_Take_7"
     * @const
     */
    accountTake7: "Account_Take_7",

    /**
     * value: "Accountant"
     * @const
     */
    accountant: "Accountant",

    /**
     * value: "Auditor"
     * @const
     */
    auditor: "Auditor",

    /**
     * value: "Communications_Officer"
     * @const
     */
    communicationsOfficer: "Communications_Officer",

    /**
     * value: "Config_Equipment"
     * @const
     */
    configEquipment: "Config_Equipment",

    /**
     * value: "Config_Starbase_Equipment"
     * @const
     */
    configStarbaseEquipment: "Config_Starbase_Equipment",

    /**
     * value: "Container_Take_1"
     * @const
     */
    containerTake1: "Container_Take_1",

    /**
     * value: "Container_Take_2"
     * @const
     */
    containerTake2: "Container_Take_2",

    /**
     * value: "Container_Take_3"
     * @const
     */
    containerTake3: "Container_Take_3",

    /**
     * value: "Container_Take_4"
     * @const
     */
    containerTake4: "Container_Take_4",

    /**
     * value: "Container_Take_5"
     * @const
     */
    containerTake5: "Container_Take_5",

    /**
     * value: "Container_Take_6"
     * @const
     */
    containerTake6: "Container_Take_6",

    /**
     * value: "Container_Take_7"
     * @const
     */
    containerTake7: "Container_Take_7",

    /**
     * value: "Contract_Manager"
     * @const
     */
    contractManager: "Contract_Manager",

    /**
     * value: "Diplomat"
     * @const
     */
    diplomat: "Diplomat",

    /**
     * value: "Director"
     * @const
     */
    director: "Director",

    /**
     * value: "Factory_Manager"
     * @const
     */
    factoryManager: "Factory_Manager",

    /**
     * value: "Fitting_Manager"
     * @const
     */
    fittingManager: "Fitting_Manager",

    /**
     * value: "Hangar_Query_1"
     * @const
     */
    hangarQuery1: "Hangar_Query_1",

    /**
     * value: "Hangar_Query_2"
     * @const
     */
    hangarQuery2: "Hangar_Query_2",

    /**
     * value: "Hangar_Query_3"
     * @const
     */
    hangarQuery3: "Hangar_Query_3",

    /**
     * value: "Hangar_Query_4"
     * @const
     */
    hangarQuery4: "Hangar_Query_4",

    /**
     * value: "Hangar_Query_5"
     * @const
     */
    hangarQuery5: "Hangar_Query_5",

    /**
     * value: "Hangar_Query_6"
     * @const
     */
    hangarQuery6: "Hangar_Query_6",

    /**
     * value: "Hangar_Query_7"
     * @const
     */
    hangarQuery7: "Hangar_Query_7",

    /**
     * value: "Hangar_Take_1"
     * @const
     */
    hangarTake1: "Hangar_Take_1",

    /**
     * value: "Hangar_Take_2"
     * @const
     */
    hangarTake2: "Hangar_Take_2",

    /**
     * value: "Hangar_Take_3"
     * @const
     */
    hangarTake3: "Hangar_Take_3",

    /**
     * value: "Hangar_Take_4"
     * @const
     */
    hangarTake4: "Hangar_Take_4",

    /**
     * value: "Hangar_Take_5"
     * @const
     */
    hangarTake5: "Hangar_Take_5",

    /**
     * value: "Hangar_Take_6"
     * @const
     */
    hangarTake6: "Hangar_Take_6",

    /**
     * value: "Hangar_Take_7"
     * @const
     */
    hangarTake7: "Hangar_Take_7",

    /**
     * value: "Junior_Accountant"
     * @const
     */
    juniorAccountant: "Junior_Accountant",

    /**
     * value: "Personnel_Manager"
     * @const
     */
    personnelManager: "Personnel_Manager",

    /**
     * value: "Rent_Factory_Facility"
     * @const
     */
    rentFactoryFacility: "Rent_Factory_Facility",

    /**
     * value: "Rent_Office"
     * @const
     */
    rentOffice: "Rent_Office",

    /**
     * value: "Rent_Research_Facility"
     * @const
     */
    rentResearchFacility: "Rent_Research_Facility",

    /**
     * value: "Security_Officer"
     * @const
     */
    securityOfficer: "Security_Officer",

    /**
     * value: "Skill_Plan_Manager"
     * @const
     */
    skillPlanManager: "Skill_Plan_Manager",

    /**
     * value: "Starbase_Defense_Operator"
     * @const
     */
    starbaseDefenseOperator: "Starbase_Defense_Operator",

    /**
     * value: "Starbase_Fuel_Technician"
     * @const
     */
    starbaseFuelTechnician: "Starbase_Fuel_Technician",

    /**
     * value: "Station_Manager"
     * @const
     */
    stationManager: "Station_Manager",

    /**
     * value: "Trader"
     * @const
     */
    trader: "Trader"
  };


  /**
   * Allowed values for the <code>rolesAtBase</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RolesAtBaseEnum = {
    /**
     * value: "Account_Take_1"
     * @const
     */
    accountTake1: "Account_Take_1",

    /**
     * value: "Account_Take_2"
     * @const
     */
    accountTake2: "Account_Take_2",

    /**
     * value: "Account_Take_3"
     * @const
     */
    accountTake3: "Account_Take_3",

    /**
     * value: "Account_Take_4"
     * @const
     */
    accountTake4: "Account_Take_4",

    /**
     * value: "Account_Take_5"
     * @const
     */
    accountTake5: "Account_Take_5",

    /**
     * value: "Account_Take_6"
     * @const
     */
    accountTake6: "Account_Take_6",

    /**
     * value: "Account_Take_7"
     * @const
     */
    accountTake7: "Account_Take_7",

    /**
     * value: "Accountant"
     * @const
     */
    accountant: "Accountant",

    /**
     * value: "Auditor"
     * @const
     */
    auditor: "Auditor",

    /**
     * value: "Communications_Officer"
     * @const
     */
    communicationsOfficer: "Communications_Officer",

    /**
     * value: "Config_Equipment"
     * @const
     */
    configEquipment: "Config_Equipment",

    /**
     * value: "Config_Starbase_Equipment"
     * @const
     */
    configStarbaseEquipment: "Config_Starbase_Equipment",

    /**
     * value: "Container_Take_1"
     * @const
     */
    containerTake1: "Container_Take_1",

    /**
     * value: "Container_Take_2"
     * @const
     */
    containerTake2: "Container_Take_2",

    /**
     * value: "Container_Take_3"
     * @const
     */
    containerTake3: "Container_Take_3",

    /**
     * value: "Container_Take_4"
     * @const
     */
    containerTake4: "Container_Take_4",

    /**
     * value: "Container_Take_5"
     * @const
     */
    containerTake5: "Container_Take_5",

    /**
     * value: "Container_Take_6"
     * @const
     */
    containerTake6: "Container_Take_6",

    /**
     * value: "Container_Take_7"
     * @const
     */
    containerTake7: "Container_Take_7",

    /**
     * value: "Contract_Manager"
     * @const
     */
    contractManager: "Contract_Manager",

    /**
     * value: "Diplomat"
     * @const
     */
    diplomat: "Diplomat",

    /**
     * value: "Director"
     * @const
     */
    director: "Director",

    /**
     * value: "Factory_Manager"
     * @const
     */
    factoryManager: "Factory_Manager",

    /**
     * value: "Fitting_Manager"
     * @const
     */
    fittingManager: "Fitting_Manager",

    /**
     * value: "Hangar_Query_1"
     * @const
     */
    hangarQuery1: "Hangar_Query_1",

    /**
     * value: "Hangar_Query_2"
     * @const
     */
    hangarQuery2: "Hangar_Query_2",

    /**
     * value: "Hangar_Query_3"
     * @const
     */
    hangarQuery3: "Hangar_Query_3",

    /**
     * value: "Hangar_Query_4"
     * @const
     */
    hangarQuery4: "Hangar_Query_4",

    /**
     * value: "Hangar_Query_5"
     * @const
     */
    hangarQuery5: "Hangar_Query_5",

    /**
     * value: "Hangar_Query_6"
     * @const
     */
    hangarQuery6: "Hangar_Query_6",

    /**
     * value: "Hangar_Query_7"
     * @const
     */
    hangarQuery7: "Hangar_Query_7",

    /**
     * value: "Hangar_Take_1"
     * @const
     */
    hangarTake1: "Hangar_Take_1",

    /**
     * value: "Hangar_Take_2"
     * @const
     */
    hangarTake2: "Hangar_Take_2",

    /**
     * value: "Hangar_Take_3"
     * @const
     */
    hangarTake3: "Hangar_Take_3",

    /**
     * value: "Hangar_Take_4"
     * @const
     */
    hangarTake4: "Hangar_Take_4",

    /**
     * value: "Hangar_Take_5"
     * @const
     */
    hangarTake5: "Hangar_Take_5",

    /**
     * value: "Hangar_Take_6"
     * @const
     */
    hangarTake6: "Hangar_Take_6",

    /**
     * value: "Hangar_Take_7"
     * @const
     */
    hangarTake7: "Hangar_Take_7",

    /**
     * value: "Junior_Accountant"
     * @const
     */
    juniorAccountant: "Junior_Accountant",

    /**
     * value: "Personnel_Manager"
     * @const
     */
    personnelManager: "Personnel_Manager",

    /**
     * value: "Rent_Factory_Facility"
     * @const
     */
    rentFactoryFacility: "Rent_Factory_Facility",

    /**
     * value: "Rent_Office"
     * @const
     */
    rentOffice: "Rent_Office",

    /**
     * value: "Rent_Research_Facility"
     * @const
     */
    rentResearchFacility: "Rent_Research_Facility",

    /**
     * value: "Security_Officer"
     * @const
     */
    securityOfficer: "Security_Officer",

    /**
     * value: "Skill_Plan_Manager"
     * @const
     */
    skillPlanManager: "Skill_Plan_Manager",

    /**
     * value: "Starbase_Defense_Operator"
     * @const
     */
    starbaseDefenseOperator: "Starbase_Defense_Operator",

    /**
     * value: "Starbase_Fuel_Technician"
     * @const
     */
    starbaseFuelTechnician: "Starbase_Fuel_Technician",

    /**
     * value: "Station_Manager"
     * @const
     */
    stationManager: "Station_Manager",

    /**
     * value: "Trader"
     * @const
     */
    trader: "Trader"
  };


  /**
   * Allowed values for the <code>rolesAtHq</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RolesAtHqEnum = {
    /**
     * value: "Account_Take_1"
     * @const
     */
    accountTake1: "Account_Take_1",

    /**
     * value: "Account_Take_2"
     * @const
     */
    accountTake2: "Account_Take_2",

    /**
     * value: "Account_Take_3"
     * @const
     */
    accountTake3: "Account_Take_3",

    /**
     * value: "Account_Take_4"
     * @const
     */
    accountTake4: "Account_Take_4",

    /**
     * value: "Account_Take_5"
     * @const
     */
    accountTake5: "Account_Take_5",

    /**
     * value: "Account_Take_6"
     * @const
     */
    accountTake6: "Account_Take_6",

    /**
     * value: "Account_Take_7"
     * @const
     */
    accountTake7: "Account_Take_7",

    /**
     * value: "Accountant"
     * @const
     */
    accountant: "Accountant",

    /**
     * value: "Auditor"
     * @const
     */
    auditor: "Auditor",

    /**
     * value: "Communications_Officer"
     * @const
     */
    communicationsOfficer: "Communications_Officer",

    /**
     * value: "Config_Equipment"
     * @const
     */
    configEquipment: "Config_Equipment",

    /**
     * value: "Config_Starbase_Equipment"
     * @const
     */
    configStarbaseEquipment: "Config_Starbase_Equipment",

    /**
     * value: "Container_Take_1"
     * @const
     */
    containerTake1: "Container_Take_1",

    /**
     * value: "Container_Take_2"
     * @const
     */
    containerTake2: "Container_Take_2",

    /**
     * value: "Container_Take_3"
     * @const
     */
    containerTake3: "Container_Take_3",

    /**
     * value: "Container_Take_4"
     * @const
     */
    containerTake4: "Container_Take_4",

    /**
     * value: "Container_Take_5"
     * @const
     */
    containerTake5: "Container_Take_5",

    /**
     * value: "Container_Take_6"
     * @const
     */
    containerTake6: "Container_Take_6",

    /**
     * value: "Container_Take_7"
     * @const
     */
    containerTake7: "Container_Take_7",

    /**
     * value: "Contract_Manager"
     * @const
     */
    contractManager: "Contract_Manager",

    /**
     * value: "Diplomat"
     * @const
     */
    diplomat: "Diplomat",

    /**
     * value: "Director"
     * @const
     */
    director: "Director",

    /**
     * value: "Factory_Manager"
     * @const
     */
    factoryManager: "Factory_Manager",

    /**
     * value: "Fitting_Manager"
     * @const
     */
    fittingManager: "Fitting_Manager",

    /**
     * value: "Hangar_Query_1"
     * @const
     */
    hangarQuery1: "Hangar_Query_1",

    /**
     * value: "Hangar_Query_2"
     * @const
     */
    hangarQuery2: "Hangar_Query_2",

    /**
     * value: "Hangar_Query_3"
     * @const
     */
    hangarQuery3: "Hangar_Query_3",

    /**
     * value: "Hangar_Query_4"
     * @const
     */
    hangarQuery4: "Hangar_Query_4",

    /**
     * value: "Hangar_Query_5"
     * @const
     */
    hangarQuery5: "Hangar_Query_5",

    /**
     * value: "Hangar_Query_6"
     * @const
     */
    hangarQuery6: "Hangar_Query_6",

    /**
     * value: "Hangar_Query_7"
     * @const
     */
    hangarQuery7: "Hangar_Query_7",

    /**
     * value: "Hangar_Take_1"
     * @const
     */
    hangarTake1: "Hangar_Take_1",

    /**
     * value: "Hangar_Take_2"
     * @const
     */
    hangarTake2: "Hangar_Take_2",

    /**
     * value: "Hangar_Take_3"
     * @const
     */
    hangarTake3: "Hangar_Take_3",

    /**
     * value: "Hangar_Take_4"
     * @const
     */
    hangarTake4: "Hangar_Take_4",

    /**
     * value: "Hangar_Take_5"
     * @const
     */
    hangarTake5: "Hangar_Take_5",

    /**
     * value: "Hangar_Take_6"
     * @const
     */
    hangarTake6: "Hangar_Take_6",

    /**
     * value: "Hangar_Take_7"
     * @const
     */
    hangarTake7: "Hangar_Take_7",

    /**
     * value: "Junior_Accountant"
     * @const
     */
    juniorAccountant: "Junior_Accountant",

    /**
     * value: "Personnel_Manager"
     * @const
     */
    personnelManager: "Personnel_Manager",

    /**
     * value: "Rent_Factory_Facility"
     * @const
     */
    rentFactoryFacility: "Rent_Factory_Facility",

    /**
     * value: "Rent_Office"
     * @const
     */
    rentOffice: "Rent_Office",

    /**
     * value: "Rent_Research_Facility"
     * @const
     */
    rentResearchFacility: "Rent_Research_Facility",

    /**
     * value: "Security_Officer"
     * @const
     */
    securityOfficer: "Security_Officer",

    /**
     * value: "Skill_Plan_Manager"
     * @const
     */
    skillPlanManager: "Skill_Plan_Manager",

    /**
     * value: "Starbase_Defense_Operator"
     * @const
     */
    starbaseDefenseOperator: "Starbase_Defense_Operator",

    /**
     * value: "Starbase_Fuel_Technician"
     * @const
     */
    starbaseFuelTechnician: "Starbase_Fuel_Technician",

    /**
     * value: "Station_Manager"
     * @const
     */
    stationManager: "Station_Manager",

    /**
     * value: "Trader"
     * @const
     */
    trader: "Trader"
  };


  /**
   * Allowed values for the <code>rolesAtOther</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RolesAtOtherEnum = {
    /**
     * value: "Account_Take_1"
     * @const
     */
    accountTake1: "Account_Take_1",

    /**
     * value: "Account_Take_2"
     * @const
     */
    accountTake2: "Account_Take_2",

    /**
     * value: "Account_Take_3"
     * @const
     */
    accountTake3: "Account_Take_3",

    /**
     * value: "Account_Take_4"
     * @const
     */
    accountTake4: "Account_Take_4",

    /**
     * value: "Account_Take_5"
     * @const
     */
    accountTake5: "Account_Take_5",

    /**
     * value: "Account_Take_6"
     * @const
     */
    accountTake6: "Account_Take_6",

    /**
     * value: "Account_Take_7"
     * @const
     */
    accountTake7: "Account_Take_7",

    /**
     * value: "Accountant"
     * @const
     */
    accountant: "Accountant",

    /**
     * value: "Auditor"
     * @const
     */
    auditor: "Auditor",

    /**
     * value: "Communications_Officer"
     * @const
     */
    communicationsOfficer: "Communications_Officer",

    /**
     * value: "Config_Equipment"
     * @const
     */
    configEquipment: "Config_Equipment",

    /**
     * value: "Config_Starbase_Equipment"
     * @const
     */
    configStarbaseEquipment: "Config_Starbase_Equipment",

    /**
     * value: "Container_Take_1"
     * @const
     */
    containerTake1: "Container_Take_1",

    /**
     * value: "Container_Take_2"
     * @const
     */
    containerTake2: "Container_Take_2",

    /**
     * value: "Container_Take_3"
     * @const
     */
    containerTake3: "Container_Take_3",

    /**
     * value: "Container_Take_4"
     * @const
     */
    containerTake4: "Container_Take_4",

    /**
     * value: "Container_Take_5"
     * @const
     */
    containerTake5: "Container_Take_5",

    /**
     * value: "Container_Take_6"
     * @const
     */
    containerTake6: "Container_Take_6",

    /**
     * value: "Container_Take_7"
     * @const
     */
    containerTake7: "Container_Take_7",

    /**
     * value: "Contract_Manager"
     * @const
     */
    contractManager: "Contract_Manager",

    /**
     * value: "Diplomat"
     * @const
     */
    diplomat: "Diplomat",

    /**
     * value: "Director"
     * @const
     */
    director: "Director",

    /**
     * value: "Factory_Manager"
     * @const
     */
    factoryManager: "Factory_Manager",

    /**
     * value: "Fitting_Manager"
     * @const
     */
    fittingManager: "Fitting_Manager",

    /**
     * value: "Hangar_Query_1"
     * @const
     */
    hangarQuery1: "Hangar_Query_1",

    /**
     * value: "Hangar_Query_2"
     * @const
     */
    hangarQuery2: "Hangar_Query_2",

    /**
     * value: "Hangar_Query_3"
     * @const
     */
    hangarQuery3: "Hangar_Query_3",

    /**
     * value: "Hangar_Query_4"
     * @const
     */
    hangarQuery4: "Hangar_Query_4",

    /**
     * value: "Hangar_Query_5"
     * @const
     */
    hangarQuery5: "Hangar_Query_5",

    /**
     * value: "Hangar_Query_6"
     * @const
     */
    hangarQuery6: "Hangar_Query_6",

    /**
     * value: "Hangar_Query_7"
     * @const
     */
    hangarQuery7: "Hangar_Query_7",

    /**
     * value: "Hangar_Take_1"
     * @const
     */
    hangarTake1: "Hangar_Take_1",

    /**
     * value: "Hangar_Take_2"
     * @const
     */
    hangarTake2: "Hangar_Take_2",

    /**
     * value: "Hangar_Take_3"
     * @const
     */
    hangarTake3: "Hangar_Take_3",

    /**
     * value: "Hangar_Take_4"
     * @const
     */
    hangarTake4: "Hangar_Take_4",

    /**
     * value: "Hangar_Take_5"
     * @const
     */
    hangarTake5: "Hangar_Take_5",

    /**
     * value: "Hangar_Take_6"
     * @const
     */
    hangarTake6: "Hangar_Take_6",

    /**
     * value: "Hangar_Take_7"
     * @const
     */
    hangarTake7: "Hangar_Take_7",

    /**
     * value: "Junior_Accountant"
     * @const
     */
    juniorAccountant: "Junior_Accountant",

    /**
     * value: "Personnel_Manager"
     * @const
     */
    personnelManager: "Personnel_Manager",

    /**
     * value: "Rent_Factory_Facility"
     * @const
     */
    rentFactoryFacility: "Rent_Factory_Facility",

    /**
     * value: "Rent_Office"
     * @const
     */
    rentOffice: "Rent_Office",

    /**
     * value: "Rent_Research_Facility"
     * @const
     */
    rentResearchFacility: "Rent_Research_Facility",

    /**
     * value: "Security_Officer"
     * @const
     */
    securityOfficer: "Security_Officer",

    /**
     * value: "Skill_Plan_Manager"
     * @const
     */
    skillPlanManager: "Skill_Plan_Manager",

    /**
     * value: "Starbase_Defense_Operator"
     * @const
     */
    starbaseDefenseOperator: "Starbase_Defense_Operator",

    /**
     * value: "Starbase_Fuel_Technician"
     * @const
     */
    starbaseFuelTechnician: "Starbase_Fuel_Technician",

    /**
     * value: "Station_Manager"
     * @const
     */
    stationManager: "Station_Manager",

    /**
     * value: "Trader"
     * @const
     */
    trader: "Trader"
  };

  return exports;

}));
