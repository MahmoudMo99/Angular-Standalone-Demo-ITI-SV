import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  onSubmit(form: NgForm) {
    console.log('form values : ', form.value);
    alert(`your email is : ${form.value.email}
    and your password is : ${form.value.password}`);
  }
}
