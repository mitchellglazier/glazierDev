import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthenticationService) {}

  ngOnInit(): void {}

  signUp() {
    this.authService.signUp(this.email, this.password);
    this.email = "";
    this.password = "";
  }

  signIn() {
    this.authService.signIn(this.email, this.password);
    this.email = "";
    this.password = "";
  }

  signOut() {
    this.authService.signOut();
  }
}
