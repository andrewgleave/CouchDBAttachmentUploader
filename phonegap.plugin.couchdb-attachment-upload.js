/*
*   PhoneGap CouchDB Attachment Uploader Plugin
*   Copyright 2011 Red Robot Studios Ltd. All rights reserved.
*   Based on Matt Kane's File Upload Plugin
*/


var CouchDBAttachmentUploader = function() {}

CouchDBAttachmentUploader.prototype.upload = function(filepath, couchURI, docID, docRevision,  success, failure, options) {
    
    var key = 'f' + this.callbackIdx++;
    window.plugins.CouchDBAttachmentUploader.callbackMap[key] = {
        success: function(result) {
            success(result);
            delete window.plugins.CouchDBAttachmentUploader.callbackMap[key]
        },
        failure: function(result) {
            failure(result);
            delete window.plugins.CouchDBAttachmentUploader.callbackMap[key]
        }
    }
    var callback = 'window.plugins.CouchDBAttachmentUploader.callbackMap.' + key;
    return PhoneGap.exec('CouchDBAttachmentUploader.upload', filepath, couchURI, docID, 
                         docRevision, callback + '.success', callback + '.failure', options);
}

CouchDBAttachmentUploader.prototype.callbackMap = {};
CouchDBAttachmentUploader.prototype.callbackIdx = 0;

PhoneGap.addConstructor(function()  {
    if(!window.plugins) {
        window.plugins = {};
    }
    window.plugins.CouchDBAttachmentUploader = new CouchDBAttachmentUploader();
});
