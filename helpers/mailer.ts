import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

import MailerConfig from "./mailer.config";
import { isFeatureEnabled, FEATURE_FLAGS } from "../configs/features/flag";

const mailConfig =
    process.env.NODE_ENV === "production" ? MailerConfig.production : MailerConfig.development;

export class Mailer {
    private static instance: Mailer;
    private transporter: nodemailer.Transporter;

    private constructor() {
        this.transporter = nodemailer.createTransport(mailConfig);
    }

    public static async initialize(): Promise<void> {
        const mailerEnabled = await isFeatureEnabled(FEATURE_FLAGS.MAILER);
        if (!mailerEnabled) {
            console.log("⚠️ Mailer Feature Flag is disabled.");
            return;
        }

        if (!Mailer.instance) {
            Mailer.instance = new Mailer();
        }
    }

    public static getInstance(): Mailer {
        if (!Mailer.instance) {
            throw new Error("Mailer not initialized. Call Mailer.initialize() first.");
        }
        return Mailer.instance;
    }

    public async sendMail(mail: Mail.Options): Promise<boolean> {
        try {
            await this.transporter.sendMail({
                ...mail,
                from: `${mailConfig.from_name} <${mailConfig.from_email}>`,
            });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}