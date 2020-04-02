import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      message: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
