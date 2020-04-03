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
  email: string;
  password: string;

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

  signUp() {
    this.authService.signUp(this.email, this.password);
    this.email = "";
    this.password = "";
  }

  signIn() {
    this.email = "";
    this.password = "";
  }

  signOut() {
    this.authService.signOut();
  }
}
