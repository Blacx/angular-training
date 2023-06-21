import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-form';
  submitted: boolean = false;
  defaultQuestion: string = 'pet';
  @ViewChild('f') signUpform: NgForm;

  user = {
    username: '',
    email: '',
    secret: ''
  }

  onSubmit(form: NgForm) {
    this.user.username = this.signUpform.value.username;
    this.user.email = this.signUpform.value.email;
    this.user.secret = this.signUpform.value.secret;
    this.submitted = true;
    console.log(form);
    //this.signUpform.reset();
  }

}
