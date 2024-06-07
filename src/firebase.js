import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_NrRa3yRm-w-i5yv1_BPSVAD0mGzrLM4",
  authDomain: "chat-251a2.firebaseapp.com",
  projectId: "chat-251a2",
  storageBucket: "chat-251a2.appspot.com",
  messagingSenderId: "276941115272",
  appId: "1:276941115272:web:6e4a55c98b7300bb84b43d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();