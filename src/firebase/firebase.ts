import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkSkIh1b56B_BnaWOkQBuFwK_1_Jyyi2M",
  authDomain: "tutor-bc8cd.firebaseapp.com",
  projectId: "tutor-bc8cd",
  storageBucket: "tutor-bc8cd.appspot.com",
  messagingSenderId: "424935331840",
  appId: "1:424935331840:web:c6775dfc278480460560e5",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
