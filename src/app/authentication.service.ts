import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign up */
  signUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log("Successfully signed up!", res);
      })
      .catch(error => {
        console.log("Something is wrong:", error.message);
      });
  }

  /* Sign in */
  signIn(email: string, password: string) {
    this.angularFireAuth
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
    this.angularFireAuth.signOut();
  }
}
