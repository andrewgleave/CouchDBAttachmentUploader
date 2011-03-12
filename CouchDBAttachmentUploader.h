//
//  CouchDBAttachmentUploader.h
//
//  Created by Andrew on 19/02/2011.
//  Copyright 2011 Red Robot Studios Ltd. All rights reserved.
//


#import "PhoneGapCommand.h"


@interface CouchDBAttachmentUploader : PhoneGapCommand {
    
}

- (void)upload:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end


@interface CouchDBAttachmentUploadDelegate : NSObject {
    NSString* successCallback;
    NSString* failureCallback;
    CouchDBAttachmentUploader *uploader;
}

@property (nonatomic, copy) NSString *successCallback;
@property (nonatomic, copy) NSString *failureCallback;
@property (nonatomic, retain) NSMutableData *responseData;
@property (nonatomic, retain) CouchDBAttachmentUploader *uploader;

@end;