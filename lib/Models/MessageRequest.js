/**
 * MessagingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MessageRequest
 */
class MessageRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.applicationId = this.constructor.getValue(obj.applicationId);
        this.to = this.constructor.getValue(obj.to);
        this.from = this.constructor.getValue(obj.from);
        this.text = this.constructor.getValue(obj.text);
        this.media = this.constructor.getValue(obj.media);
        this.tag = this.constructor.getValue(obj.tag);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'applicationId', realName: 'applicationId' },
            { name: 'to', realName: 'to', array: true },
            { name: 'from', realName: 'from' },
            { name: 'text', realName: 'text' },
            { name: 'media', realName: 'media', array: true },
            { name: 'tag', realName: 'tag' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = MessageRequest;