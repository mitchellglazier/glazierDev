import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Comment } from "./comment";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CommentService {
  private commentsUrl = "/api/comments";

  constructor(private http: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.http.get(this.commentsUrl) as Observable<Comment[]>;
  }

  createComment(newComment: Comment): Observable<Comment> {
    return this.http.post(this.commentsUrl, newComment) as Observable<Comment>;
  }

  deleteComment(commentId: string): Observable<Comment> {
    return this.http.delete(this.commentsUrl + "/" + commentId) as Observable<
      Comment
    >;
  }

  updateComment(comment: Comment): Observable<Comment> {
    const putUrl = this.commentsUrl + "/" + comment._id;
    return this.http.put(putUrl, comment) as Observable<Comment>;
  }
}
