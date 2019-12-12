/**
 * MessagingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class APIController {
    /**
     * getMessage
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getMessage(callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/ping';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, null, _context);
                    _fulfill();
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '400 Request is malformed or invalid';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '400 Request is malformed or invalid',
                        errorCode: 400,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 401) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '401 The specified user does not have access to the account';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '401 The specified user does not have access to the account',
                        errorCode: 401,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '403 The user does not have access to this API';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '403 The user does not have access to this API',
                        errorCode: 403,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '404 Path not found';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '404 Path not found',
                        errorCode: 404,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 415) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '415 The content-type of the request is incorrect';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '415 The content-type of the request is incorrect',
                        errorCode: 415,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 429) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '429 The rate limit has been reached';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '429 The rate limit has been reached',
                        errorCode: 429,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * listMedia
     *
     * @param {string} userId TODO: type description here
     * @param {string} continuationToken (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static listMedia(userId, continuationToken, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/users/{userId}/media';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            userId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'Continuation-Token': continuationToken,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = parsed.map(model =>
                        _baseController.getObjectMapper().mapObject(model, 'Media'));
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '400 Request is malformed or invalid';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '400 Request is malformed or invalid',
                        errorCode: 400,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 401) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '401 The specified user does not have access to the account';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '401 The specified user does not have access to the account',
                        errorCode: 401,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '403 The user does not have access to this API';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '403 The user does not have access to this API',
                        errorCode: 403,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '404 Path not found';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '404 Path not found',
                        errorCode: 404,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 415) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '415 The content-type of the request is incorrect';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '415 The content-type of the request is incorrect',
                        errorCode: 415,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 429) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '429 The rate limit has been reached';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '429 The rate limit has been reached',
                        errorCode: 429,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * getMedia
     *
     * @param {string} userId TODO: type description here
     * @param {string} mediaId TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getMedia(userId, mediaId, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/users/{userId}/media/{mediaId}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            userId,
            mediaId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                response = _context.response.body;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '400 Request is malformed or invalid';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '400 Request is malformed or invalid',
                        errorCode: 400,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 401) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '401 The specified user does not have access to the account';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '401 The specified user does not have access to the account',
                        errorCode: 401,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '403 The user does not have access to this API';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '403 The user does not have access to this API',
                        errorCode: 403,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '404 Path not found';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '404 Path not found',
                        errorCode: 404,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 415) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '415 The content-type of the request is incorrect';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '415 The content-type of the request is incorrect',
                        errorCode: 415,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 429) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '429 The rate limit has been reached';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '429 The rate limit has been reached',
                        errorCode: 429,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * uploadMedia
     *
     * @param {string} userId TODO: type description here
     * @param {string} mediaId TODO: type description here
     * @param {long} contentLength TODO: type description here
     * @param {string} body TODO: type description here
     * @param {string} contentType (optional) TODO: type description here
     * @param {string} cacheControl (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static uploadMedia(userId,
        mediaId,
        contentLength,
        body,
        contentType,
        cacheControl,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/users/{userId}/media/{mediaId}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            userId,
            mediaId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'content-type': 'text/plain; charset=utf-8',
            'Content-Length': contentLength,
            'Content-Type': contentType,
            'Cache-Control': cacheControl,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'PUT',
            headers: _headers,
            body: body,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, null, _context);
                    _fulfill();
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '400 Request is malformed or invalid';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '400 Request is malformed or invalid',
                        errorCode: 400,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 401) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '401 The specified user does not have access to the account';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '401 The specified user does not have access to the account',
                        errorCode: 401,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '403 The user does not have access to this API';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '403 The user does not have access to this API',
                        errorCode: 403,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '404 Path not found';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '404 Path not found',
                        errorCode: 404,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 415) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '415 The content-type of the request is incorrect';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '415 The content-type of the request is incorrect',
                        errorCode: 415,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 429) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '429 The rate limit has been reached';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '429 The rate limit has been reached',
                        errorCode: 429,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * deleteMedia
     *
     * @param {string} userId TODO: type description here
     * @param {string} mediaId TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteMedia(userId, mediaId, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/users/{userId}/media/{mediaId}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            userId,
            mediaId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'DELETE',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, null, _context);
                    _fulfill();
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '400 Request is malformed or invalid';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '400 Request is malformed or invalid',
                        errorCode: 400,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 401) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '401 The specified user does not have access to the account';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '401 The specified user does not have access to the account',
                        errorCode: 401,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '403 The user does not have access to this API';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '403 The user does not have access to this API',
                        errorCode: 403,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '404 Path not found';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '404 Path not found',
                        errorCode: 404,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 415) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '415 The content-type of the request is incorrect';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '415 The content-type of the request is incorrect',
                        errorCode: 415,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 429) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '429 The rate limit has been reached';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '429 The rate limit has been reached',
                        errorCode: 429,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * createMessage
     *
     * @param {string} userId TODO: type description here
     * @param {MessageRequest} body (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createMessage(userId, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/users/{userId}/messages';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            userId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'BandwidthMessage');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '400 Request is malformed or invalid';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '400 Request is malformed or invalid',
                        errorCode: 400,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 401) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '401 The specified user does not have access to the account';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '401 The specified user does not have access to the account',
                        errorCode: 401,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '403 The user does not have access to this API';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '403 The user does not have access to this API',
                        errorCode: 403,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'PathClientException');
                    mappedObject.reason = '404 Path not found';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '404 Path not found',
                        errorCode: 404,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 415) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '415 The content-type of the request is incorrect';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '415 The content-type of the request is incorrect',
                        errorCode: 415,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 429) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'GenericClientException');
                    mappedObject.reason = '429 The rate limit has been reached';
                    mappedObject.context = _context;
                    const _err = { errorMessage: '429 The rate limit has been reached',
                        errorCode: 429,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = APIController;