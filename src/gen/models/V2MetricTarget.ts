/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.33.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.js';

/**
* MetricTarget defines the target value, average value, or average utilization of a specific metric
*/
export class V2MetricTarget {
    /**
    * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
    */
    'averageUtilization'?: number;
    /**
    * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
    */
    'averageValue'?: string;
    /**
    * type represents whether the metric type is Utilization, Value, or AverageValue
    */
    'type': string;
    /**
    * value is the target value of the metric (as a quantity).
    */
    'value'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "averageUtilization",
            "baseName": "averageUtilization",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "averageValue",
            "baseName": "averageValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2MetricTarget.attributeTypeMap;
    }

    public constructor() {
    }
}
