import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthenticationService } from "./authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  showMenu = false;
  date = new Date();

  constructor(public authService: AuthenticationService) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
