const GOOGLE_CLIENT_ID = "142211430280-da5kos8sogc01e20a2a3vb5ebpr3llkd.apps.googleusercontent.com"
Fini
import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { auth } from "./firebase.js";


const googleButton =
  document.getElementById("googleLogin");


if (googleButton) {

  googleButton.addEventListener("click", async () => {

    try {

      googleButton.disabled = true;

      googleButton.innerHTML =
        "Connexion à Google...";


      const provider =
        new GoogleAuthProvider();


      provider.setCustomParameters({
        prompt: "select_account"
      });


      const result =
        await signInWithPopup(
          auth,
          provider
        );


      const user =
        result.user;


      localStorage.setItem(
        "tenshiUser",
        JSON.stringify({

          uid: user.uid,

          name:
            user.displayName ||
            "Utilisateur",

          email:
            user.email ||
            "",

          photo:
            user.photoURL ||
            ""

        })
      );


      window.location.href =
        "dashboard.html";


    } catch (error) {

      console.error(
        "Google Login Error:",
        error
      );


      googleButton.disabled = false;

      googleButton.innerHTML =
        "Continuer avec Google";


      alert(
        "Erreur de connexion Google :\n\n" +
        error.message
      );

    }

  });

}
