import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDdelB-Sfe0Bcqvc6bUiAUWMMVVda_fUDU",
    authDomain: "master-shukumar.firebaseapp.com",
    projectId: "master-shukumar",
    storageBucket: "master-shukumar.appspot.com",
    messagingSenderId: "583838608035",
    appId: "1:583838608035:web:d76db9c8bf2056f2562d16"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;