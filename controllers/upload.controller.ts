import { Context } from "hono";

import Uploader from "../services/upload.service";

export default class UploadController extends Uploader {
    public upload = async (ctx: Context) => {
        try {
            const { file } = await ctx.req.parseBody();
            if (!file || typeof file !== "object") {
                throw new Error("Please upload a file");
            }
            const data = await this.uploadS(file);
            return ctx.json({
                success: true,
                message: "File uploaded successfully",
                data,
            });
        } catch {
            return ctx.json({
                success: false,
                message: "Error uploading file",
                data: {},
            });
        }
    };
}
