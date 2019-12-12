/**
 * MessagingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const config = require("../../lib/configuration");
const testConfiguration = require("../TestBootstrap");
const baseController = require("../../lib/Controllers/BaseController");

const controller = testerlib.APIController;
const GenericClientException = testerlib.GenericClientException;
const PathClientException = testerlib.PathClientException;
const FieldError = testerlib.FieldError;
const Media = testerlib.Media;
const Tag = testerlib.Tag;
const DeferredResult = testerlib.DeferredResult;
const BandwidthCallbackMessage = testerlib.BandwidthCallbackMessage;
const BandwidthMessage = testerlib.BandwidthMessage;
const MessageRequest = testerlib.MessageRequest;


describe("APIController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * getMessage
     */
    it("should testTestGetMessage response", function testTestGetMessageTest(done) {
        controller.getMessage(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });

});