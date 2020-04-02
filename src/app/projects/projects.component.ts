import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  breakpoint;

  constructor() {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 750 ? 1 : 3;
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 750 ? 1 : 3;
  }
}
