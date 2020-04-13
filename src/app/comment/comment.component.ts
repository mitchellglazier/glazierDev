import { Component, OnInit } from "@angular/core";
import { CommentService } from "../comment.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {
  commentSub: Subscription;
  comment;
  id;

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.commentService.getComment(this.id).then(comment => {
      this.comment = comment;
    });
  }
}
