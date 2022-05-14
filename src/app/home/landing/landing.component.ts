import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

  fb: FormBuilder = new FormBuilder();
  contactForm: FormGroup = new FormGroup({});
  constructor(private contactSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z ,.'-]+$")]],
      email: ['', [Validators.email, Validators.required]],
      message: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9?$@#() '!,+\-=_:.&€£*%\s]+$")]]
    })
  }

  sendMessage() {
      this.openSnackBar(`Message sent. Thanks, ${this.contactForm.get('name')?.value}!`, 'Ok')
      this.contactForm.reset();
      
  }

  openSnackBar(message: string, action: string) {
    this.contactSnackBar.open(message, action);
  }
}
