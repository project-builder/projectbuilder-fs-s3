"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("idempotent-babel-polyfill");
const aws_sdk_1 = require("aws-sdk");
const index = require("./methods/index.js");
class s3Controller {
    constructor(config) {
        this.addFile = index.addFile;
        this.deleteFile = index.deleteFile;
        this.s3Upload = index.s3Upload;
        // this.model = model;
        this.bucket = config.bucket;
        this.S3 = new aws_sdk_1.default.S3();
    }
}
exports.default = s3Controller;
