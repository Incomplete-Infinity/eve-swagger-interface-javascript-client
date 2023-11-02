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
    root.EveSwaggerInterface.GetCorporationsCorporationIdIndustryJobs200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdIndustryJobs200Ok model module.
   * @module model/GetCorporationsCorporationIdIndustryJobs200Ok
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdIndustryJobs200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdIndustryJobs200Ok
   * @class
   * @param activityId {Number} Job activity ID
   * @param blueprintId {Number} blueprint_id integer
   * @param blueprintLocationId {Number} Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
   * @param blueprintTypeId {Number} blueprint_type_id integer
   * @param duration {Number} Job duration in seconds
   * @param endDate {Date} Date and time when this job finished
   * @param facilityId {Number} ID of the facility where this job is running
   * @param installerId {Number} ID of the character which installed this job
   * @param jobId {Number} Unique job ID
   * @param locationId {Number} ID of the location for the industry facility
   * @param outputLocationId {Number} Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
   * @param runs {Number} Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
   * @param startDate {Date} Date and time when this job started
   * @param status {module:model/GetCorporationsCorporationIdIndustryJobs200Ok.StatusEnum} status string
   */
  var exports = function(activityId, blueprintId, blueprintLocationId, blueprintTypeId, duration, endDate, facilityId, installerId, jobId, locationId, outputLocationId, runs, startDate, status) {
    this.activityId = activityId;
    this.blueprintId = blueprintId;
    this.blueprintLocationId = blueprintLocationId;
    this.blueprintTypeId = blueprintTypeId;
    this.duration = duration;
    this.endDate = endDate;
    this.facilityId = facilityId;
    this.installerId = installerId;
    this.jobId = jobId;
    this.locationId = locationId;
    this.outputLocationId = outputLocationId;
    this.runs = runs;
    this.startDate = startDate;
    this.status = status;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdIndustryJobs200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdIndustryJobs200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdIndustryJobs200Ok} The populated <code>GetCorporationsCorporationIdIndustryJobs200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('activity_id'))
        obj.activityId = ApiClient.convertToType(data['activity_id'], 'Number');
      if (data.hasOwnProperty('blueprint_id'))
        obj.blueprintId = ApiClient.convertToType(data['blueprint_id'], 'Number');
      if (data.hasOwnProperty('blueprint_location_id'))
        obj.blueprintLocationId = ApiClient.convertToType(data['blueprint_location_id'], 'Number');
      if (data.hasOwnProperty('blueprint_type_id'))
        obj.blueprintTypeId = ApiClient.convertToType(data['blueprint_type_id'], 'Number');
      if (data.hasOwnProperty('completed_character_id'))
        obj.completedCharacterId = ApiClient.convertToType(data['completed_character_id'], 'Number');
      if (data.hasOwnProperty('completed_date'))
        obj.completedDate = ApiClient.convertToType(data['completed_date'], 'Date');
      if (data.hasOwnProperty('cost'))
        obj.cost = ApiClient.convertToType(data['cost'], 'Number');
      if (data.hasOwnProperty('duration'))
        obj.duration = ApiClient.convertToType(data['duration'], 'Number');
      if (data.hasOwnProperty('end_date'))
        obj.endDate = ApiClient.convertToType(data['end_date'], 'Date');
      if (data.hasOwnProperty('facility_id'))
        obj.facilityId = ApiClient.convertToType(data['facility_id'], 'Number');
      if (data.hasOwnProperty('installer_id'))
        obj.installerId = ApiClient.convertToType(data['installer_id'], 'Number');
      if (data.hasOwnProperty('job_id'))
        obj.jobId = ApiClient.convertToType(data['job_id'], 'Number');
      if (data.hasOwnProperty('licensed_runs'))
        obj.licensedRuns = ApiClient.convertToType(data['licensed_runs'], 'Number');
      if (data.hasOwnProperty('location_id'))
        obj.locationId = ApiClient.convertToType(data['location_id'], 'Number');
      if (data.hasOwnProperty('output_location_id'))
        obj.outputLocationId = ApiClient.convertToType(data['output_location_id'], 'Number');
      if (data.hasOwnProperty('pause_date'))
        obj.pauseDate = ApiClient.convertToType(data['pause_date'], 'Date');
      if (data.hasOwnProperty('probability'))
        obj.probability = ApiClient.convertToType(data['probability'], 'Number');
      if (data.hasOwnProperty('product_type_id'))
        obj.productTypeId = ApiClient.convertToType(data['product_type_id'], 'Number');
      if (data.hasOwnProperty('runs'))
        obj.runs = ApiClient.convertToType(data['runs'], 'Number');
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'Date');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('successful_runs'))
        obj.successfulRuns = ApiClient.convertToType(data['successful_runs'], 'Number');
    }
    return obj;
  }

  /**
   * Job activity ID
   * @member {Number} activityId
   */
  exports.prototype.activityId = undefined;

  /**
   * blueprint_id integer
   * @member {Number} blueprintId
   */
  exports.prototype.blueprintId = undefined;

  /**
   * Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
   * @member {Number} blueprintLocationId
   */
  exports.prototype.blueprintLocationId = undefined;

  /**
   * blueprint_type_id integer
   * @member {Number} blueprintTypeId
   */
  exports.prototype.blueprintTypeId = undefined;

  /**
   * ID of the character which completed this job
   * @member {Number} completedCharacterId
   */
  exports.prototype.completedCharacterId = undefined;

  /**
   * Date and time when this job was completed
   * @member {Date} completedDate
   */
  exports.prototype.completedDate = undefined;

  /**
   * The sume of job installation fee and industry facility tax
   * @member {Number} cost
   */
  exports.prototype.cost = undefined;

  /**
   * Job duration in seconds
   * @member {Number} duration
   */
  exports.prototype.duration = undefined;

  /**
   * Date and time when this job finished
   * @member {Date} endDate
   */
  exports.prototype.endDate = undefined;

  /**
   * ID of the facility where this job is running
   * @member {Number} facilityId
   */
  exports.prototype.facilityId = undefined;

  /**
   * ID of the character which installed this job
   * @member {Number} installerId
   */
  exports.prototype.installerId = undefined;

  /**
   * Unique job ID
   * @member {Number} jobId
   */
  exports.prototype.jobId = undefined;

  /**
   * Number of runs blueprint is licensed for
   * @member {Number} licensedRuns
   */
  exports.prototype.licensedRuns = undefined;

  /**
   * ID of the location for the industry facility
   * @member {Number} locationId
   */
  exports.prototype.locationId = undefined;

  /**
   * Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
   * @member {Number} outputLocationId
   */
  exports.prototype.outputLocationId = undefined;

  /**
   * Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
   * @member {Date} pauseDate
   */
  exports.prototype.pauseDate = undefined;

  /**
   * Chance of success for invention
   * @member {Number} probability
   */
  exports.prototype.probability = undefined;

  /**
   * Type ID of product (manufactured, copied or invented)
   * @member {Number} productTypeId
   */
  exports.prototype.productTypeId = undefined;

  /**
   * Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
   * @member {Number} runs
   */
  exports.prototype.runs = undefined;

  /**
   * Date and time when this job started
   * @member {Date} startDate
   */
  exports.prototype.startDate = undefined;

  /**
   * status string
   * @member {module:model/GetCorporationsCorporationIdIndustryJobs200Ok.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * Number of successful runs for this job. Equal to runs unless this is an invention job
   * @member {Number} successfulRuns
   */
  exports.prototype.successfulRuns = undefined;



  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "active"
     * @const
     */
    active: "active",

    /**
     * value: "cancelled"
     * @const
     */
    cancelled: "cancelled",

    /**
     * value: "delivered"
     * @const
     */
    delivered: "delivered",

    /**
     * value: "paused"
     * @const
     */
    paused: "paused",

    /**
     * value: "ready"
     * @const
     */
    ready: "ready",

    /**
     * value: "reverted"
     * @const
     */
    reverted: "reverted"
  };

  return exports;

}));
