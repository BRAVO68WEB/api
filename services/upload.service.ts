import UploaderService from "../data/uploader_client";

const uploaderService = new UploaderService(process.env.R2_BUCKET_NAME);

export default class Uploader {
    public uploadS = async (file: File) => {
        const newName = Date.now() + "-" + file.name;
        await uploaderService.uploadFile(
            process.env.R2_BUCKET_FOLDER,
            newName,
            file,
            "public-read",
        );
        return {
            url:
                process.env.R2_BUCKET_URL +
                "/" +
                process.env.R2_BUCKET_NAME +
                "/" +
                process.env.R2_BUCKET_FOLDER +
                "/" +
                newName,
        };
    };
}
