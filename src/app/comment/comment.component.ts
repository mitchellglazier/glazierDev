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

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get("id");
    this.commentService.getComment(id).then(comment => {
      this.comment = comment;
    });
  }

  ngOnInit() {}
}
