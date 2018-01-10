let AWS = require('aws-sdk');
exports.handler = function(event, context, callback){
    console.log("Event", event);
    callback(null, "success");
}