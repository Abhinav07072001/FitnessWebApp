// Import the functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

// ✅ UPDATED Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1DKBegxd5xlvkdOkTeyKzxhVYP8Uw0EU",
  authDomain: "fitnesswebapp-7e7be.firebaseapp.com",
  projectId: "fitnesswebapp-7e7be",
  storageBucket: "fitnesswebapp-7e7be.appspot.com", // ✅ also fixed this line
  messagingSenderId: "229641095337",
  appId: "1:229641095337:web:aed1ecea00ec50b7c581b8",

  // ✅ Use correct regional DB URL
  databaseURL: "https://fitnesswebapp-7e7be-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
