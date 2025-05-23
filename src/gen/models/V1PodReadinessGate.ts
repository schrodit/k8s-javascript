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
* PodReadinessGate contains the reference to a pod condition
*/
export class V1PodReadinessGate {
    /**
    * ConditionType refers to a condition in the pod\'s condition list with matching type.
    */
    'conditionType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditionType",
            "baseName": "conditionType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodReadinessGate.attributeTypeMap;
    }

    public constructor() {
    }
}
