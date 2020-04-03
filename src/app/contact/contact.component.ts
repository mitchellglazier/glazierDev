import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { CommentService } from "../comment.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  @Input()
  comment: Comment;

  @Input()
  createHandler: Function;

  contactForm: FormGroup;

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      message: new FormControl(null)
    });
  }

  onSubmit() {
    this.commentService
      .createComment(this.contactForm.value)
      .then(newComment => {
        this.createHandler(newComment);
        this.contactForm.reset();
      });
  }
}
