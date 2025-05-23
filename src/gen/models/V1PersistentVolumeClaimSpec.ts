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

import { V1LabelSelector } from '../models/V1LabelSelector.js';
import { V1TypedLocalObjectReference } from '../models/V1TypedLocalObjectReference.js';
import { V1TypedObjectReference } from '../models/V1TypedObjectReference.js';
import { V1VolumeResourceRequirements } from '../models/V1VolumeResourceRequirements.js';
import { HttpFile } from '../http/http.js';

/**
* PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
*/
export class V1PersistentVolumeClaimSpec {
    /**
    * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
    */
    'accessModes'?: Array<string>;
    'dataSource'?: V1TypedLocalObjectReference;
    'dataSourceRef'?: V1TypedObjectReference;
    'resources'?: V1VolumeResourceRequirements;
    'selector'?: V1LabelSelector;
    /**
    * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
    */
    'storageClassName'?: string;
    /**
    * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it\'s not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
    */
    'volumeAttributesClassName'?: string;
    /**
    * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
    */
    'volumeMode'?: string;
    /**
    * volumeName is the binding reference to the PersistentVolume backing this claim.
    */
    'volumeName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessModes",
            "baseName": "accessModes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "dataSource",
            "baseName": "dataSource",
            "type": "V1TypedLocalObjectReference",
            "format": ""
        },
        {
            "name": "dataSourceRef",
            "baseName": "dataSourceRef",
            "type": "V1TypedObjectReference",
            "format": ""
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "V1VolumeResourceRequirements",
            "format": ""
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "V1LabelSelector",
            "format": ""
        },
        {
            "name": "storageClassName",
            "baseName": "storageClassName",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeAttributesClassName",
            "baseName": "volumeAttributesClassName",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeMode",
            "baseName": "volumeMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
