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
    define(['ApiClient', 'model/GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute', 'model/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute'), require('./GetDogmaDynamicItemsTypeIdItemIdDogmaEffect'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetDogmaDynamicItemsTypeIdItemIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute, root.EveSwaggerInterface.GetDogmaDynamicItemsTypeIdItemIdDogmaEffect);
  }
}(this, function(ApiClient, GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute, GetDogmaDynamicItemsTypeIdItemIdDogmaEffect) {
  'use strict';

  /**
   * The GetDogmaDynamicItemsTypeIdItemIdOk model module.
   * @module model/GetDogmaDynamicItemsTypeIdItemIdOk
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetDogmaDynamicItemsTypeIdItemIdOk</code>.
   * 200 ok object
   * @alias module:model/GetDogmaDynamicItemsTypeIdItemIdOk
   * @class
   * @param createdBy {Number} The ID of the character who created the item
   * @param dogmaAttributes {Array.<module:model/GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute>} dogma_attributes array
   * @param dogmaEffects {Array.<module:model/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect>} dogma_effects array
   * @param mutatorTypeId {Number} The type ID of the mutator used to generate the dynamic item.
   * @param sourceTypeId {Number} The type ID of the source item the mutator was applied to create the dynamic item.
   */
  var exports = function(createdBy, dogmaAttributes, dogmaEffects, mutatorTypeId, sourceTypeId) {
    this.createdBy = createdBy;
    this.dogmaAttributes = dogmaAttributes;
    this.dogmaEffects = dogmaEffects;
    this.mutatorTypeId = mutatorTypeId;
    this.sourceTypeId = sourceTypeId;
  };

  /**
   * Constructs a <code>GetDogmaDynamicItemsTypeIdItemIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDogmaDynamicItemsTypeIdItemIdOk} obj Optional instance to populate.
   * @return {module:model/GetDogmaDynamicItemsTypeIdItemIdOk} The populated <code>GetDogmaDynamicItemsTypeIdItemIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('created_by'))
        obj.createdBy = ApiClient.convertToType(data['created_by'], 'Number');
      if (data.hasOwnProperty('dogma_attributes'))
        obj.dogmaAttributes = ApiClient.convertToType(data['dogma_attributes'], [GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute]);
      if (data.hasOwnProperty('dogma_effects'))
        obj.dogmaEffects = ApiClient.convertToType(data['dogma_effects'], [GetDogmaDynamicItemsTypeIdItemIdDogmaEffect]);
      if (data.hasOwnProperty('mutator_type_id'))
        obj.mutatorTypeId = ApiClient.convertToType(data['mutator_type_id'], 'Number');
      if (data.hasOwnProperty('source_type_id'))
        obj.sourceTypeId = ApiClient.convertToType(data['source_type_id'], 'Number');
    }
    return obj;
  }

  /**
   * The ID of the character who created the item
   * @member {Number} createdBy
   */
  exports.prototype.createdBy = undefined;

  /**
   * dogma_attributes array
   * @member {Array.<module:model/GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute>} dogmaAttributes
   */
  exports.prototype.dogmaAttributes = undefined;

  /**
   * dogma_effects array
   * @member {Array.<module:model/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect>} dogmaEffects
   */
  exports.prototype.dogmaEffects = undefined;

  /**
   * The type ID of the mutator used to generate the dynamic item.
   * @member {Number} mutatorTypeId
   */
  exports.prototype.mutatorTypeId = undefined;

  /**
   * The type ID of the source item the mutator was applied to create the dynamic item.
   * @member {Number} sourceTypeId
   */
  exports.prototype.sourceTypeId = undefined;


  return exports;

}));
