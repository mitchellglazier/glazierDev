import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  showMenu = false;
  today = new Date();
  date =
    this.today.getMonth() +
    1 +
    "/" +
    this.today.getDate() +
    "/" +
    this.today.getFullYear();
  user;
  currentUser;

  constructor(
    public authService: AuthenticationService,
    private firebaseAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.firebaseAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
