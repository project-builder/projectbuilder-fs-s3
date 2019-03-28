const s3Upload = function(params){
    return new Promise((resolve, reject) => {
        this.S3.upload(params, async (err, data) =>{
            if (err) console.log(err);
            else {
                resolve(data.Location);
            }
        })
    })
}

export default s3Upload;