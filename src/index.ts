//import 'idempotent-babel-polyfill'
import AWS from 'aws-sdk';
import * as index from './methods/index.js'

class s3Controller{
    constructor(config){
        // this.model = model;
        this.bucket = config.bucket;
        this.S3 = new AWS.S3();
    }


    addFile = index.addFile
    deleteFile = index.deleteFile
    s3Upload = index.s3Upload
}


export default s3Controller;
