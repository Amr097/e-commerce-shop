import nodemailer from "nodemailer";
import { google } from "googleapis";

const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";
const {
  NEXT_PUBLIC_ACTIVATION_GOOGLE_CLIENT_ID,
  NEXT_PUBLIC_ACTIVATION_GOOGLE_CLIENT_SECRET,
  NEXT_PUBLIC_ACTIVATION_SENDER_EMAIL_ADDRESS,
  NEXT_PUBLIC_ACTIVATION_CLIENT_REFRESH_TOKEN,
} = process.env;

const oAuth2Client = new OAuth2(
  NEXT_PUBLIC_ACTIVATION_GOOGLE_CLIENT_ID,
  NEXT_PUBLIC_ACTIVATION_GOOGLE_CLIENT_SECRET,
  NEXT_PUBLIC_ACTIVATION_CLIENT_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
);

export const sendEmail = async (to, url, subject, template, name) => {
  oAuth2Client.setCredentials({
    refresh_token: NEXT_PUBLIC_ACTIVATION_CLIENT_REFRESH_TOKEN,
  });

  const accessToken = await oAuth2Client.getAccessToken();

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: NEXT_PUBLIC_ACTIVATION_SENDER_EMAIL_ADDRESS,
      clientId: NEXT_PUBLIC_ACTIVATION_GOOGLE_CLIENT_ID,
      clientSecret: NEXT_PUBLIC_ACTIVATION_GOOGLE_CLIENT_SECRET,
      accessToken,
      refreshToken: NEXT_PUBLIC_ACTIVATION_CLIENT_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: NEXT_PUBLIC_ACTIVATION_SENDER_EMAIL_ADDRESS,
    to: to,
    subject: subject,
    html: template(to, url, name),
  };

  try {
    const smtp = await smtpTransport.sendMail(mailOptions);
    console.log(smtp);
    return smtp;
  } catch (err) {
    console.error(err + "EMAIL ERR");
    throw err;
  }
};
