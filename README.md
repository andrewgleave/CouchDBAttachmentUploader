#CouchDbAttachmentUploader

Enables a Cordova app to push binary attachments straight to a CouchDB database

###Installation

1. Put the .h and .m files of the plugin in your Xcode project
2. Put the .js file to your www folder
3. Load the .js file in your HTML file, right after loading cordova
4. In file Cordova.plist, add an entry to array "plugins"
     key: CouchDBAttachmentUploader
     value: (String) CouchDBAttachmentUploader

###Usage

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

