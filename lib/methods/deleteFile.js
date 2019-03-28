"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deleteFile = async function (files) {
    console.log('DELFILS', files);
    let strippedFileNames = [];
    files.forEach(file => {
        let awsPrefix = `https://s3.amazonaws.com/${this.bucket}/`;
        let strippedFile = file.replace(new RegExp(awsPrefix, 'g'), "");
        strippedFileNames.push({ Key: strippedFile });
    });
    console.log(`################## ${strippedFileNames} #################`);
    var params = {
        Bucket: this.bucket,
        Delete: {
            Objects: strippedFileNames,
            Quiet: false
        }
    };
    this.S3.deleteObjects(params, (err, data) => {
        if (err)
            console.log(err);
        else
            console.log(data);
    });
};
exports.default = deleteFile;
