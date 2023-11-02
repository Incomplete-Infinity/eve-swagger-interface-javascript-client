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
    root.EveSwaggerInterface.GetCorporationsCorporationIdStructuresService = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdStructuresService model module.
   * @module model/GetCorporationsCorporationIdStructuresService
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdStructuresService</code>.
   * service object
   * @alias module:model/GetCorporationsCorporationIdStructuresService
   * @class
   * @param name {String} name string
   * @param state {module:model/GetCorporationsCorporationIdStructuresService.StateEnum} state string
   */
  var exports = function(name, state) {
    this.name = name;
    this.state = state;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdStructuresService</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdStructuresService} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdStructuresService} The populated <code>GetCorporationsCorporationIdStructuresService</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
    }
    return obj;
  }

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * state string
   * @member {module:model/GetCorporationsCorporationIdStructuresService.StateEnum} state
   */
  exports.prototype.state = undefined;



  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "online"
     * @const
     */
    online: "online",

    /**
     * value: "offline"
     * @const
     */
    offline: "offline",

    /**
     * value: "cleanup"
     * @const
     */
    cleanup: "cleanup"
  };

  return exports;

}));
