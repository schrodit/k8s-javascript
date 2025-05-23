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

import { IntOrString } from '../../types.js';
import { V1HTTPHeader } from '../models/V1HTTPHeader.js';
import { HttpFile } from '../http/http.js';

/**
* HTTPGetAction describes an action based on HTTP Get requests.
*/
export class V1HTTPGetAction {
    /**
    * Host name to connect to, defaults to the pod IP. You probably want to set \"Host\" in httpHeaders instead.
    */
    'host'?: string;
    /**
    * Custom headers to set in the request. HTTP allows repeated headers.
    */
    'httpHeaders'?: Array<V1HTTPHeader>;
    /**
    * Path to access on the HTTP server.
    */
    'path'?: string;
    /**
    * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
    */
    'port': IntOrString;
    /**
    * Scheme to use for connecting to the host. Defaults to HTTP.
    */
    'scheme'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "httpHeaders",
            "baseName": "httpHeaders",
            "type": "Array<V1HTTPHeader>",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "IntOrString",
            "format": "int-or-string"
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1HTTPGetAction.attributeTypeMap;
    }

    public constructor() {
    }
}
