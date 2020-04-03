import { Component, OnInit } from "@angular/core";
import { CommentService } from "../comment.service";
import { DataSource } from "@angular/cdk/collections";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  comments;
  selectedComment: Comment;

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.commentService.getComments().then(comments => {
      this.comments = comments;
    });
  }
}
