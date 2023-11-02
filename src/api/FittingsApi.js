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
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/Forbidden', 'model/GatewayTimeout', 'model/GetCharactersCharacterIdFittings200Ok', 'model/InternalServerError', 'model/PostCharactersCharacterIdFittingsCreated', 'model/PostCharactersCharacterIdFittingsFitting', 'model/ServiceUnavailable', 'model/Unauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/Forbidden'), require('../model/GatewayTimeout'), require('../model/GetCharactersCharacterIdFittings200Ok'), require('../model/InternalServerError'), require('../model/PostCharactersCharacterIdFittingsCreated'), require('../model/PostCharactersCharacterIdFittingsFitting'), require('../model/ServiceUnavailable'), require('../model/Unauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.FittingsApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.BadRequest, root.EveSwaggerInterface.ErrorLimited, root.EveSwaggerInterface.Forbidden, root.EveSwaggerInterface.GatewayTimeout, root.EveSwaggerInterface.GetCharactersCharacterIdFittings200Ok, root.EveSwaggerInterface.InternalServerError, root.EveSwaggerInterface.PostCharactersCharacterIdFittingsCreated, root.EveSwaggerInterface.PostCharactersCharacterIdFittingsFitting, root.EveSwaggerInterface.ServiceUnavailable, root.EveSwaggerInterface.Unauthorized);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, Forbidden, GatewayTimeout, GetCharactersCharacterIdFittings200Ok, InternalServerError, PostCharactersCharacterIdFittingsCreated, PostCharactersCharacterIdFittingsFitting, ServiceUnavailable, Unauthorized) {
  'use strict';

  /**
   * Fittings service.
   * @module api/FittingsApi
   * @version 1.19
   */

  /**
   * Constructs a new FittingsApi. 
   * @alias module:api/FittingsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteCharactersCharacterIdFittingsFittingId operation.
     * @callback module:api/FittingsApi~deleteCharactersCharacterIdFittingsFittingIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete fitting
     * Delete a fitting from a character  --- Alternate route: `/dev/characters/{character_id}/fittings/{fitting_id}/`  Alternate route: `/legacy/characters/{character_id}/fittings/{fitting_id}/`  Alternate route: `/v1/characters/{character_id}/fittings/{fitting_id}/` 
     * @param {Number} characterId An EVE character ID
     * @param {Number} fittingId ID for a fitting of this character
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/FittingsApi~deleteCharactersCharacterIdFittingsFittingIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCharactersCharacterIdFittingsFittingId = function(characterId, fittingId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling deleteCharactersCharacterIdFittingsFittingId");
      }

      // verify the required parameter 'fittingId' is set
      if (fittingId === undefined || fittingId === null) {
        throw new Error("Missing the required parameter 'fittingId' when calling deleteCharactersCharacterIdFittingsFittingId");
      }


      var pathParams = {
        'character_id': characterId,
        'fitting_id': fittingId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/characters/{character_id}/fittings/{fitting_id}/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdFittings operation.
     * @callback module:api/FittingsApi~getCharactersCharacterIdFittingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdFittings200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get fittings
     * Return fittings of a character  --- Alternate route: `/dev/characters/{character_id}/fittings/`  Alternate route: `/v2/characters/{character_id}/fittings/`  --- This route is cached for up to 300 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/FittingsApi~getCharactersCharacterIdFittingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdFittings200Ok>}
     */
    this.getCharactersCharacterIdFittings = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdFittings");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdFittings200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/fittings/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postCharactersCharacterIdFittings operation.
     * @callback module:api/FittingsApi~postCharactersCharacterIdFittingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostCharactersCharacterIdFittingsCreated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create fitting
     * Save a new fitting for a character  --- Alternate route: `/dev/characters/{character_id}/fittings/`  Alternate route: `/v2/characters/{character_id}/fittings/` 
     * @param {Number} characterId An EVE character ID
     * @param {module:model/PostCharactersCharacterIdFittingsFitting} fitting Details about the new fitting
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/FittingsApi~postCharactersCharacterIdFittingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostCharactersCharacterIdFittingsCreated}
     */
    this.postCharactersCharacterIdFittings = function(characterId, fitting, opts, callback) {
      opts = opts || {};
      var postBody = fitting;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling postCharactersCharacterIdFittings");
      }

      // verify the required parameter 'fitting' is set
      if (fitting === undefined || fitting === null) {
        throw new Error("Missing the required parameter 'fitting' when calling postCharactersCharacterIdFittings");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PostCharactersCharacterIdFittingsCreated;

      return this.apiClient.callApi(
        '/characters/{character_id}/fittings/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
