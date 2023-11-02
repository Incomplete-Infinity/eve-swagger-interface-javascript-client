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
    root.EveSwaggerInterface.PostCorporationsCorporationIdAssetsNames200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PostCorporationsCorporationIdAssetsNames200Ok model module.
   * @module model/PostCorporationsCorporationIdAssetsNames200Ok
   * @version 1.19
   */

  /**
   * Constructs a new <code>PostCorporationsCorporationIdAssetsNames200Ok</code>.
   * 200 ok object
   * @alias module:model/PostCorporationsCorporationIdAssetsNames200Ok
   * @class
   * @param itemId {Number} item_id integer
   * @param name {String} name string
   */
  var exports = function(itemId, name) {
    this.itemId = itemId;
    this.name = name;
  };

  /**
   * Constructs a <code>PostCorporationsCorporationIdAssetsNames200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCorporationsCorporationIdAssetsNames200Ok} obj Optional instance to populate.
   * @return {module:model/PostCorporationsCorporationIdAssetsNames200Ok} The populated <code>PostCorporationsCorporationIdAssetsNames200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('item_id'))
        obj.itemId = ApiClient.convertToType(data['item_id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * item_id integer
   * @member {Number} itemId
   */
  exports.prototype.itemId = undefined;

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));
