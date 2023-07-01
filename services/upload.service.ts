import UploaderService from '../data/uploader.service'

const uploaderService = new UploaderService(process.env.S3_BUCKET_NAME, 'r2')

export default class Uploader {
    public uploadS = async (file: any) => {
        await uploaderService.uploadFile(
            process.env.S3_BUCKET_FOLDER,
            file.newName,
            file.buffer,
            file.mimetype,
            'public-read'
        )
        return {
            url:
                process.env.S3_BUCKET_URL +
                '/' +
                process.env.S3_BUCKET_NAME +
                '/' +
                process.env.S3_BUCKET_FOLDER +
                '/' +
                file.newName,
        }
    }
}
