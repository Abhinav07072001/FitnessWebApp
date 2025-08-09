import { auth, database } from './firebase-config.js';
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    console.log("Starting registration...");

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created:", userCredential.user);

        const user = userCredential.user;

        await updateProfile(user, {
            displayName: name
        });
        console.log("Profile updated");

        await set(ref(database, "users/" + user.uid), {
            name,
            email,
            uid: user.uid
        });
        console.log("User data stored in DB");

        alert("Registered successfully!");
        window.location.href = "login.html";

    } catch (error) {
        console.error("Firebase Registration Error:", error.code, error.message);
        alert("Error: " + error.message);
    }
});
