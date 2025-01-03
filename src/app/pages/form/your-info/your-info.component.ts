import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './your-info.component.html',
  styleUrl: './your-info.component.scss'
})
export class YourInfoComponent {

  firstForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private router: Router) {
    this.firstForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)])
    });
  }

  allowOnlyNumbers(event: KeyboardEvent): void {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }


  onSubmit() {
    this.submitted = true;

    if (this.firstForm.valid) {

      this.success = true;

      console.log('Form submitted!');

      const formValues = this.firstForm.value;
      const formData = {
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phone
      }
      localStorage.setItem('name', JSON.stringify(formData.name));
      localStorage.setItem('email', JSON.stringify(formData.email));
      localStorage.setItem('phone', JSON.stringify(formData.phone));
      this.router.navigate(['select-plan']);
      
      this.firstForm.reset();
      this.submitted = false;
    }
    else {
      this.success = false;
      console.log('Invalid Form Submission');
    }
  }

}
