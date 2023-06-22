import { initializeApp, cert} from "firebase-admin/app";
import { getFirestore } from "firestore-admin/firestore";
import { creds } from "../credentials.js";

initializeApp ({
    credential: cert(creds)
});

export const db = getFirestore();