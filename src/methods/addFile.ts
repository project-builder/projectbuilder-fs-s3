const addFile = async function(id, model, files){
    let allS3Links = [];

    for(const file of files) {
        let renamedFile = file.originalname.replace(/ /g, "_");

        let params = {
            ACL: "public-read",
            Body: file.buffer,
            Bucket: this.bucket,
            Key: `${model}/${id}/${renamedFile}`,
            ServerSideEncryption: "AES256",
       };

       await this.s3Upload(params).then(p => {
            allS3Links.push(p)
        });
    }

return allS3Links;

}

export default addFile;
