// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth,
    getReactNativePersistence} from 'firebase/auth/react-native'
    import AsyncStorage from '@react-native-async-storage/async-storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzUcKQpKuVbhaTefTiJdr7ynTH3VBcwkk",
  authDomain: "ttuchat-955db.firebaseapp.com",
  projectId: "ttuchat-955db",
  storageBucket: "ttuchat-955db.appspot.com",
  messagingSenderId: "616561264181",
  appId: "1:616561264181:web:bb7c68ac14d33a8fb1537c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)
})