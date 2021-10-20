import { initializeApp } from "firebase/app";
import firebaseConfigure from "./Firebase.config";
import firebaseConfig from "./Firebase.config";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;