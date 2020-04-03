import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Comment } from "./comment";

@Injectable()
export class CommentService {
  private commentsUrl = "/api/comments";

  constructor(private http: Http) {}

  getComments(): Promise<void | Comment[]> {
    return this.http
      .get(this.commentsUrl)
      .toPromise()
      .then(response => response.json() as Comment[])
      .catch(this.handleError);
  }

  createComment(newComment: Comment): Promise<void | Comment> {
    return this.http
      .post(this.commentsUrl, newComment)
      .toPromise()
      .then(response => response.json() as Comment)
      .catch(this.handleError);
  }

  deleteComment(delCommentId: string): Promise<void | string> {
    return this.http
      .delete(this.commentsUrl + "/" + delCommentId)
      .toPromise()
      .then(response => response.json() as string)
      .catch(this.handleError);
  }

  // updateComment(comment: Comment): Observable<Comment> {
  //   const putUrl = this.commentsUrl + "/" + comment._id;
  //   return this.http.put(putUrl, comment) as Observable<Comment>;
  // }

  private handleError(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : "Server error";
    console.error(errMsg); // log to console instead
  }
}
