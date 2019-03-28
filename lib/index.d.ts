declare class s3Controller {
    bucket: any;
    S3: any;
    constructor(config: any);
    addFile: (id: any, model: any, files: any) => Promise<any[]>;
    deleteFile: (files: any) => Promise<void>;
    s3Upload: (params: any) => Promise<{}>;
}
export default s3Controller;
