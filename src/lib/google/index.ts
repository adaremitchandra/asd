import { google } from "googleapis";

const CLIENT_ID = "680555851143-9bef9bvaiuji4k0v0r2s1sg4cf3mvd0i.apps.googleusercontent.com";
const CLIENT_SECRET = "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";

export const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, "http://localhost:3000/api/tes/google/callback");
