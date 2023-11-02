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
    root.EveSwaggerInterface.GetCorporationsCorporationIdWalletsDivisionTransactions200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdWalletsDivisionTransactions200Ok model module.
   * @module model/GetCorporationsCorporationIdWalletsDivisionTransactions200Ok
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdWalletsDivisionTransactions200Ok</code>.
   * wallet transaction
   * @alias module:model/GetCorporationsCorporationIdWalletsDivisionTransactions200Ok
   * @class
   * @param clientId {Number} client_id integer
   * @param _date {Date} Date and time of transaction
   * @param isBuy {Boolean} is_buy boolean
   * @param journalRefId {Number} -1 if there is no corresponding wallet journal entry
   * @param locationId {Number} location_id integer
   * @param quantity {Number} quantity integer
   * @param transactionId {Number} Unique transaction ID
   * @param typeId {Number} type_id integer
   * @param unitPrice {Number} Amount paid per unit
   */
  var exports = function(clientId, _date, isBuy, journalRefId, locationId, quantity, transactionId, typeId, unitPrice) {
    this.clientId = clientId;
    this._date = _date;
    this.isBuy = isBuy;
    this.journalRefId = journalRefId;
    this.locationId = locationId;
    this.quantity = quantity;
    this.transactionId = transactionId;
    this.typeId = typeId;
    this.unitPrice = unitPrice;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdWalletsDivisionTransactions200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdWalletsDivisionTransactions200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdWalletsDivisionTransactions200Ok} The populated <code>GetCorporationsCorporationIdWalletsDivisionTransactions200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('client_id'))
        obj.clientId = ApiClient.convertToType(data['client_id'], 'Number');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('is_buy'))
        obj.isBuy = ApiClient.convertToType(data['is_buy'], 'Boolean');
      if (data.hasOwnProperty('journal_ref_id'))
        obj.journalRefId = ApiClient.convertToType(data['journal_ref_id'], 'Number');
      if (data.hasOwnProperty('location_id'))
        obj.locationId = ApiClient.convertToType(data['location_id'], 'Number');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('transaction_id'))
        obj.transactionId = ApiClient.convertToType(data['transaction_id'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
      if (data.hasOwnProperty('unit_price'))
        obj.unitPrice = ApiClient.convertToType(data['unit_price'], 'Number');
    }
    return obj;
  }

  /**
   * client_id integer
   * @member {Number} clientId
   */
  exports.prototype.clientId = undefined;

  /**
   * Date and time of transaction
   * @member {Date} _date
   */
  exports.prototype._date = undefined;

  /**
   * is_buy boolean
   * @member {Boolean} isBuy
   */
  exports.prototype.isBuy = undefined;

  /**
   * -1 if there is no corresponding wallet journal entry
   * @member {Number} journalRefId
   */
  exports.prototype.journalRefId = undefined;

  /**
   * location_id integer
   * @member {Number} locationId
   */
  exports.prototype.locationId = undefined;

  /**
   * quantity integer
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * Unique transaction ID
   * @member {Number} transactionId
   */
  exports.prototype.transactionId = undefined;

  /**
   * type_id integer
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;

  /**
   * Amount paid per unit
   * @member {Number} unitPrice
   */
  exports.prototype.unitPrice = undefined;


  return exports;

}));
