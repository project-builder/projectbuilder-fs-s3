"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const s3Upload = function (params) {
    return new Promise((resolve, reject) => {
        this.S3.upload(params, async (err, data) => {
            if (err)
                console.log(err);
            else {
                resolve(data.Location);
            }
        });
    });
};
exports.default = s3Upload;
