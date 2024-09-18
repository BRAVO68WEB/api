import { ObjectCannedACL, S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

export default class UploaderService {
    private static _s3Client;
    private static _s3Opts;

    constructor(bucket) {
        const options = {
            bucket,
        };
        UploaderService._s3Opts = options;
        const s3ClientOpts: S3ClientConfig = {
            region: process.env.R2_BUCKET_REGION || "",
            endpoint: process.env.R2_BUCKET_ENDPOINT || "",
            forcePathStyle: true,
            credentials: {
                accessKeyId: process.env.R2_CLIENT_ID || "",
                secretAccessKey: process.env.R2_CLIENT_SECRET || "",
            },
        };
        const client = new S3Client(s3ClientOpts);
        UploaderService._s3Client = client;
    }

    async uploadFile(entity: string, id: string, file: File, acl: ObjectCannedACL) {
        const parallelUploads3 = new Upload({
            client: UploaderService._s3Client,
            params: {
                Bucket: UploaderService._s3Opts.bucket,
                ACL: acl,
                Body: file,
                Key: entity + "/" + id,
            },
        });

        await parallelUploads3.done();
    }
}
