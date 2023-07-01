import { S3Client, PutObjectCommand, S3ClientConfig } from '@aws-sdk/client-s3'

type IUploaderServerType = 's3' | 'r2' | 'safe'

export default class UploaderService {
    private static _s3Client
    private static _s3Opts

    constructor(bucket, clientType: IUploaderServerType = 's3') {
        const options = {
            bucket,
        }
        UploaderService._s3Opts = options

        if (clientType === 's3') {
            const s3ClientOpts: S3ClientConfig = {
                region: process.env.S3_BUCKET_REGION || '',
                endpoint: process.env.S3_BUCKET_ENDPOINT || '',
                forcePathStyle: true,
                credentials: {
                    accessKeyId: process.env.S3_CLIENT_ID || '',
                    secretAccessKey: process.env.S3_CLIENT_SECRET || '',
                },
            }
            const client = new S3Client(s3ClientOpts)
            UploaderService._s3Client = client
        } else if (clientType === 'r2') {
            const s3ClientOpts: S3ClientConfig = {
                region: process.env.R2_BUCKET_REGION || '',
                endpoint: process.env.R2_BUCKET_ENDPOINT || '',
                forcePathStyle: true,
                credentials: {
                    accessKeyId: process.env.R2_CLIENT_ID || '',
                    secretAccessKey: process.env.R2_CLIENT_SECRET || '',
                },
            }
            const client = new S3Client(s3ClientOpts)
            UploaderService._s3Client = client
        }
    }

    async uploadFile(
        entity: string,
        id: string,
        file: Buffer,
        fileType: string,
        acl?: string
    ) {
        const key = [entity, id].join('/')
        const uploadParams = {
            Bucket: UploaderService._s3Opts.bucket,
            ACL: acl,
            ContentType: fileType,
            Body: file,
            Key: key,
        }
        await UploaderService._s3Client.send(new PutObjectCommand(uploadParams))
        return {
            url: process.env.S3_BUCKET_URL,
            bucket_name: process.env.S3_BUCKET_NAME,
            folder: process.env.S3_BUCKET_FOLDER,
        }
    }
}
