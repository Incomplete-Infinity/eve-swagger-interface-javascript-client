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
    root.EveSwaggerInterface.GetCharactersCharacterIdPortraitOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdPortraitOk model module.
   * @module model/GetCharactersCharacterIdPortraitOk
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdPortraitOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdPortraitOk
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdPortraitOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdPortraitOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdPortraitOk} The populated <code>GetCharactersCharacterIdPortraitOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('px128x128'))
        obj.px128x128 = ApiClient.convertToType(data['px128x128'], 'String');
      if (data.hasOwnProperty('px256x256'))
        obj.px256x256 = ApiClient.convertToType(data['px256x256'], 'String');
      if (data.hasOwnProperty('px512x512'))
        obj.px512x512 = ApiClient.convertToType(data['px512x512'], 'String');
      if (data.hasOwnProperty('px64x64'))
        obj.px64x64 = ApiClient.convertToType(data['px64x64'], 'String');
    }
    return obj;
  }

  /**
   * px128x128 string
   * @member {String} px128x128
   */
  exports.prototype.px128x128 = undefined;

  /**
   * px256x256 string
   * @member {String} px256x256
   */
  exports.prototype.px256x256 = undefined;

  /**
   * px512x512 string
   * @member {String} px512x512
   */
  exports.prototype.px512x512 = undefined;

  /**
   * px64x64 string
   * @member {String} px64x64
   */
  exports.prototype.px64x64 = undefined;


  return exports;

}));
