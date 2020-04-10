import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  /* Sign up */
  signUp(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log("Successfully signed up!", res.user.email);
      })
      .catch(error => {
        console.log("Something is wrong:", error.message);
      });
  }

  /* Sign in */
  signIn(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log("Successfully signed in!");
      })
      .catch(err => {
        console.log("Something is wrong:", err.message);
      });
  }

  /* Sign out */
  signOut() {
    this.firebaseAuth.signOut();
  }
}
