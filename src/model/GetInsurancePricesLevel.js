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
    root.EveSwaggerInterface.GetInsurancePricesLevel = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetInsurancePricesLevel model module.
   * @module model/GetInsurancePricesLevel
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetInsurancePricesLevel</code>.
   * level object
   * @alias module:model/GetInsurancePricesLevel
   * @class
   * @param cost {Number} cost number
   * @param name {String} Localized insurance level
   * @param payout {Number} payout number
   */
  var exports = function(cost, name, payout) {
    this.cost = cost;
    this.name = name;
    this.payout = payout;
  };

  /**
   * Constructs a <code>GetInsurancePricesLevel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetInsurancePricesLevel} obj Optional instance to populate.
   * @return {module:model/GetInsurancePricesLevel} The populated <code>GetInsurancePricesLevel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cost'))
        obj.cost = ApiClient.convertToType(data['cost'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('payout'))
        obj.payout = ApiClient.convertToType(data['payout'], 'Number');
    }
    return obj;
  }

  /**
   * cost number
   * @member {Number} cost
   */
  exports.prototype.cost = undefined;

  /**
   * Localized insurance level
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * payout number
   * @member {Number} payout
   */
  exports.prototype.payout = undefined;


  return exports;

}));
