"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import 'idempotent-babel-polyfill'
const AWS = require("aws-sdk");
const index = require("./methods/index.js");
class s3Controller {
    constructor(config) {
        this.addFile = index.addFile;
        this.deleteFile = index.deleteFile;
        this.s3Upload = index.s3Upload;
        // this.model = model;
        this.bucket = config.bucket;
        this.S3 = new AWS.S3();
    }
}
exports.default = s3Controller;
