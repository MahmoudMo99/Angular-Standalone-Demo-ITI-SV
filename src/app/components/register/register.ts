import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { createRegisterForm } from '../../forms/register-form';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formWithControls!: FormGroup;
  // formRegisterBuilder!: FormGroup;
  formWithExternal!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formWithControls = new FormGroup({
      // required, min-length = 3
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),

      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
    });

    // this.formRegisterBuilder = this.fb.group({
    //  name: ['', [Validators.required, Validators.minLength(5)]],
    // email: [
    //   '',
    //   [
    //     Validators.required,
    //     Validators.email,
    //     Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    //   ],
    // ],
    // });

    this.formWithExternal = createRegisterForm(this.fb);
  }

  onSubmit() {
    console.log('Internal form values : ', this.formWithControls.value);

    localStorage.setItem('userName', this.formWithControls.value.name);
    localStorage.setItem('userEmail', this.formWithControls.value.email);

    if (localStorage.getItem('userName') && localStorage.getItem('userEmail')) {
      console.log('authorized');
    }
  }

  // onExternalFormSubmit() {
  //   console.log('External form values : ', this.formWithExternal.value);
  // }
}
