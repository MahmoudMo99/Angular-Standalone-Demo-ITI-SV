import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function createRegisterForm(fb: FormBuilder): FormGroup {
  return fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
  });
}
