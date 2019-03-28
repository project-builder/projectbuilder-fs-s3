//import 'idempotent-babel-polyfill'
import * as AWS from 'aws-sdk';
import * as index from './methods/index.js'

class s3Controller{
    bucket: any;
    S3: any;
    constructor(config){
        // this.model = model;
        this.bucket = config.s3Bucket;
        this.S3 = new AWS.S3();
    }


    addFile = index.addFile
    deleteFile = index.deleteFile
    s3Upload = index.s3Upload
}


export default s3Controller;
