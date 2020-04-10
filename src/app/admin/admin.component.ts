import { Component, OnInit, Input } from "@angular/core";
import { CommentService } from "../comment.service";
import { DataSource } from "@angular/cdk/collections";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  comments;
  selectedComment: Comment;

  @Input()
  deleteHandler: Function;

  constructor(
    private commentService: CommentService,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.commentService.getComments().then(comments => {
      this.comments = comments;
    });
  }

  deleteComment(commentId: string) {
    this.commentService
      .deleteComment(commentId)
      .then((deletedCommentId: string) => {
        this.deleteHandler(deletedCommentId);
      });
  }

  signOut() {
    this.authService.signOut();
  }
}
