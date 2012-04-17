#CouchDbAttachmentUploader

Enables a Cordova app to push binary attachments straight to a CouchDB database

###Usage

Put the .h and .m files of the plugin in your Xcode project and add the .js file to your www folder.

    window.plugins.CouchDBAttachmentUploader.upload($('#id_camera_image').attr('src'),
        'http://127.0.0.1:5984/couchdb',
        doc.id,
        doc.rev,
        function() { 
            //success callback
        },
        function(error) {
            //failure callback
        },
        {contentType: 'image/jpeg',
        method: 'put',
        attachmentName: 'photo.jpg'});

