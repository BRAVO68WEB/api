import mailer from "../helpers/mailer";

export default class IPInfo {
    public postQueryToMail = async (contactData: IContactFormInput) => {
        return await mailer({
            to: "hi-api@b68.dev",
            from: "api@b68web.xyz",
            replyTo: contactData.email,
            subject: "New Contact form regarding " + contactData.subject,
            text: `Name: ${contactData.name}\nEmail: ${contactData.email}\nMessage: ${contactData.message}`,
        });
    };
}
