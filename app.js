import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "123456789",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("complaintForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const complaint = document.getElementById("complaint").value;

    try {
        await addDoc(collection(db, "complaints"), {
            name: name,
            email: email,
            complaint: complaint,
            date: new Date()
        });

        document.getElementById("msg").innerHTML =
            "Complaint Submitted Successfully";

        document.getElementById("complaintForm").reset();

    } catch (error) {
        document.getElementById("msg").innerHTML =
            "Error: " + error.message;
    }
});