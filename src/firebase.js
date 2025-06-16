// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCRZ_Cx80biL8U2WPRZAjXk13RPd4tvE08",
  authDomain: "avcommunication-abd1c.firebaseapp.com",
  databaseURL: "https://avcommunication-abd1c-default-rtdb.firebaseio.com",
  projectId: "avcommunication-abd1c",
  appId: "1:801367056364:web:c0c2c985c7e01d46e3eac9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
